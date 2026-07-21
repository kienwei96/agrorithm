import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhereWeOperate() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="space-y-6">
            <span className="font-data text-[10px] uppercase tracking-[0.2em] text-moss block">
              Where we operate
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest">
              Rooted in Malaysia. Growing outward.
            </h2>
            <p className="font-body text-lg text-forest/70 leading-relaxed">
              Currently deploying in Klang Valley. Evaluating Penang and Johor
              next.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-moss" />
                <span className="font-body text-forest">
                  Klang Valley — Active deployment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-forest/20" />
                <span className="font-body text-forest/60">
                  Penang — Under evaluation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-forest/20" />
                <span className="font-body text-forest/60">
                  Johor — Under evaluation
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}manus-storage/agrorithm-malaysia-map_209749af.webp`}
              alt="Map of Malaysia showing Agrorithm deployment locations"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
