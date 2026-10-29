export const site = {
  name: "BaguetteSub",
  tagline: "International plates. East Legon energy.",
  description:
    "BaguetteSub Restaurant — modern international fast food on La-Bawaleshi Rd, East Legon, Accra. Dine-in, takeout & delivery.",
  phoneDisplay: "053 052 8105",
  phoneTel: "+233530528105",
  whatsapp: "233530528105",
  address: "La-Bawaleshi Rd, East Legon, Accra",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=BaguetteSub+Restaurant+La-Bawaleshi+Rd+East+Legon+Accra",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=BaguetteSub+Restaurant+La-Bawaleshi+Rd+East+Legon+Accra&z=16&output=embed",
  instagram: "https://www.instagram.com/baguettesub.gh/",
  instagramHandle: "@baguettesub.gh",
  hours: [
    { days: "Mon – Thu", time: "9:00 AM – 10:00 PM" },
    { days: "Fri – Sat", time: "9:00 AM – 11:30 PM" },
    { days: "Sunday", time: "10:00 AM – 10:00 PM" },
  ],
} as const;

export const vibeCopy = {
  eyebrow: "The vibe",
  headline: "Good food. Good vibe.",
  body: "A bright, glass-fronted spot on La-Bawaleshi Road — grill plates, fresh baguettes, and a living-wall neon that says it all. Dine in, grab takeout, or get delivery. Vegan-friendly options on the menu.",
} as const;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: "Grills" | "Rice plates" | "Subs" | "Sides";
};

export const menuItems: MenuItem[] = [
  {
    name: "Chili Steak Sub",
    description: "Grilled steak, chili heat, crisp greens on a fresh baguette.",
    price: "GHS 95",
    category: "Subs",
  },
  {
    name: "Chicken Shawarma Wrap",
    description: "Marinated chicken, garlic sauce, pickles, warm flatbread.",
    price: "GHS 75",
    category: "Subs",
  },
  {
    name: "Mixed Grill Plate",
    description: "Steak, chicken & peppers with house salad and rice.",
    price: "GHS 140",
    category: "Grills",
  },
  {
    name: "Sizzling Pepper Steak",
    description: "Hot skillet steak with onions, peppers, and herbs.",
    price: "GHS 130",
    category: "Grills",
  },
  {
    name: "Jollof Rice Bowl",
    description: "Smoky jollof, grilled protein of your choice, fresh salad.",
    price: "GHS 85",
    category: "Rice plates",
  },
  {
    name: "Lemon Herb Chicken Rice",
    description: "Citrus chicken over steamed rice with garden greens.",
    price: "GHS 90",
    category: "Rice plates",
  },
  {
    name: "Sweet Potato Fries",
    description: "Crispy golden wedges with a light spice dusting.",
    price: "GHS 45",
    category: "Sides",
  },
  {
    name: "Garden Side Salad",
    description: "Carrots, greens, and house dressing — light and fresh.",
    price: "GHS 35",
    category: "Sides",
  },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80",
  vibe:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  plate:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
} as const;
