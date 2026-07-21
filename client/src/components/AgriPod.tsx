import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AgriPod() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const specs = [
    { label: "Footprint", value: "30 m²" },
    { label: "Internal temp range", value: "16–24°C" },
    { label: "Humidity control", value: "±1% RH" },
    { label: "CO₂ regulation", value: "400–1200 ppm" },
    { label: "Energy source", value: "Solar-ready" },
  ];

  return (
    <section id="pod" className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-moss block mb-4">
            AgriPod
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest max-w-3xl">
            One compact pod. The climate advantage of a farm.
          </h2>
          <p className="font-body text-lg text-forest/60 mt-4 max-w-2xl">
            At 30 m², our growing pod fits in a shophouse, a warehouse corner,
            or an urban rooftop — and delivers the consistent microclimate that
            high-value crops demand.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-8 items-start transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Pod Image */}
          <div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}manus-storage/agripod-agrorithm-gen_37c0678d.webp`}
                alt="Agrorithm AgriPod — AI-controlled urban mushroom growing container on tropical rooftop"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Specs */}
          <div className="space-y-6 lg:pt-4">
            <h3 className="font-display text-2xl text-forest">
              Precision-controlled environment
            </h3>
            <p className="font-body text-forest/60 leading-relaxed">
              Every pod is a sealed, climate-controlled growing chamber. Sensors
              track temperature, humidity, CO₂, and light continuously. The AI
              maintains conditions within tight tolerances — regardless of
              external weather.
            </p>
            <div className="space-y-3 pt-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between py-2.5 border-b border-forest/5"
                >
                  <span className="font-data text-[10px] uppercase tracking-[0.15em] text-forest/50">
                    {spec.label}
                  </span>
                  <span className="font-data text-sm text-forest">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
