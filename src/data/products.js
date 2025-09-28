export const PRODUCTS = [
  // Fragrances — Citrus
  {
    id: "citrus-breeze-edp",
    name: "Citrus Breeze Eau de Parfum",
    price: 89.0,
    oldPrice: 109.0,
    rating: 4.6,
    reviews: 214,
    colors: ["Gold", "White", "Black"],
    sizes: ["30ml", "50ml", "100ml"],
    tag: "Sale",
    category: "Citrus",
    brand: "AromaHaus",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A sparkling blend of bergamot, grapefruit, and neroli over clean musk.",
    features: ["Top: Bergamot, Grapefruit", "Heart: Neroli, Orange Blossom", "Base: Musk", "EDP Concentration"],
    inStock: true,
    stockCount: 42
  },
  // Fragrances — Floral
  {
    id: "midnight-rose-extrait",
    name: "Midnight Rose Extrait",
    price: 139.0,
    oldPrice: 0,
    rating: 4.8,
    reviews: 167,
    colors: ["Black", "Gold", "Amber"],
    sizes: ["30ml", "50ml"],
    tag: "Bestseller",
    category: "Floral",
    brand: "Maison Lueur",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231685?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1585386959984-a41552231685?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1520975940200-9e0ce9a4f0f1?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Velvety rose and saffron wrapped in dark woods and vanilla absolute.",
    features: ["Top: Saffron", "Heart: Rose, Jasmine", "Base: Oud, Vanilla", "Extrait Concentration"],
    inStock: true,
    stockCount: 25
  },
  // Fragrances — Woody
  {
    id: "cedar-trail-edt",
    name: "Cedar Trail Eau de Toilette",
    price: 79.0,
    oldPrice: 95.0,
    rating: 4.4,
    reviews: 98,
    colors: ["Brown", "Black", "Gray"],
    sizes: ["50ml", "100ml"],
    tag: "Trending",
    category: "Woody",
    brand: "Nordic Atelier",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585386959984-a41552231685?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A crisp cedar and vetiver composition with hints of incense and pine.",
    features: ["Top: Pine, Incense", "Heart: Cedar", "Base: Vetiver, Amber", "EDT Concentration"],
    inStock: true,
    stockCount: 63
  },
  // Fragrances — Oriental
  {
    id: "amber-oud-royale",
    name: "Amber Oud Royale",
    price: 159.0,
    oldPrice: 179.0,
    rating: 4.7,
    reviews: 132,
    colors: ["Amber", "Gold", "Black"],
    sizes: ["50ml", "100ml"],
    tag: "Featured",
    category: "Oriental",
    brand: "Sultan Essentia",
    image: "https://images.unsplash.com/photo-1605979257913-1703e3b2e2f3?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1605979257913-1703e3b2e2f3?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba05b437?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Opulent amber and oud layered with spices, labdanum, and smoky resins.",
    features: ["Top: Cardamom, Saffron", "Heart: Oud, Labdanum", "Base: Amber, Smoke", "EDP Concentration"],
    inStock: true,
    stockCount: 18
  },
  // Fragrances — Aquatic
  {
    id: "oceanic-mist-edp",
    name: "Oceanic Mist Eau de Parfum",
    price: 99.0,
    oldPrice: 0,
    rating: 4.3,
    reviews: 77,
    colors: ["Blue", "White", "Gray"],
    sizes: ["50ml", "100ml"],
    tag: "Popular",
    category: "Citrus",
    brand: "Atelier Marine",
    image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505575972945-2804b5e8f16e?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Sea breeze accord with lime, rosemary, and soft driftwood.",
    features: ["Top: Lime", "Heart: Rosemary", "Base: Driftwood", "EDP Concentration"],
    inStock: true,
    stockCount: 52
  },
  // Fragrances — Gourmand
  {
    id: "vanilla-veil-extrait",
    name: "Vanilla Veil Extrait",
    price: 129.0,
    oldPrice: 149.0,
    rating: 4.9,
    reviews: 301,
    colors: ["Brown", "Gold", "Black"],
    sizes: ["30ml", "50ml"],
    tag: "New",
    category: "Oriental",
    brand: "Nocturne Parfums",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba05b437?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1611930022073-b7a4ba05b437?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605979257913-1703e3b2e2f3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A decadent blend of Madagascar vanilla, tonka bean, and cacao absolute.",
    features: ["Top: Almond", "Heart: Vanilla", "Base: Tonka, Cacao", "Extrait Concentration"],
    inStock: true,
    stockCount: 34
  },
  // Fragrances — Floral Fresh
  {
    id: "neroli-nectar-edp",
    name: "Neroli Nectar Eau de Parfum",
    price: 105.0,
    oldPrice: 0,
    rating: 4.5,
    reviews: 112,
    colors: ["White", "Gold", "Beige"],
    sizes: ["50ml", "100ml"],
    tag: "Featured",
    category: "Floral",
    brand: "Casa di Fiori",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520975940200-9e0ce9a4f0f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Sunlit neroli, petitgrain, and honeyed florals with soft musk drydown.",
    features: ["Top: Neroli, Petitgrain", "Heart: White Florals", "Base: Musk", "EDP Concentration"],
    inStock: true,
    stockCount: 57
  },
  // Fragrances — Woody Spicy
  {
    id: "spiced-cedar-parfum",
    name: "Spiced Cedar Parfum",
    price: 119.0,
    oldPrice: 0,
    rating: 4.2,
    reviews: 64,
    colors: ["Brown", "Black", "Gold"],
    sizes: ["50ml", "100ml"],
    tag: "Popular",
    category: "Woody",
    brand: "Forge & Flacon",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231685?auto=format&fit=crop&w=900&q=80",
    thumb: "https://images.unsplash.com/photo-1585386959984-a41552231685?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Roasted spices over creamy cedar, sandalwood, and ambergris facets.",
    features: ["Top: Cardamom", "Heart: Cedar", "Base: Sandalwood, Ambergris", "Parfum Concentration"],
    inStock: true,
    stockCount: 39
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Fragrances", count: PRODUCTS.length },
  { id: "citrus", name: "Citrus", count: PRODUCTS.filter(p => p.category === "Citrus").length },
  { id: "floral", name: "Floral", count: PRODUCTS.filter(p => p.category === "Floral").length },
  { id: "woody", name: "Woody", count: PRODUCTS.filter(p => p.category === "Woody").length },
  { id: "oriental", name: "Oriental", count: PRODUCTS.filter(p => p.category === "Oriental").length }
];

export const BRANDS = [
  "AromaHaus", "Maison Lueur", "Nordic Atelier", "Sultan Essentia", "Atelier Marine", "Nocturne Parfums", "Casa di Fiori", "Forge & Flacon"
];

export const REVIEWS = [
  // Fragrance reviews can be added here
];
