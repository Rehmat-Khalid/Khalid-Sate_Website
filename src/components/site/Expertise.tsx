import { motion } from "motion/react";
import { GraduationCap, Scale, ScrollText, Timer } from "lucide-react";

const ITEMS = [
  {
    year: "1990",
    title: "The First Desk",
    body: "Muhammad Khalid Farooqi Qureshi begins property consultancy in Mehmoodabad, Karachi.",
    icon: Timer,
    className: "sm:col-span-2",
  },
  {
    year: "Since 2005",
    title: "Property Law & Transfer",
    body: "Deep working knowledge of transfer, sub-registrar procedure, mutation and lease documentation.",
    icon: Scale,
  },
  {
    year: "2015",
    title: "Second Generation",
    body: "Muhammad Noman Farooqi Qureshi joins and takes charge of sales, rentals and client relations.",
    icon: GraduationCap,
  },
  {
    year: "Today",
    title: "Verified Documentation",
    body: "Every listing checked for clear title, NOC and society dues before it reaches a client.",
    icon: ScrollText,
    className: "sm:col-span-2",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="hairline mb-16 h-px w-full" />
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
        Experience & Knowledge
      </p>
      <h2 className="mt-4 max-w-2xl text-4xl font-extrabold text-silver sm:text-5xl">
        Three decades of Karachi property education
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {ITEMS.map(({ year, title, body, icon: Icon, className }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className={`surface-card rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] ${className ?? ""}`}
          >
            <div className="flex items-center justify-between">
              <Icon className="h-6 w-6 text-accent" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                {year}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
