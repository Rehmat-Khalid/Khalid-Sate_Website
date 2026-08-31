import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site-data";
import { useCart } from "./cart";

export function Contact() {
  const [sent, setSent] = useState(false);
  const { items } = useCart();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const shortlist = items.map((i) => i.title).join(", ");
    const text = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Requirement: ${data.get("need")}`,
      `Message: ${data.get("message")}`,
      shortlist ? `Shortlisted: ${shortlist}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/92${BUSINESS.brother.phone.slice(1)}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-silver sm:text-5xl">
            Let's find your next address.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Call, WhatsApp or visit the office. We answer every serious enquiry personally.
          </p>

          <div className="mt-8 space-y-3">
            {[BUSINESS.father, BUSINESS.brother].map((p) => (
              <div
                key={p.phone}
                className="surface-card flex flex-wrap items-center justify-between gap-3 rounded-2xl p-5"
              >
                <div>
                  <p className="text-sm font-bold text-foreground">{p.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.role}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${p.phone}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-3 py-2 text-xs font-semibold hover:bg-muted"
                  >
                    <Phone className="h-3.5 w-3.5" /> {p.phone}
                  </a>
                  <a
                    href={`https://wa.me/92${p.phone.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${p.name}`}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-secondary hover:bg-muted"
                  >
                    <MessageCircle className="h-4 w-4 text-accent" />
                  </a>
                </div>
              </div>
            ))}

            <div className="surface-card flex items-start gap-3 rounded-2xl p-5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-sm text-muted-foreground">{BUSINESS.address}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="surface-card rounded-3xl p-6 sm:p-8"
        >
          <h3 className="text-lg font-bold text-foreground">Send an enquiry</h3>
          <div className="mt-6 space-y-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <input
              name="phone"
              required
              placeholder="Your phone number"
              className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <select
              name="need"
              className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              <option>I want to rent a property</option>
              <option>I want to buy a property</option>
              <option>I want to sell my property</option>
              <option>I want to rent out my property</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Area, budget and any details…"
              className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            {items.length > 0 && (
              <p className="text-xs text-muted-foreground">
                {items.length} shortlisted propert{items.length === 1 ? "y" : "ies"} will be
                attached to your message.
              </p>
            )}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-silver)] px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
            >
              {sent ? <Check className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
              {sent ? "Enquiry Sent" : "Send on WhatsApp"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
