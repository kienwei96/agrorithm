import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AgenticAI() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="ai" className="py-24 md:py-32 bg-forest text-[#F6F3EC]" ref={ref}>
      <div className="container">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-data text-xs uppercase tracking-[0.2em] text-moss block mb-4">
            How the AI works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl max-w-3xl">
            The intelligence behind every harvest.
          </h2>
          <p className="font-body text-lg text-[#F6F3EC]/70 mt-4 max-w-2xl">
            Agrorithm's AI continuously monitors, interprets, and adapts — so
            the growing environment stays precisely where it needs to be, at
            every stage of the crop cycle.
          </p>
        </div>

        {/* Two-speed architecture explainer */}
        <div
          className={`grid lg:grid-cols-2 gap-12 mb-20 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="space-y-6">
            <h3 className="font-display text-2xl">Two-speed intelligence</h3>
            <p className="font-body text-[#F6F3EC]/70 leading-relaxed">
              Our system runs on two layers working together. A{" "}
              <strong className="text-moss">fast local controller</strong>{" "}
              responds to sensor changes in milliseconds — keeping temperature,
              humidity, and CO₂ within safe bounds at all times. Above it, a{" "}
              <strong className="text-moss">slow agentic reasoning layer</strong>{" "}
              thinks across hours and days — planning growth stages, predicting
              crop needs, and making strategic adjustments that optimise yield
              over the full cycle.
            </p>
            <p className="font-body text-[#F6F3EC]/70 leading-relaxed">
              Think of it like a pilot and a navigator. The pilot keeps the plane
              steady moment to moment. The navigator plans the route, watches
              the weather ahead, and adjusts course to arrive on time. Neither
              alone is enough — together, they deliver certainty.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}manus-storage/agrorithm-ai-brain_9160e13b.webp`}
              alt="AI neural network visualization"
              className="w-full max-w-md rounded-lg opacity-80"
            />
          </div>
        </div>

        {/* Three steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              label: "Sense",
              title: "Continuous environment monitoring",
              desc: "Every parameter inside the pod is tracked continuously — temperature, humidity, CO₂, light levels, and more. The system maintains an unbroken record of growing conditions from day one to harvest. Anomalies are detected in real time.",
            },
            {
              label: "Reason",
              title: "Intelligent crop decision-making",
              desc: "Our AI layer interprets sensor data in the context of each crop's growth stage. Rather than reacting to single readings, it reasons across patterns — and explains every decision it makes in plain language you can audit.",
            },
            {
              label: "Act",
              title: "Precise climate control",
              desc: "Adjustments are made automatically, within human-verified safety limits. The environment is tuned in real time to keep crops on their optimal trajectory — no manual intervention needed. Every action is logged and reversible.",
            },
          ].map((step, i) => (
            <div
              key={step.label}
              className={`p-8 bg-[#F6F3EC]/5 border border-[#F6F3EC]/10 rounded-lg transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${400 + i * 100}ms` : "0ms" }}
            >
              <span className="font-data text-xs uppercase tracking-wider text-moss block mb-4">
                {step.label}
              </span>
              <h3 className="font-display text-xl mb-3">{step.title}</h3>
              <p className="font-body text-sm text-[#F6F3EC]/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
