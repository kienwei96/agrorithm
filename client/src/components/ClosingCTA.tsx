import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ClosingCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-24 md:py-32 bg-forest text-[#F6F3EC]" ref={ref}>
      <div
        className={`container text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="font-data text-[10px] uppercase tracking-[0.2em] text-moss block mb-6">
          Our mission
        </span>
        <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl italic max-w-3xl mx-auto leading-tight">
          Make urban farming accessible to everyone, anywhere.
        </blockquote>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-moss text-[#F6F3EC] font-body font-semibold rounded-sm hover:bg-moss/80 transition-colors active:scale-[0.97]"
          >
            Deploy a pod
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-[#F6F3EC]/20 text-[#F6F3EC] font-body font-semibold rounded-sm hover:border-moss hover:text-moss transition-colors active:scale-[0.97]"
          >
            Partner with us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-[#F6F3EC]/20 text-[#F6F3EC] font-body font-semibold rounded-sm hover:border-moss hover:text-moss transition-colors active:scale-[0.97]"
          >
            Invest in Agrorithm
          </a>
        </div>
      </div>
    </section>
  );
}
