import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhatYouGet() {
  const { ref, isVisible } = useScrollReveal(0.15);

  const stats = [
    {
      value: "100×",
      title: "Land efficiency",
      description:
        "A single pod delivers the productive output of a conventional farm footprint a hundred times its size — fitting inside a shophouse, warehouse, or rooftop.",
    },
    {
      value: "6×",
      title: "Faster cultivation cycles",
      description:
        "Precise environmental control eliminates the seasonal gaps and weather disruptions that slow conventional growing. More cycles per year, with predictable timing.",
    },
    {
      value: "☀",
      title: "Powered by solar",
      description:
        "Our proprietary AHU technology dramatically reduces energy consumption, making solar-powered operation viable and cost-effective at pod scale.",
    },
  ];

  return (
    <section id="flywheel" className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-data text-xs uppercase tracking-[0.2em] text-moss block mb-4">
            What you get
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest max-w-3xl">
            Built to outperform, by design.
          </h2>
          <p className="font-body text-lg text-forest/60 mt-4 max-w-2xl">
            Every specification of the Agrorithm pod is optimised around one
            outcome: consistent, high-quality yields with the smallest possible
            footprint and energy cost.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`space-y-4 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <span className="font-display text-5xl md:text-6xl text-moss block">
                {stat.value}
              </span>
              <h3 className="font-display text-xl text-forest">{stat.title}</h3>
              <p className="font-body text-forest/60 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
