import { useScrollReveal } from "@/hooks/useScrollReveal";

function IconMushroom() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-moss">
      <path d="M16 20v8M12 28h8" strokeLinecap="round" />
      <path d="M6 18c0-5.523 4.477-10 10-10s10 4.477 10 10H6z" />
      <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="16" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconSeedling() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-moss">
      <path d="M16 28V16" strokeLinecap="round" />
      <path d="M16 16c0-4 3-7 7-7-1 4-3 7-7 7z" />
      <path d="M16 20c0-3-2.5-5.5-5.5-5.5C11.5 17 13 20 16 20z" />
      <path d="M12 28h8" strokeLinecap="round" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-moss">
      <rect x="8" y="6" width="16" height="22" rx="1" />
      <path d="M12 10h2M18 10h2M12 14h2M18 14h2M12 18h2M18 18h2" strokeLinecap="round" />
      <path d="M14 28v-5h4v5" />
    </svg>
  );
}

export default function CustomerSegments() {
  const { ref, isVisible } = useScrollReveal(0.15);

  const segments = [
    {
      icon: <IconMushroom />,
      title: "Premium F&B Operators",
      description:
        "Seeking consistent specialty mushroom supply — lion's mane, oyster, shiitake — without the volatility of traditional sourcing.",
      cta: "Deploy a pod",
    },
    {
      icon: <IconSeedling />,
      title: "Urban Farming Entrepreneurs",
      description:
        "Want to farm without expertise. Our AI handles the growing science — you focus on the business and the market.",
      cta: "Partner with us",
    },
    {
      icon: <IconBuilding />,
      title: "Government & Institutions",
      description:
        "Food security programmes that need reliable, local production infrastructure — scalable, auditable, and climate-resilient.",
      cta: "Explore deployment",
    },
  ];

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-data text-xs uppercase tracking-[0.2em] text-moss block mb-4">
            Who we work with
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest max-w-2xl">
            Three types of partners. One shared outcome: reliable harvests.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {segments.map((seg, i) => (
            <div
              key={i}
              className={`group p-8 bg-white/60 border border-forest/5 rounded-lg hover:border-moss/20 hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="mb-5">{seg.icon}</div>
              <h3 className="font-display text-xl text-forest mb-3">
                {seg.title}
              </h3>
              <p className="font-body text-forest/60 leading-relaxed mb-6">
                {seg.description}
              </p>
              <a
                href="#contact"
                className="font-data text-[11px] uppercase tracking-wider text-moss group-hover:underline"
              >
                {seg.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
