import { motion } from "motion/react";
import { Building2, Home, KeyRound, LandPlot, Store, Users } from "lucide-react";

const CELLS = [
  {
    title: "Rental Management",
    body: "Houses, portions and flats rented out to screened tenants with proper agreements.",
    icon: KeyRound,
    className: "sm:col-span-2",
  },
  {
    title: "Buying & Selling",
    body: "End-to-end sale support: valuation, negotiation, transfer and possession.",
    icon: Home,
  },
  {
    title: "Apartments & Flats",
    body: "Sea-facing, family and budget apartments across Karachi's key blocks.",
    icon: Building2,
  },
  {
    title: "Commercial Shops",
    body: "Main-road shops and offices with strong footfall and clean documentation.",
    icon: Store,
  },
  {
    title: "Plots & Files",
    body: "Residential and commercial plots in developing schemes, verified before sale.",
    icon: LandPlot,
  },
  {
    title: "Tenant & Owner Care",
    body: "Rent collection follow-up, renewals and dispute-free handovers.",
    icon: Users,
    className: "sm:col-span-2",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            What We Do
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-silver sm:text-5xl">
            Our Services
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          One desk for every property need in Karachi — from a single rented room to a
          full commercial transfer.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-4 sm:grid-cols-3">
        {CELLS.map(({ title, body, icon: Icon, className }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className={`surface-card group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] ${className ?? ""}`}
          >
            <Icon className="h-6 w-6 text-accent" />
            <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
            <div className="hairline mt-6 h-px w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.article>
        ))}

      </div>
    </section>
  );
}
