import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/site-data";

const GREETING =
  "Assalam o Alaikum, mujhe Khalid Estate se property ke baare mein maloomat chahiye.";

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const people = [BUSINESS.father, BUSINESS.brother];

  return (
    <div className="fixed bottom-5 right-5 z-[55] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          people.map((p, i) => (
            <motion.a
              key={p.phone}
              href={waLink(p.phone, GREETING)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="surface-card flex items-center gap-3 rounded-2xl px-4 py-3 transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              <span className="text-left">
                <span className="block text-xs font-bold text-foreground">
                  {p.name.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="block text-[11px] text-muted-foreground">{p.phone}</span>
              </span>
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        className="pulse-ring grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-accent-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
