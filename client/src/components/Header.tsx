import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why now", href: "#problem" },
    { label: "AgriPod", href: "#pod" },
    { label: "Agentic AI", href: "#ai" },
    { label: "What you get", href: "#flywheel" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F6F3EC]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo — official lockup */}
        <a href="#" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}manus-storage/agrorithm-lockup-dark-mark-transparent_ee69d602.webp`}
            alt="Agrorithm"
            className={`h-10 md:h-12 w-auto transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`} style={{height: '60px', width: '180px'}}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-data text-[11px] uppercase tracking-[0.15em] transition-colors ${
                scrolled
                  ? "text-forest/70 hover:text-moss"
                  : "text-[#F6F3EC]/80 hover:text-moss"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center px-5 py-2.5 font-body text-sm font-semibold rounded-sm transition-colors active:scale-[0.97] ${
            scrolled
              ? "bg-forest text-[#F6F3EC] hover:bg-moss"
              : "bg-[#F6F3EC] text-forest hover:bg-moss hover:text-[#F6F3EC]"
          }`}
        >
          Get in touch
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 transition-transform duration-200 ${scrolled ? 'bg-forest' : 'bg-[#F6F3EC]'} ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 transition-opacity duration-200 ${scrolled ? 'bg-forest' : 'bg-[#F6F3EC]'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 transition-transform duration-200 ${scrolled ? 'bg-forest' : 'bg-[#F6F3EC]'} ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F6F3EC] border-t border-[#16241C]/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-data text-[11px] uppercase tracking-[0.15em] text-forest/70 hover:text-moss"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 text-center px-5 py-2.5 bg-forest text-[#F6F3EC] font-body text-sm font-semibold rounded-sm"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
