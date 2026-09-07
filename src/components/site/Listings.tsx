import { useState } from "react";
import { motion } from "motion/react";
import { Bath, BedDouble, MapPin, Maximize, MessageCircle, Plus } from "lucide-react";
import { BUSINESS, LISTINGS, waLink } from "@/lib/site-data";
import { useCart } from "./cart";

const FILTERS = ["All", "For Rent", "For Sale"] as const;

export function Listings() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const { add, items } = useCart();
  const shown = LISTINGS.filter((l) => filter === "All" || l.type === filter);

  return (
    <section id="properties" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Featured Products
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-silver sm:text-5xl">
            Available Properties
          </h2>
        </div>
        <div className="flex gap-2 rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                filter === f
                  ? "bg-[image:var(--gradient-silver)] text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid auto-rows-[minmax(230px,auto)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((l, i) => {
          const inCart = items.some((x) => x.id === l.id);
          return (
            <motion.article
              key={l.id}
              layout
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`surface-card hover-lift sheen group relative flex flex-col overflow-hidden rounded-3xl ${l.span ?? ""}`}
            >
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={l.image}
                  alt={`${l.title} in ${l.area}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full min-h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-silver backdrop-blur">
                  {l.type}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-foreground">{l.title}</h3>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {l.area}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-muted-foreground">
                  {l.beds > 0 && (
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="h-3.5 w-3.5" /> {l.beds} Beds
                    </span>
                  )}
                  {l.baths > 0 && (
                    <span className="inline-flex items-center gap-1.5">
                      <Bath className="h-3.5 w-3.5" /> {l.baths} Baths
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="h-3.5 w-3.5" /> {l.size}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-extrabold text-gold">{l.price}</p>
                  <div className="flex gap-2">
                    <a
                      href={waLink(
                        BUSINESS.brother.phone,
                        `Assalam o Alaikum, mujhe is property mein interest hai:\n${l.title} — ${l.area} (${l.price})`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp about ${l.title}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary px-3 py-2 text-[11px] font-semibold text-accent transition-transform hover:scale-[1.04] hover:bg-muted"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                    <button
                      onClick={() => add(l)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary px-3 py-2 text-[11px] font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      {inCart ? "Shortlisted" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
