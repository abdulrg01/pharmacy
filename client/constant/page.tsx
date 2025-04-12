export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Drug Stores", href: "/drug-stores" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export const burgerImages = [
  "/pharmacy/emzor1.png",
  "/pharmacy/emzor2.png",
  "/pharmacy/polic1.png",
  "/pharmacy/polic2.png",
];

export const drugsData = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    description: "Pain reliever and fever reducer",
    price: 150,
    category: "painkillers",
    image: "/pharmacy/paracetamol.webp",
    stock: 150,
  },
  {
    id: 2,
    name: "Ibuprofen 200mg",
    description: "Anti-inflammatory pain reliever",
    price: 200,
    category: "painkillers",
    image: "/pharmacy/ibuprofen.webp",
    stock: 200,
  },
  {
    id: 3,
    name: "Amoxicillin 500mg",
    description: "Antibiotic for bacterial infections",
    price: 600,
    category: "antibiotics",
    image: "/pharmacy/amoxilcap.jpeg",
    stock: 50,
  },
  {
    id: 4,
    name: "Boska",
    description: "Pain reliever and fever reducer",
    price: 500,
    category: "painkillers",
    image: "/pharmacy/boska.jpeg",
    stock: 75,
  },
  {
    id: 5,
    name: "Omeprazole 20mg",
    description: "Reduces stomach acid production",
    price: 14.99,
    category: "digestive",
    image: "/pharmacy/polic2.png",
    stock: 60,
  },
  {
    id: 6,
    name: "Aspirin 81mg",
    description: "Blood thinner and pain reliever",
    price: 4.99,
    category: "painkillers",
    image: "/pharmacy/polic2.png",
    stock: 120,
  },
  {
    id: 7,
    name: "Loratadine 10mg",
    description: "Non-drowsy allergy relief",
    price: 9.49,
    category: "allergy",
    image: "/pharmacy/polic2.png",
    stock: 90,
  },
  {
    id: 8,
    name: "Azithromycin 250mg",
    description: "Antibiotic for respiratory infections",
    price: 18.99,
    category: "antibiotics",
    image: "/pharmacy/polic2.png",
    stock: 40,
  },
  {
    id: 9,
    name: "Vitamin D3 1000IU",
    description: "Supports bone health and immunity",
    price: 11.99,
    category: "vitamins",
    image: "/pharmacy/polic2.png",
    stock: 150,
  },
  {
    id: 10,
    name: "Vitamin C 500mg",
    description: "Supports immune system function",
    price: 7.99,
    category: "vitamins",
    image: "/pharmacy/polic2.png",
    stock: 200,
  },
  {
    id: 11,
    name: "Multivitamin Daily",
    description: "Complete daily nutritional support",
    price: 15.99,
    category: "vitamins",
    image: "/pharmacy/polic2.png",
    stock: 180,
  },
  {
    id: 12,
    name: "Ranitidine 150mg",
    description: "Reduces stomach acid for heartburn relief",
    price: 10.49,
    category: "digestive",
    image: "/pharmacy/polic2.png",
    stock: 65,
  },
];

export const products = [
  {
    id: "1",
    name: "paracetamol",
    category: "painrelief",
    desc: "Emzor Paracetamol 500mg Tablets *96",
    price: 9.5,
    image: "/pharmacy/emzor1.png",
  },
  {
    id: "2",
    name: "ibrofen",
    category: "painrelief",
    desc: "Emprofen E 200mg Soft Gel 1*10",
    price: 24.0,
    image: "/pharmacy/emzor2.png",
  },
  {
    id: "3",
    name: "paracetamol",
    category: "painrelief",
    desc: "Emzor Paracetamol 500mg Tablets *1000",
    price: 12.0,
    image: "/pharmacy/emzor3.png",
  },
  {
    id: "4",
    name: "polic",
    category: "maleria",
    desc: "Folic acid tablets 5mg",
    price: 54.5,
    image: "/pharmacy/polic1.png",
  },
  {
    id: "5",
    name: "paracetamol",
    category: "painrelief",
    desc: "Emzor Paracetamol 500mg Tablets *1000",
    price: 9.0,
    image: "/pharmacy/polic2.png",
  },
  {
    id: "6",
    name: "vitaminc",
    category: "maleria",
    desc: "Em-vit'c vitamin cyrup 200ml",
    price: 13.5,
    image: "/pharmacy/polic4.png",
  },
  {
    id: "7",
    name: "paracetamol",
    category: "painrelief",
    desc: "Emzor Paracetamol 500mg Tablets *96",
    price: 9.5,
    image: "/pharmacy/emzor1.png",
  },
  {
    id: "8",
    name: "ibrofen",
    category: "painrelief",
    desc: "Emprofen E 200mg Soft Gel 1*10",
    price: 24.0,
    image: "/pharmacy/emzor2.png",
  },
  {
    id: "9",
    name: "paracetamol",
    category: "painrelief",
    desc: "Emzor Paracetamol 500mg Tablets *1000",
    price: 12.0,
    image: "/pharmacy/emzor3.png",
  },
  {
    id: "10",
    name: "paracetamol",
    category: "painrelief",
    desc: "Emzor Paracetamol 500mg Tablets *1000",
    price: 12.0,
    image: "/pharmacy/emzor3.png",
  },
];

export const categories = [
  {
    name: "painrelief",
    list: ["diclofenac", "ibrofen", "paracetamol"],
  },
  {
    name: "Cold&Flu",
    list: ["cough syrup", "nasal spray", "throat lozenges"],
  },
  {
    name: "Allergy",
    list: ["antihistamines", "nasal sprays", "eye drops"],
  },
  {
    name: "DigestiveHealth",
    list: ["antacids", "laxatives", "probiotics"],
  },
  {
    name: "SkinCare",
    list: ["moisturizers", "sunscreens", "acne treatments"],
  },
  {
    name: "Vitamins&Supplements",
    list: ["multivitamins", "omega-3", "vitamin D"],
  },
  {
    name: "FirstAid",
    list: ["band-aids", "antiseptics", "gauze"],
  },
  {
    name: "EyeCare",
    list: ["eye drops", "contact lens solution", "eye wash"],
  },
  {
    name: "OralCare",
    list: ["toothpaste", "mouthwash", "whitening strips"],
  },
  {
    name: "FootCare",
    list: ["fungal cream", "foot powder", "insoles"],
  },
  {
    name: "EarCare",
    list: ["ear drops", "ear wax removal"],
  },
];

export const links = [
  {
    group: "Product",
    items: [
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Solution",
        href: "#",
      },
      {
        title: "Customers",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Help",
        href: "#",
      },
      {
        title: "About",
        href: "#",
      },
    ],
  },
  {
    group: "Solution",
    items: [
      {
        title: "Startup",
        href: "#",
      },
      {
        title: "Freelancers",
        href: "#",
      },
      {
        title: "Organizations",
        href: "#",
      },
      {
        title: "Students",
        href: "#",
      },
      {
        title: "Collaboration",
        href: "#",
      },
      {
        title: "Design",
        href: "#",
      },
      {
        title: "Management",
        href: "#",
      },
    ],
  },
  {
    group: "Company",
    items: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
      {
        title: "Help",
        href: "#",
      },
    ],
  },
  {
    group: "Legal",
    items: [
      {
        title: "Licence",
        href: "#",
      },
      {
        title: "Privacy",
        href: "#",
      },
      {
        title: "Cookies",
        href: "#",
      },
      {
        title: "Security",
        href: "#",
      },
    ],
  },
];
