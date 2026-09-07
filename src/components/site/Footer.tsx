import { BUSINESS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-extrabold text-silver">{BUSINESS.name}</p>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
            {BUSINESS.address}
          </p>
        </div>
        <div className="text-xs text-muted-foreground sm:text-right">
          <p>
            {BUSINESS.father.phone} &nbsp;•&nbsp; {BUSINESS.brother.phone}
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
      <p className="mt-8 text-center text-[11px] tracking-wide text-muted-foreground/70">
        Created website by The RK Expert
      </p>
    </footer>
  );
}
