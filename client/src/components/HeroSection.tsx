import { useEffect, useState } from "react";

export default function HeroSection() {
  const [outsideTemp, setOutsideTemp] = useState(36.4);
  const [agentMessage, setAgentMessage] = useState(
    "Fruiting stage, day 3. CO₂ holding at 620 ppm — within optimal range for lion's mane pinning. Monitoring for humidity drift."
  );

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOutsideTemp(35 + Math.random() * 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const agentMessages = [
    "Fruiting stage, day 3. CO₂ holding at 620 ppm — within optimal range for lion's mane pinning. Monitoring for humidity drift.",
    "External ambient temperature spiked to 38°C. AHU load increased — holding internal setpoint at 21°C.",
    "Humidity trending 0.4% above target. Adjusting ventilation cycle to compensate. No manual action required.",
    "Night cycle initiated. Reducing LED intensity to 20%. Temperature setpoint lowered to 19.5°C for optimal mycelial recovery.",
  ];

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % agentMessages.length;
      setAgentMessage(agentMessages[idx]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Full-screen video background — autoplay, muted, looping */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}manus-storage/hero-combined-20s_6d98780a.mp4`} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16241C]/85 via-[#16241C]/60 to-[#16241C]/40" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-moss animate-pulse-dot" />
              <span className="font-data text-xs uppercase tracking-[0.2em] text-[#F6F3EC]/60">
                AI-Powered Urban Farming
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-[#F6F3EC]">
              Great harvests don't happen by chance.{" "}
              <em className="text-moss not-italic">We engineered certainty.</em>
            </h1>

            <p className="font-body text-lg text-[#F6F3EC]/80 max-w-lg leading-relaxed">
              Agrorithm builds AI-controlled growing pods that maintain a precise
              microclimate for mushrooms and vegetables — regardless of what's
              happening outside.
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-moss animate-pulse-dot" />
              <span className="font-data text-xs uppercase tracking-[0.15em] text-[#F6F3EC]/50">
                Powered by agentic AI
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-moss text-[#F6F3EC] font-body font-semibold rounded-sm hover:bg-moss/80 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#pod"
                className="inline-flex items-center px-6 py-3 border border-[#F6F3EC]/30 text-[#F6F3EC] font-body font-semibold rounded-sm hover:border-moss hover:text-moss transition-colors"
              >
                See the pod
              </a>
            </div>
          </div>

          {/* Right: Live Climate Panel */}
          <div className="bg-[#16241C]/80 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-2xl border border-[#F6F3EC]/10">
            {/* Outside */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-data text-xs uppercase tracking-wider text-[#F6F3EC]/50">
                Outside today
              </span>
              <span className="font-data text-[10px] uppercase tracking-wider px-2 py-0.5 border border-amber-500/40 text-amber-400 rounded">
                Volatile
              </span>
            </div>
            <div className="flex gap-6 mb-8">
              <span className="font-data text-2xl text-amber-400">
                {outsideTemp.toFixed(1)}°C
              </span>
              <span className="font-data text-2xl text-[#F6F3EC]/60">
                83% RH
              </span>
            </div>

            {/* Inside */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-data text-xs uppercase tracking-wider text-[#F6F3EC]/50">
                Inside the pod
              </span>
              <span className="font-data text-[10px] uppercase tracking-wider px-2 py-0.5 border border-moss/40 text-moss rounded">
                Held steady, 24/7
              </span>
            </div>
            <div className="flex gap-4 md:gap-6 mb-8">
              <span className="font-data text-2xl text-[#F6F3EC]">21.0°C</span>
              <span className="font-data text-2xl text-[#F6F3EC]">88% RH</span>
              <span className="font-data text-2xl text-[#F6F3EC]">620 ppm</span>
            </div>

            {/* Agent Reasoning */}
            <div className="border-t border-[#F6F3EC]/10 pt-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse-dot" />
                <span className="font-data text-[10px] uppercase tracking-[0.2em] text-[#F6F3EC]/50">
                  Agent reasoning
                </span>
              </div>
              <p className="font-body text-sm text-[#F6F3EC]/70 italic leading-relaxed">
                {agentMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
