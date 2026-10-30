export const site = {
  name: "BaguetteSub",
  tagline: "International plates. East Legon energy.",
  heroHeadline: "A good place to come hungry.",
  heroSupport:
    "Fresh baguettes, generous grill plates and a space worth settling into.",
  locationLine: "La-Bawaleshi Road, East Legon",
  footerTagline: "Good taste. Great company.",
  description:
    "BaguetteSub Restaurant — modern international fast food on La-Bawaleshi Rd, East Legon, Accra. Dine-in, takeout & delivery.",
  phoneDisplay: "053 052 8105",
  phoneTel: "+233530528105",
  whatsapp: "233530528105",
  address: "La-Bawaleshi Road, East Legon, Accra",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=BaguetteSub+Restaurant+La-Bawaleshi+Rd+East+Legon+Accra",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=BaguetteSub+Restaurant+La-Bawaleshi+Rd+East+Legon+Accra&z=16&output=embed",
  instagram: "https://www.instagram.com/baguettesub.gh/",
  instagramHandle: "@baguettesub.gh",
  hoursLabel: "Mon–Sun · 10:00am – 11:00pm",
  hours: [
    { days: "Mon – Sun", time: "10:00 AM – 11:00 PM" },
  ],
} as const;

export const vibeCopy = {
  eyebrow: "Our story",
  headline: "More than just a restaurant.",
  body: "A bright, glass-fronted spot on La-Bawaleshi Road — grill plates, fresh baguettes, and a living-wall neon that says it all. Dine in, grab takeout, or get delivery. Vegan-friendly options on the menu.",
} as const;

export const spaceCopy = {
  eyebrow: "The space",
  headline: "An atmosphere of its own.",
  body: "Contemporary design. Inviting surroundings. A place to enjoy good food and even better company.",
} as const;

export const visitCopy = {
  eyebrow: "Visit us",
  headline: "Your next meal is just around the corner.",
  body: "Dine in, take away or get it delivered. We’re always here.",
} as const;

export type MenuCategory = {
  name: string;
  description: string;
  priceFrom: string;
  image: string;
  href: string;
};

export const menuCategories: MenuCategory[] = [
  {
    name: "Sandwiches",
    description: "Subs and baguettes, loaded.",
    priceFrom: "From GHS 160",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
    href: "/menu#sandwiches",
  },
  {
    name: "Burgers",
    description: "Classic, crispy and stacked.",
    priceFrom: "From GHS 170",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80",
    href: "/menu#burgers",
  },
  {
    name: "Pizza",
    description: "Hot from the oven.",
    priceFrom: "From GHS 195",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    href: "/menu#pizza",
  },
  {
    name: "Main course",
    description: "Platters built for real hunger.",
    priceFrom: "From GHS 200",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    href: "/menu#mains",
  },
  {
    name: "Starters",
    description: "Wings, fries and sharers.",
    priceFrom: "From GHS 50",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=80",
    href: "/menu#starters",
  },
  {
    name: "Drinks",
    description: "Shakes, juices and cocktails.",
    priceFrom: "From GHS 30",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
    href: "/menu#drinks",
  },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2400&q=90",
  heroVideo: "/hero.mp4",
  vibe:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  space:
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
  plate:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
} as const;

export { menuSections, menuWelcome } from "@/lib/menu";
export type { MenuItem, MenuSection, MenuGroup } from "@/lib/menu";

export const footerLinks = [
  { to: "/", label: "Home", hash: "#top" },
  { to: "/menu", label: "Menu" },
  { to: "/", label: "Our Story", hash: "#story" },
  { to: "/", label: "Gallery", hash: "#gallery" },
  { to: "/", label: "Contact", hash: "#contact" },
] as const;
