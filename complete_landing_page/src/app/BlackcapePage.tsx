import type { ReactNode } from "react";

const arrowIcon = "https://www.figma.com/api/mcp/asset/ca562cf9-6081-42b7-a0dd-70cfe47fd294";
const heroMap = "https://www.figma.com/api/mcp/asset/596e0116-7b71-4650-9c63-aa207bba9afb";
const heroOverlay = "https://www.figma.com/api/mcp/asset/c3ee4e27-8024-4530-bac5-ac0e9fd4a189";
const heroPanel = "https://www.figma.com/api/mcp/asset/3631e845-bba1-4472-b299-ec70e7699ae3";
const heroInset = "https://www.figma.com/api/mcp/asset/ef0c877b-5b8a-4938-a9cc-d359a76337b9";
const helicopterBg = "https://www.figma.com/api/mcp/asset/70de8fde-b268-483a-bb5f-17d9db476c9a";
const mountainBg = "https://www.figma.com/api/mcp/asset/82c4f403-373b-43fe-98a0-990caa7b4dde";
const soldiersBg = "https://www.figma.com/api/mcp/asset/806c67fc-c366-4d1a-8085-1119ea77329a";

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[2px] text-[#b566ff] font-medium">
      {children}
    </p>
  );
}

function ArrowIcon() {
  return <img src={arrowIcon} alt="" className="h-4 w-4 object-contain" />;
}

function PillButton({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "secondary" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-[11px] uppercase tracking-[1.2px] transition-all duration-200";
  return (
    <button
      className={
        variant === "primary"
          ? `${base} border-white bg-white text-black hover:bg-[#f2f2f2]`
          : `${base} border-white/20 bg-transparent text-white hover:border-white/60 hover:bg-white/5`
      }
    >
      <span>{children}</span>
      <ArrowIcon />
    </button>
  );
}

export default function BlackcapePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <main className="mx-auto flex max-w-[1600px] flex-col">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute inset-0">
            <img src={heroMap} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.15),_rgba(0,0,0,0.88)_72%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.95)_0%,_rgba(0,0,0,0.7)_50%,_rgba(0,0,0,0.25)_100%)]" />
          </div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="max-w-[760px]">
              <SectionEyebrow>// FORWARD-DEPLOYED AI ENGINEERING</SectionEyebrow>
              <h1 className="mt-6 text-5xl font-normal uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[96px]">
                <span className="block">AI EXPERTISE</span>
                <span className="block">DEPLOYED AT</span>
                <span className="block bg-gradient-to-r from-white via-white/70 to-white/30 bg-clip-text text-transparent">
                  MISSION SPEED.
                </span>
              </h1>

              <p className="mt-8 max-w-[680px] text-lg leading-8 text-white/70 sm:text-xl">
                Black Cape engineers trustworthy AI systems that give US defense and intelligence teams a decisive edge. Every algorithm we ship is explainable, and every product is purpose-built—no black boxes, no vaporware.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <PillButton>Explore Our Solutions</PillButton>
                <PillButton variant="secondary">View Open Roles</PillButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black/40 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10">
                  <img src={heroOverlay} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.05)_0%,_rgba(0,0,0,0.6)_100%)]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[1.4px] text-white/70">
                    Focus Area • 38.902532, -77.050113
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex gap-4 p-4">
                    <div className="w-[56%] overflow-hidden rounded-[18px] border border-white/10 bg-black/40 p-2 backdrop-blur-lg">
                      <img src={heroPanel} alt="" className="h-full w-full rounded-[12px] object-cover" />
                    </div>
                    <div className="w-[44%] overflow-hidden rounded-[18px] border border-white/10 bg-black/40 p-2 backdrop-blur-lg">
                      <img src={heroInset} alt="" className="h-full w-full rounded-[12px] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img src={helicopterBg} alt="" className="absolute left-[54%] top-[-8%] h-[70%] w-[42%] object-cover opacity-20" />
            <img src={mountainBg} alt="" className="absolute right-[-8%] top-[-10%] h-[70%] w-[42%] object-cover opacity-25" />
            <img src={soldiersBg} alt="" className="absolute bottom-[-14%] right-[-4%] h-[54%] w-[26%] object-cover opacity-25" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,1)_0%,rgba(5,5,5,0.94)_45%,rgba(5,5,5,0.3)_100%)]" />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="max-w-[560px]">
              <SectionEyebrow>// WHY BLACK CAPE?</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-normal uppercase leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
                We don't just build AI. We take it to the field.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-8 text-white/70">
              <p>
                The hardest problems in defense don't wait for solutions to catch up, and neither do we. Black Cape was built to close that gap. We bring Silicon Valley-caliber AI talent and deep institutional knowledge of the mission to the most demanding Department of War and Intelligence Community environments.
              </p>
              <p>
                Our approach starts with proximity to the mission. Our forward-deployed engineers embed directly with analysts, operators, and commanders to build AI that earns trust, respects tradecraft, and performs in the field.
              </p>
              <p>
                The result is <span className="text-white underline decoration-white/70 underline-offset-4">AI that operators understand, rely on, and adopt</span>. It is <span className="text-white underline decoration-white/70 underline-offset-4">AI that extends human judgment rather than replacing it</span>.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#050505] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="space-y-8">
              <div>
                <SectionEyebrow>// DEPLOYABLE SOLUTIONS</SectionEyebrow>
                <h2 className="mt-4 text-3xl font-normal uppercase leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
                  Operational AI built for the modern battlespace.
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "[00] AI DISRUPTOR TEAMS",
                  "[01] ASPEN",
                  "[02] RUBICON",
                  "[03] VAULT",
                  "[04] FORUM"
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[16px] border px-4 py-4 text-[11px] uppercase tracking-[1.4px] ${
                      index === 0
                        ? "border-[#7a00ea] bg-white/5 text-white"
                        : "border-white/10 bg-transparent text-white/45"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-[11px] uppercase tracking-[1.4px] text-white/40">
                  TEAM STATUS // READY TO DEPLOY
                </p>
                <div className="h-2.5 w-2.5 rounded-full bg-[#7a00ea]" />
              </div>

              <div className="mt-8 max-w-[680px]">
                <h3 className="text-2xl font-normal uppercase tracking-[0.01em] text-white sm:text-[28px]">
                  AI Disruptor Teams
                </h3>
                <p className="mt-4 text-lg leading-8 text-white/70">
                  We assemble elite cross-functional teams that pair mission operators, researchers, and engineers to move from concept to deployable capability in weeks rather than quarters.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  ["Mission-first", "Rapid fielding and operator feedback loops"],
                  ["Secure by design", "Trusted deployments across sensitive environments"],
                  ["Explainable", "Human-in-the-loop decision support built in"]
                ].map(([title, description]) => (
                  <div key={title} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
                    <h4 className="text-[13px] uppercase tracking-[1.4px] text-white">{title}</h4>
                    <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
