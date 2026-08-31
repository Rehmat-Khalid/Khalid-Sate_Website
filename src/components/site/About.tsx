import { motion } from "motion/react";
import { BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
import father from "@/assets/father.png.asset.json";
import noman from "@/assets/noman.png.asset.json";
import { BUSINESS } from "@/lib/site-data";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="hairline mb-16 h-px w-full" />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...fade} className="grid grid-cols-2 gap-4">
          <figure className="surface-card overflow-hidden rounded-3xl">
            <img
              src={father.url}
              alt={BUSINESS.father.name}
              loading="lazy"
              className="h-72 w-full object-cover object-top sm:h-96"
            />
            <figcaption className="p-4">
              <p className="text-sm font-bold text-silver">{BUSINESS.father.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{BUSINESS.father.role}</p>
              <p className="mt-2 text-xs font-semibold text-accent">
                {BUSINESS.father.experience}
              </p>
            </figcaption>
          </figure>
          <figure className="surface-card mt-10 overflow-hidden rounded-3xl">
            <img
              src={noman.url}
              alt={BUSINESS.brother.name}
              loading="lazy"
              className="h-72 w-full object-cover object-top sm:h-96"
            />
            <figcaption className="p-4">
              <p className="text-sm font-bold text-silver">{BUSINESS.brother.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{BUSINESS.brother.role}</p>
              <p className="mt-2 text-xs font-semibold text-accent">
                {BUSINESS.brother.experience}
              </p>
            </figcaption>
          </figure>
        </motion.div>

        <motion.div {...fade} className="lg:pl-8">
          <p className="text-right text-xs uppercase tracking-[0.4em] text-muted-foreground">
            About Us
          </p>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] text-silver sm:text-6xl">
            Building Karachi,
            <br />
            cinematically.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Khalid Estate was built on one simple promise: an honest deal, every single
            time. For over 35 years, {BUSINESS.father.name.split(" ").slice(0, 3).join(" ")}{" "}
            has helped Karachi families find the right home to rent, the right property to
            buy, and the right buyer to sell to — with verified documentation and clear,
            fair commission.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Today his son, {BUSINESS.brother.name.split(" ").slice(0, 3).join(" ")}, brings
            a decade of his own experience to the desk, pairing the same street-level
            knowledge of Mehmoodabad, Clifton, DHA and Gulshan with modern, transparent
            service.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "Verified Papers" },
              { icon: Handshake, t: "Fair Commission" },
              { icon: BadgeCheck, t: "45+ Years Combined" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="surface-card rounded-2xl p-4">
                <Icon className="h-5 w-5 text-accent" />
                <p className="mt-3 text-xs font-semibold text-foreground">{t}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
