import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg.asset.json";
import { BUSINESS } from "@/lib/site-data";

function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.round((w * h) / 16000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(226,232,240,0.55)";
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]!;
          const b = pts[j]!;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(203,213,225,${(1 - d / 130) * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduce) draw();
    else raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg.url}
        alt="Karachi skyline at night"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent,var(--background)_78%)]" />
      <Particles />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-32 pb-20 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
        >
          {BUSINESS.father.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-6xl font-extrabold leading-[0.95] text-silver sm:text-8xl lg:text-[9rem]"
        >
          Khalid Estate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Karachi's trusted property house since 1990 — homes, apartments, shops and plots
          for rent and sale, handled personally from first visit to final possession.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#properties"
            className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-silver)] px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            View Properties
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Book a Visit
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            ["35+", "Years Experience"],
            ["2,500+", "Deals Closed"],
            ["100%", "Verified Papers"],
            ["24/7", "Client Support"],
          ].map(([v, k]) => (
            <div key={k} className="surface-card rounded-2xl px-4 py-3">
              <p className="text-2xl font-bold text-silver">{v}</p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {k}
              </p>
            </div>
          ))}
        </motion.div>

        <p className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          {BUSINESS.address}
        </p>
      </div>
    </section>
  );
}
