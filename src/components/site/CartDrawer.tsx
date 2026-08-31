import { AnimatePresence, motion } from "motion/react";
import { Trash2, X } from "lucide-react";
import { useCart } from "./cart";
import { BUSINESS } from "@/lib/site-data";

export function CartDrawer() {
  const { items, open, setOpen, remove, clear } = useCart();

  const whatsapp = () => {
    const text =
      "Assalam o Alaikum, I am interested in these properties:\n" +
      items.map((i, n) => `${n + 1}. ${i.title} — ${i.area} (${i.price})`).join("\n");
    window.open(
      `https://wa.me/92${BUSINESS.brother.phone.slice(1)}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
            className="glass-nav fixed right-0 top-0 z-[61] flex h-full w-full max-w-sm flex-col p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-silver">
                Your Shortlist
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close shortlist"
                className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex-1 space-y-3 overflow-y-auto">
              {items.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No properties added yet. Browse the listings and tap “Add to Cart”.
                </p>
              )}
              {items.map((i) => (
                <div
                  key={i.id}
                  className="surface-card flex gap-3 overflow-hidden rounded-2xl p-2.5"
                >
                  <img
                    src={i.image}
                    alt={i.title}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-foreground">{i.title}</p>
                    <p className="mt-1 truncate text-[11px] text-muted-foreground">
                      {i.area}
                    </p>
                    <p className="mt-1 text-[11px] font-bold text-gold">{i.price}</p>
                  </div>
                  <button
                    onClick={() => remove(i.id)}
                    aria-label={`Remove ${i.title}`}
                    className="self-start rounded-lg p-2 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="mt-4 space-y-2">
                <button
                  onClick={whatsapp}
                  className="w-full rounded-xl bg-[image:var(--gradient-silver)] px-5 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)]"
                >
                  Enquire on WhatsApp
                </button>
                <button
                  onClick={clear}
                  className="w-full rounded-xl border border-border bg-secondary px-5 py-3 text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  Clear all
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
