import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AsAService() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const steps = [
    {
      num: "01",
      title: "Deploy",
      subtitle: "We set it up.",
      description:
        "Our team designs, fabricates, and installs the pod at your site. Electrical, plumbing, and climate commissioning — handled end to end.",
    },
    {
      num: "02",
      title: "Grow",
      subtitle: "The AI tends the crop.",
      description:
        "From inoculation to harvest, Agrorithm OS monitors every environmental parameter and adapts in real time. No cultivation expertise required on your end.",
    },
    {
      num: "03",
      title: "Support",
      subtitle: "Remote oversight, always on.",
      description:
        "Our agronomy team monitors fleet health remotely. Anomalies are flagged before they become failures. You get a live dashboard; we handle the alerts.",
    },
    {
      num: "04",
      title: "Harvest",
      subtitle: "You take the yield.",
      description:
        "Consistent cycles mean predictable harvests. Whether you're supplying a restaurant, a grocer, or your own brand — we help you plan supply with confidence.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white/40" ref={ref}>
      <div className="container">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-data text-xs uppercase tracking-[0.2em] text-moss block mb-4">
            As a service
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest max-w-3xl">
            You focus on the business. We run the farm.
          </h2>
          <p className="font-body text-lg text-forest/60 mt-4 max-w-2xl">
            Agrorithm operates as a full-stack urban farming partner — from
            hardware to harvest logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`space-y-3 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <span className="font-data text-xs text-moss">{step.num}</span>
              <h3 className="font-display text-xl text-forest">{step.title}</h3>
              <p className="font-body text-sm font-semibold text-forest/80">
                {step.subtitle}
              </p>
              <p className="font-body text-sm text-forest/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
