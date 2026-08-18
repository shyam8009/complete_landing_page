const fs = require('fs');
let content = fs.readFileSync('src/components/InteractiveBlueprint.tsx', 'utf8');

// 1. Find the start of the desktop container
const desktopStart = '<div className="hidden md:flex max-w-[1600px] mx-auto px-4 lg:px-8 w-full relative z-10 flex-row gap-12 lg:gap-24 items-center">';

// Replace it with the new layout
const newLayout = {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex flex-col max-w-[1600px] mx-auto px-4 lg:px-8 w-full relative z-10 pt-24 pb-24">
        
        {/* Section Header (Now above the columns for perfect alignment) */}
        <div className="mb-12 w-full md:w-1/3">
          <span className="text-[#0052FF] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 uppercase tracking-tight leading-tight" dangerouslySetInnerHTML={{__html: title.replace(' ', '<br/>')}}>
          </h2>
        </div>

        {/* Two-Column Grid for Timeline & Media */}
        <div className="flex flex-row gap-12 lg:gap-24 items-start w-full">
        
          {/* LEFT COLUMN: Architecture Nav Tree */}
          <div ref={leftColRef} className="w-full md:w-1/3 relative flex flex-col h-auto">;

content = content.replace(desktopStart, newLayout);

// 2. Remove the old left column start and old Section Header
const oldLeftCol = <div ref={leftColRef} className="w-full md:w-1/3 relative flex flex-col justify-between pt-12 md:py-12 h-auto md:h-[70vh]">
          
          {/* Section Header */}
          <div className="mb-8">
            <span className="text-[#0052FF] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              {subtitle}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 uppercase tracking-tight leading-tight" dangerouslySetInnerHTML={{__html: title.replace(' ', '<br/>')}}>
            </h2>
          </div>;

content = content.replace(oldLeftCol, '');

// 3. Update the Nodes container
const oldNodes = <div className="flex flex-row md:flex-col justify-start md:justify-between flex-grow md:pl-14 relative z-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-8 md:gap-0 pb-4 md:pb-0 border-b border-slate-200 md:border-none scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">;

const newNodes =           {/* Nodes */}
            <div className="flex flex-row md:flex-col justify-start flex-grow md:pl-14 relative z-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-8 md:gap-[40px] pb-4 md:pb-0 border-b border-slate-200 md:border-none scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">;

content = content.replace(oldNodes, newNodes);

// 4. Update the RIGHT COLUMN wrapper height
const oldRightCol = {/* RIGHT COLUMN: Dynamic Spec Inspector */}
        <div className="w-full md:w-2/3 relative h-[600px] md:h-[70vh] mt-8 md:mt-0">;

const newRightCol = {/* RIGHT COLUMN: Dynamic Spec Inspector */}
          <div className="w-full md:w-2/3 relative h-[600px]">;

content = content.replace(oldRightCol, newRightCol);

// 5. Close the new wrapper div at the end of desktop layout
const oldDesktopEnd =         </div>
      </div>

      {/* MOBILE ACCORDION (Visible only on < 768px) */};

const newDesktopEnd =           </div>
        </div>
      </div>

      {/* MOBILE ACCORDION (Visible only on < 768px) */};

content = content.replace(oldDesktopEnd, newDesktopEnd);

fs.writeFileSync('src/components/InteractiveBlueprint.tsx', content);
console.log('Done!');
