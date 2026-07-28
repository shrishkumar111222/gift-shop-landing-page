export const WHATSAPP_LINK = "https://wa.me/919905429650";

export const trustBadges: string[] = [
  "Fully Custom Design",
  "Mobile Responsive",
  "WhatsApp Integration",
  "Fast Loading",
  "SEO Friendly",
  "Starting from ₹9,999",
];

export type Concept = {
  id: string;
  name: string;
  tagline: string;
  perfectFor: string[];
  demoUrl: string;
  accent: string;
};

export const concepts: Concept[] = [
  {
    id: "premium-luxury",
    name: "Premium Luxury",
    tagline: "Refined, editorial, built to feel expensive.",
    perfectFor: [
      "Luxury Gift Stores",
      "Wedding Gifts",
      "Corporate Gifts",
      "Premium Branding",
    ],
    demoUrl:
      "https://shrishkumar111222.github.io/Premium-LUXERY-GIFT-STORE-ARCHITECTURE/",
    accent: "from-[#111111] to-[#2563EB]",
  },
  {
    id: "modern-commerce",
    name: "Modern Commerce",
    tagline: "Bright, conversion-first storefront layout.",
    perfectFor: ["Toy Shops", "Gift Shops", "Stationery", "Kids Store"],
    demoUrl: "https://shrishkumar111222.github.io/Modern-Commerce-GIFT-Website-/",
    accent: "from-[#2563EB] to-[#60a5fa]",
  },
  {
    id: "creative-experience",
    name: "Creative Experience",
    tagline: "Playful motion for standout, personal brands.",
    perfectFor: [
      "Modern Gift Corners",
      "Personalized Gifts",
      "Festival Collection",
      "Unique Brands",
    ],
    demoUrl: "https://shrishkumar111222.github.io/refactored-eureka/",
    accent: "from-[#111111] to-[#4b5563]",
  },
];

export type Feature = {
  title: string;
};

export const features: Feature[] = [
  { title: "Responsive Design" },
  { title: "WhatsApp Chat" },
  { title: "Google Maps" },
  { title: "Inquiry Form" },
  { title: "Product Gallery" },
  { title: "Testimonials" },
  { title: "SEO" },
  { title: "Fast Loading" },
  { title: "Animations" },
  { title: "Social Media" },
  { title: "Admin Dashboard Ready" },
  { title: "Hosting Support" },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How long does it take?",
    answer:
      "Most gift and toy shop websites are designed, built, and delivered within 5-7 working days from the time you approve your concept.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Send us your current website and we'll rebuild it with a modern, mobile-first design while keeping the content and branding you already have.",
  },
  {
    question: "Can customers order through WhatsApp?",
    answer:
      "Absolutely. Every website we build includes a one-tap WhatsApp button so customers can enquire or place orders directly from your site.",
  },
  {
    question: "Can I update products myself?",
    answer:
      "Yes, we set up an easy-to-use admin dashboard so you can add, edit, and remove products or offers without touching any code.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Every site is built mobile-first and tested across phones, tablets, and desktops, since most of your customers will find you on mobile.",
  },
];

export const businessTypes = [
  "Gift Shop",
  "Toy Shop",
  "Stationery Store",
  "Kids Store",
  "Wedding Gifts",
  "Corporate Gifts",
  "Other",
];
