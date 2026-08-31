import villa from "@/assets/villa.jpg.asset.json";
import apartment from "@/assets/apartment.jpg.asset.json";
import interior from "@/assets/interior.jpg.asset.json";
import commercial from "@/assets/commercial.jpg.asset.json";
import bungalow from "@/assets/bungalow.jpg.asset.json";
import plot from "@/assets/plot.jpg.asset.json";

export const BUSINESS = {
  name: "Khalid Estate",
  tagline: "Building the web of trust, cinematically.",
  address:
    "Shop No. 6, Halal Book Wali Building, Main Mehmoodabad Gate, Karachi, Pakistan",
  father: {
    name: "Muhammad Khalid Farooqi Qureshi",
    role: "Founder & Chief Property Consultant",
    phone: "03052028013",
    experience: "35+ Years",
  },
  brother: {
    name: "Muhammad Noman Farooqi Qureshi",
    role: "Director — Sales, Rentals & Client Relations",
    phone: "03353213384",
    experience: "10+ Years",
  },
};

export type Listing = {
  id: string;
  title: string;
  area: string;
  price: string;
  type: "For Rent" | "For Sale";
  beds: number;
  baths: number;
  size: string;
  image: string;
  span?: string;
};

export const LISTINGS: Listing[] = [
  {
    id: "l1",
    title: "Modern Luxury Villa",
    area: "DHA Phase 6, Karachi",
    price: "PKR 6.5 Crore",
    type: "For Sale",
    beds: 5,
    baths: 6,
    size: "500 Sq. Yd.",
    image: villa.url,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "l2",
    title: "Sea-Facing Apartment",
    area: "Clifton Block 2, Karachi",
    price: "PKR 1.85 Lac / month",
    type: "For Rent",
    beds: 3,
    baths: 3,
    size: "2,400 Sq. Ft.",
    image: apartment.url,
  },
  {
    id: "l3",
    title: "Furnished Family Portion",
    area: "Mehmoodabad, Karachi",
    price: "PKR 55,000 / month",
    type: "For Rent",
    beds: 2,
    baths: 2,
    size: "1,050 Sq. Ft.",
    image: interior.url,
  },
  {
    id: "l4",
    title: "Main Road Commercial Shop",
    area: "Mehmoodabad Gate, Karachi",
    price: "PKR 1.2 Crore",
    type: "For Sale",
    beds: 0,
    baths: 1,
    size: "320 Sq. Ft.",
    image: commercial.url,
    span: "lg:col-span-2",
  },
  {
    id: "l5",
    title: "Independent Bungalow",
    area: "Gulshan-e-Iqbal, Karachi",
    price: "PKR 3.4 Crore",
    type: "For Sale",
    beds: 4,
    baths: 4,
    size: "240 Sq. Yd.",
    image: bungalow.url,
  },
  {
    id: "l6",
    title: "Residential Plot",
    area: "Scheme 33, Karachi",
    price: "PKR 95 Lac",
    type: "For Sale",
    beds: 0,
    baths: 0,
    size: "120 Sq. Yd.",
    image: plot.url,
  },
];
