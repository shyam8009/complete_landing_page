import React, { useEffect } from 'react';
import { ChatbotsVoiceHero } from './components/ChatbotsVoiceHero';
import { ChatbotsVoicePipeline } from './components/ChatbotsVoicePipeline';
import { ChatbotsVoiceCapabilities } from './components/ChatbotsVoiceCapabilities';
import { ChatbotsVoiceSpecs } from './components/ChatbotsVoiceSpecs';
import { ChatbotsVoiceApplications } from './components/ChatbotsVoiceApplications';
import { ChatbotsVoiceCTA } from './components/ChatbotsVoiceCTA';

export function ChatbotsVoicePage() {
  useEffect(() => {
    document.title = "Chatbots & Voice Solutions | Defence Deeptech";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Secure, military-grade conversational AI and natural language processing for tactical operations.");
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <ChatbotsVoiceHero />
      <ChatbotsVoicePipeline />
      <ChatbotsVoiceCapabilities />
      <ChatbotsVoiceSpecs />
      <ChatbotsVoiceApplications />
      <ChatbotsVoiceCTA />
    </main>
  );
}
