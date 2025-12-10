export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
  variants: ProductVariant[];
  highlights?: string[];
  gallery?: string[];
  relatedIds?: string[];
  rating?: number;
  reviewsCount?: number;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "FireCat 6th SENSE Jacket",
    slug: "firecat-6th-sense-jacket",
    category: "Safety",
    shortDescription: "Sensor-integrated turnout jacket with real-time telemetry.",
    description:
      "Engineered for first responders, this jacket integrates temperature, gas, and motion sensing with encrypted telemetry for command visibility.",
    image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    badge: "Bestseller",
    variants: [
      { id: "p1-v1", name: "Standard Kit", price: 1899, inStock: true },
      { id: "p1-v2", name: "Command Kit + Gateway", price: 2399, inStock: true },
    ],
    highlights: [
      "Man-down detection with auto alerts",
      "Encrypted mesh networking",
      "Washable, serviceable sensor stack",
    ],
    gallery: [
      "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
      "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
      "/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png",
    ],
    relatedIds: ["p3", "p2"],
    rating: 4.8,
    reviewsCount: 48,
  },
  {
    id: "p2",
    name: "Performance Footwear Insole",
    slug: "performance-footwear-insole",
    category: "Sports",
    shortDescription: "Pressure and gait analytics for elite runners and teams.",
    description:
      "Capture stride symmetry, load distribution, and fatigue signals in real time. Integrates with your existing coaching stack.",
    image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
    variants: [
      { id: "p2-v1", name: "Team Pack (10 pairs)", price: 4900, inStock: true },
      { id: "p2-v2", name: "Pilot Pack (4 pairs)", price: 2200, inStock: true },
    ],
    highlights: [
      "Sub-10ms signal latency",
      "Cloud and edge analytics modes",
      "API + CSV export",
    ],
    gallery: [
      "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
      "/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png",
      "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
    ],
    relatedIds: ["p4", "p1"],
    rating: 4.6,
    reviewsCount: 33,
  },
  {
    id: "p3",
    name: "Workwear Climate Shell",
    slug: "workwear-climate-shell",
    category: "Industrial",
    shortDescription: "Adaptive heating/cooling textile for harsh environments.",
    description:
      "Closed-loop thermal regulation with environment-aware controls, built for long shifts in extreme temps.",
    image: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
    badge: "New",
    variants: [
      { id: "p3-v1", name: "Core Shell", price: 1299, inStock: true },
      { id: "p3-v2", name: "Shell + Battery Pack", price: 1599, inStock: false },
    ],
    highlights: [
      "Thermal zones with auto-balance",
      "Shift-length battery life",
      "Service-ready modules",
    ],
    gallery: [
      "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/927dae7e-6aaf-4b76-add2-1287a1dd9dc0.png",
    ],
    relatedIds: ["p1", "p2"],
    rating: 4.5,
    reviewsCount: 21,
  },
  {
    id: "p4",
    name: "Hockey Skill Tracker",
    slug: "hockey-skill-tracker",
    category: "Sports",
    shortDescription: "Single-IMU skill capture for ice hockey acceleration drills.",
    description:
      "Quantify acceleration, edge control, and maneuverability with a single IMU embedded in the skate.",
    image: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
    variants: [
      { id: "p4-v1", name: "Team Kit (12 units)", price: 5400, inStock: true },
      { id: "p4-v2", name: "Coaches Bundle (6 units)", price: 3100, inStock: true },
    ],
    highlights: [
      "Edge detection ML models",
      "Offline capture, online sync",
      "Coach dashboard-ready",
    ],
    gallery: [
      "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
      "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
    ],
    relatedIds: ["p2", "p3"],
    rating: 4.7,
    reviewsCount: 27,
  },
];

