import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white/40">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-data text-[10px] uppercase tracking-[0.2em] text-moss block mb-4">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest">
              Let's talk about what you're building.
            </h2>
            <p className="font-body text-forest/60 mt-4">
              Whether you're an operator, investor, or potential partner — tell
              us what you need and we'll respond within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-moss/5 border border-moss/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-moss/10 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#3E6E4C" strokeWidth="2">
                  <polyline points="4 10 8 14 16 6" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-forest mb-2">
                Message received.
              </h3>
              <p className="font-body text-forest/60">
                We'll get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-data text-[10px] uppercase tracking-[0.15em] text-forest/60 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-forest/10 rounded-sm font-body text-forest placeholder:text-forest/30 focus:outline-none focus:border-moss transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="font-data text-[10px] uppercase tracking-[0.15em] text-forest/60 block mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    value={formData.organisation}
                    onChange={(e) =>
                      setFormData({ ...formData, organisation: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-forest/10 rounded-sm font-body text-forest placeholder:text-forest/30 focus:outline-none focus:border-moss transition-colors"
                    placeholder="Company or institution"
                  />
                </div>
              </div>

              <div>
                <label className="font-data text-[10px] uppercase tracking-[0.15em] text-forest/60 block mb-2">
                  What describes you best?
                </label>
                <select
                  required
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#F6F3EC] border border-forest/10 rounded-sm font-body text-forest focus:outline-none focus:border-moss transition-colors appearance-none"
                >
                  <option value="">Select one...</option>
                  <option value="fnb">F&B operator</option>
                  <option value="entrepreneur">Urban farming entrepreneur</option>
                  <option value="investor">Investor</option>
                  <option value="government">Government / Institution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-data text-[10px] uppercase tracking-[0.15em] text-forest/60 block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#F6F3EC] border border-forest/10 rounded-sm font-body text-forest placeholder:text-forest/30 focus:outline-none focus:border-moss transition-colors resize-none"
                  placeholder="What are you looking to achieve?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-forest text-[#F6F3EC] font-body font-semibold rounded-sm hover:bg-moss transition-colors active:scale-[0.98]"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
