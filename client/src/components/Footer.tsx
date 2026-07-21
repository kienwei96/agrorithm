export default function Footer() {
  return (
    <footer className="py-10 border-t border-forest/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a href="#" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}manus-storage/agrorithm-lockup-dark-mark-transparent_ee69d602.webp`}
              alt="Agrorithm"
              className="h-9 w-auto" style={{height: '60px', width: '180px'}}
            />
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="mailto:admin@agrorithm.ai"
              className="font-data text-[10px] uppercase tracking-[0.15em] text-forest/50 hover:text-moss transition-colors"
            >
              admin@agrorithm.ai
            </a>
            <a
              href="https://www.linkedin.com/company/agrorithm"
              target="_blank"
              rel="noopener noreferrer"
              className="font-data text-[10px] uppercase tracking-[0.15em] text-forest/50 hover:text-moss transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Legal */}
          <span className="font-data text-[10px] text-forest/30">
            © 2026 Agrorithm Sdn Bhd
          </span>
        </div>
      </div>
    </footer>
  );
}
