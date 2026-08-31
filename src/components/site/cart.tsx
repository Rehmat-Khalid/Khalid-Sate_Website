import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Listing } from "@/lib/site-data";

type CartCtx = {
  items: Listing[];
  add: (l: Listing) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Listing[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartCtx>(
    () => ({
      items,
      open,
      setOpen,
      add: (l) => {
        setItems((prev) => (prev.some((p) => p.id === l.id) ? prev : [...prev, l]));
        setOpen(true);
      },
      remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      clear: () => setItems([]),
    }),
    [items, open],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
