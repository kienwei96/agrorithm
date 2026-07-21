export default function SocialProof() {
  const pilots = [
    { label: "F&B pilot", status: "Active" },
    { label: "Institutional deployment", status: "Commissioning" },
    { label: "Urban rooftop site", status: "Active" },
    { label: "Research partnership", status: "In discussion" },
  ];

  return (
    <section className="py-10 border-y border-forest/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-forest/40">
            Deployment pipeline
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {pilots.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 border border-forest/8 rounded-sm"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    p.status === "Active"
                      ? "bg-moss"
                      : p.status === "Commissioning"
                      ? "bg-amber-500"
                      : "bg-forest/20"
                  }`}
                />
                <span className="font-data text-[10px] uppercase tracking-wider text-forest/60">
                  {p.label}
                </span>
                <span className="font-data text-[9px] uppercase tracking-wider text-forest/30">
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
