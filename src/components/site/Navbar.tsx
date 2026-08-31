import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "./cart";
import { BUSINESS } from "@/lib/site-data";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Properties", href: "#properties" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { items, setOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav
        className={`glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "shadow-[var(--shadow-glow)]" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-secondary text-sm font-bold text-silver">
            KE
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-silver">
              {BUSINESS.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Karachi
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open shortlist"
            className="relative grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary text-foreground transition-colors hover:bg-muted"
          >
            <ShoppingBag className="h-4 w-4" />
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {items.length}
              </span>
            )}
          </button>
          <a
            href={`tel:${BUSINESS.father.phone}`}
            className="hidden items-center gap-2 rounded-xl border border-border bg-[image:var(--gradient-silver)] px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            onClick={() => setMenu((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary lg:hidden"
          >
            {menu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {menu && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-nav mx-auto mt-2 max-w-6xl rounded-2xl p-2 lg:hidden"
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
