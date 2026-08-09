import { useEffect, useRef, useState } from 'react';

/**
 * Preloads a numbered JPEG sequence with a bounded concurrency pool.
 */
const CONCURRENCY = 8;

export type FrameSequence = {
  frames: (HTMLImageElement | undefined)[];
  ready: boolean;
  progress: number;
  failed: boolean;
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // decode() moves JPEG decode off the first paint
      if (typeof img.decode === 'function') {
        img.decode().then(
          () => resolve(img),
          () => resolve(img)
        );
      } else {
        resolve(img);
      }
    };
    img.onerror = () => reject(new Error(`frame failed: ${src}`));
  });
}

export function useFrameSequence(
  count: number,
  srcFor: (index: number) => string,
  leadFrames: number,
  enabled: boolean
): FrameSequence {
  const framesRef = useRef<(HTMLImageElement | undefined)[]>(
    new Array(count).fill(undefined)
  );
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;
    const frames = framesRef.current;
    let done = 0;
    let errors = 0;

    const bump = () => {
      done += 1;
      if (!cancelled) setProgress(done / count);
    };

    async function run() {
      // Phase 1 — first frame alone
      try {
        frames[0] = await loadImage(srcFor(1));
        bump();
      } catch {
        if (!cancelled) setFailed(true);
        return;
      }
      if (cancelled) return;

      // Phase 2 — lead window, then unblock interaction
      const lead: Promise<void>[] = [];
      for (let i = 2; i <= Math.min(leadFrames, count); i++) {
        const idx = i;
        lead.push(
          loadImage(srcFor(idx))
            .then((img) => {
              frames[idx - 1] = img;
            })
            .catch(() => {
              errors += 1;
            })
            .then(bump)
        );
      }
      await Promise.all(lead);
      if (cancelled) return;
      setReady(true);

      // Phase 3 — remaining frames through a fixed-size pool
      let next = Math.min(leadFrames, count) + 1;
      const worker = async () => {
        for (;;) {
          const idx = next++;
          if (idx > count || cancelled) return;
          try {
            frames[idx - 1] = await loadImage(srcFor(idx));
          } catch {
            errors += 1;
          }
          bump();
        }
      };
      await Promise.all(
        Array.from({ length: CONCURRENCY }, () => worker())
      );
      
      if (!cancelled && errors > count / 2) setFailed(true);
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, [count, srcFor, leadFrames, enabled]);

  return { frames: framesRef.current, ready, progress, failed };
}
