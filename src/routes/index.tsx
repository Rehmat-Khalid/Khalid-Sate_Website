import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Listings } from "@/components/site/Listings";
import { Expertise } from "@/components/site/Expertise";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { CartProvider } from "@/components/site/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khalid Estate — Property for Rent & Sale in Karachi" },
      {
        name: "description",
        content:
          "Khalid Estate, Karachi: 35+ years of trusted service for renting, buying and selling homes, apartments, shops and plots. Call 0305-2028013.",
      },
      { property: "og:title", content: "Khalid Estate — Karachi Property Experts" },
      {
        property: "og:description",
        content:
          "Homes, apartments, shops and plots for rent and sale across Karachi. Verified papers, fair commission, 45+ years combined experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Listings />
          <Expertise />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
