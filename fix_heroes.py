import os
import re

files_to_check = [
    "src/pages/CommandControl/components/CommandControlHero.tsx",
    "src/pages/CommunicationDetection/components/CommunicationDetectionHero.tsx",
    "src/pages/CommunicationMonitoring/components/CommunicationMonitoringHero.tsx",
    "src/pages/DroneSystems/components/DroneSystemsHero.tsx",
    "src/pages/ElectroOptics/components/Hero.tsx",
    "src/pages/IntelligenceSurveillance/components/IntelligenceSurveillanceHero.tsx",
    "src/pages/JammingSystems/components/JammingSystemsHero.tsx",
    "src/pages/QuantumCommunication/components/QuantumCommunicationHero.tsx",
    "src/pages/QuantumSensing/components/QuantumHero.tsx",
    "src/pages/RadarSystems/components/RadarSystemsHero.tsx"
]

for filepath in files_to_check:
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        # Try the other naming convention for CommunicationDetection
        if "CommunicationDetectionHero" in filepath:
            filepath = filepath.replace("CommunicationDetectionHero.tsx", "Hero.tsx")
            if not os.path.exists(filepath):
                continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove the "Scroll to Explore" block
    # It looks like:
    # {/* 6. Scroll Indicator */}
    # <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
    #   <span className="text-white/40 text-[10px] uppercase tracking-widest mb-4 animate-pulse">Scroll to Explore</span>
    #   <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
    # </div>
    # OR variations of it. Let's just find the div containing "Scroll to Explore" and remove it.
    
    scroll_pattern = re.compile(
        r'\{\/\*\s*\d+\.\s*Scroll Indicator\s*\*\/.*?\}\s*</section>',
        re.DOTALL
    )
    # The above is too greedy if there's other stuff. Let's use string manipulation or a safer regex.
    scroll_pattern_safe = re.compile(
        r'\{\/\*\s*\d+\.\s*Scroll Indicator\s*\*\/\}.*?<div className="w-\[1px\].*?</div>\s*</div>',
        re.DOTALL
    )
    content = scroll_pattern_safe.sub('', content)

    # Alternate match in case it doesn't have the comment
    alt_scroll_pattern = re.compile(
        r'<div className="absolute bottom-10[^>]+>.*?Scroll to Explore.*?</div>\s*</div>',
        re.DOTALL
    )
    content = alt_scroll_pattern.sub('', content)

    # 2. Fix the button positioning
    # It looks like: className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2"
    # We want to change it to: className="mt-16 md:mt-24 w-full"
    # Note: Sometimes it might be bottom-10 or have other variations.
    
    button_wrapper_pattern = re.compile(
        r'className="absolute bottom-\d+ md:bottom-\d+ left-1/2 -translate-x-1/2"'
    )
    content = button_wrapper_pattern.sub('className="mt-16 md:mt-24 w-full"', content)

    # Let's also catch any variation that lacks the md:bottom part
    button_wrapper_alt = re.compile(
        r'className="absolute bottom-\d+ left-1/2 -translate-x-1/2"'
    )
    content = button_wrapper_alt.sub('className="mt-16 md:mt-24 w-full"', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Fixed {filepath}")
