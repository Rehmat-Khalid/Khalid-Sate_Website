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
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { BUSINESS } from "@/lib/site-data";

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
      {
        name: "keywords",
        content:
          "Khalid Estate, property for rent Karachi, house for sale Karachi, Mehmoodabad estate agent, flats apartments shops plots Karachi",
      },
      { name: "robots", content: "index, follow" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: BUSINESS.name,
          description:
            "Karachi real estate agency for renting, buying and selling homes, apartments, shops and plots.",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Shop No. 6, Halal Book Wali Building, Main Mehmoodabad Gate",
            addressLocality: "Karachi",
            addressCountry: "PK",
          },
          telephone: [BUSINESS.father.phone, BUSINESS.brother.phone],
          areaServed: "Karachi",
          founder: { "@type": "Person", name: BUSINESS.father.name },
        }),
      },
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
          <Listings />
          <Projects />
          <Expertise />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppFab />
      </div>
    </CartProvider>
  );
}
