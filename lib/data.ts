export type Project = {
  slug: string;
  name: string;
  client: string;
  year: string;
  category: string;
  description: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "meridian",
    name: "Meridian",
    client: "Meridian Private Bank",
    year: "2025",
    category: "Brand Identity, Digital",
    description:
      "A full identity system for a private bank built around restraint — a single custodial mark, a bespoke numeral set, and a tone of voice with nothing to prove.",
    gradient: "linear-gradient(135deg, #2A2118 0%, #B8834F 45%, #1C1916 100%)",
  },
  {
    slug: "haelan",
    name: "Haelan",
    client: "Haelan Skincare",
    year: "2025",
    category: "Packaging, Art Direction",
    description:
      "Packaging and campaign direction for a dermatology-led skincare line, translating clinical precision into a shelf presence that feels considered, not cold.",
    gradient: "linear-gradient(135deg, #1C1916 0%, #8B4A3D 55%, #D9AE7D 100%)",
  },
  {
    slug: "oskar",
    name: "Òskar",
    client: "Òskar Furniture",
    year: "2024",
    category: "Web Experience, Motion",
    description:
      "A configurable product experience for a Scandinavian furniture maker, letting materials and joinery details carry the story instead of stock photography.",
    gradient: "linear-gradient(135deg, #151310 0%, #6E665A 40%, #B8834F 100%)",
  },
  {
    slug: "novara",
    name: "Novara",
    client: "Novara Airlines",
    year: "2024",
    category: "Brand Identity, Environmental",
    description:
      "Livery, cabin signage, and terminal wayfinding for a regional carrier repositioning around a single idea: unhurried travel.",
    gradient: "linear-gradient(135deg, #0E0D0C 0%, #2A2118 50%, #D9AE7D 100%)",
  },
  {
    slug: "arden",
    name: "Arden & Vine",
    client: "Arden & Vine Estates",
    year: "2023",
    category: "Digital, Photography Direction",
    description:
      "Editorial-led digital presence for a wine estate, structured like a vintage catalogue so each release reads as an entry, not a product listing.",
    gradient: "linear-gradient(135deg, #1C1916 0%, #8B4A3D 30%, #2A2118 100%)",
  },
];

export type Service = {
  name: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    name: "Brand Identity",
    description:
      "Naming, mark, type system, and the written and unwritten rules that keep a brand recognisable at any size, on any surface.",
    capabilities: ["Naming & positioning", "Identity systems", "Typography & colour", "Brand guidelines"],
  },
  {
    name: "Digital & Web",
    description:
      "Websites and product interfaces designed as considered spaces — fast, legible, and built to hold up under real editorial content.",
    capabilities: ["Art-directed websites", "Design systems", "Front-end build", "E-commerce"],
  },
  {
    name: "Motion & Film",
    description:
      "Title sequences, product films, and interface motion that behave like part of the identity, not an effect layered on afterward.",
    capabilities: ["Brand films", "Motion identity", "Interface animation", "Sound direction"],
  },
  {
    name: "Print & Packaging",
    description:
      "Structural and surface design for objects meant to be held — packaging, publications, and collateral built on material honesty.",
    capabilities: ["Packaging structure", "Editorial design", "Print production", "Signage & environments"],
  },
];

export const stats = [
  { value: "17", label: "Years in practice" },
  { value: "84", label: "Brands built" },
  { value: "12", label: "Industry honours" },
  { value: "6", label: "Studio disciplines" },
];
