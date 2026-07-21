import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhyNow() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const problems = [
    {
      num: "01",
      label: "Space",
      title: "Land is too expensive",
      description:
        "Urban land costs have made conventional farming economically impossible within city limits. Most produce travels hundreds of kilometres before it reaches a plate.",
    },
    {
      num: "02",
      label: "Climate",
      title: "Weather doesn't cooperate",
      description:
        "Erratic rainfall, rising temperatures, and unpredictable seasons make outdoor yields increasingly unreliable. The window for consistent harvests is shrinking year by year.",
    },
    {
      num: "03",
      label: "Expertise",
      title: "Good growers are scarce",
      description:
        "Skilled cultivators spend years learning the subtle signals of a healthy crop. That knowledge doesn't scale. Most operations fail not from bad equipment but from missing expertise.",
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-data text-xs uppercase tracking-[0.2em] text-moss block mb-4">
            Why now
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest max-w-3xl">
            Three problems converging at once.
          </h2>
          <p className="font-body text-lg text-forest/60 mt-4 max-w-2xl">
            Urban farming has always had promise. These are the structural
            barriers that have kept it from being real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div
              key={p.num}
              className={`space-y-4 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3">
                <span className="font-data text-xs text-moss">{p.num}</span>
                <span className="font-data text-xs uppercase tracking-wider text-forest/40">
                  — {p.label}
                </span>
              </div>
              <h3 className="font-display text-xl text-forest">{p.title}</h3>
              <p className="font-body text-forest/60 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Size comparison */}
        <div
          className={`mt-20 flex items-end gap-4 justify-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center">
            <div className="w-48 h-32 md:w-64 md:h-40 bg-forest/5 border border-forest/10 rounded flex items-center justify-center" style={{height: '200px', width: '605px'}}>
              <div className="text-center">
                <span className="font-data text-[10px] uppercase tracking-wider text-forest/40 block">
                  Conventional Farm
                </span>
                <span className="font-data text-sm text-forest/60 block mt-1">
                  ~3,000 m²
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-moss/20 border border-moss/30 rounded flex items-center justify-center" style={{height: '64px', width: '110px'}}>
              <span className="font-data text-[8px] text-moss">30 m²</span>
            </div>
            <span className="font-data text-[10px] uppercase tracking-wider text-moss block mt-2">
              Agrorithm Pod
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
