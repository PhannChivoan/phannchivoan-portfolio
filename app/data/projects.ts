export type Module = {
  title: string;
  description: string;
  image: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  alt: string;
  tags: string[];
  role: string;
  year: string;
  status: string;
  liveUrl: string;
  repoUrl: string;
  overview: string;
  modules: Module[];
  outcome: string;
};

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

const dashboard = photo("photo-1551288049-bebda4e38f71");
const analytics = photo("photo-1460925895917-afdab827c52f");
const code = photo("photo-1555066931-4365d14bab8c");
const team = photo("photo-1522202176988-66273c2fd55f");
const workspace = photo("photo-1519389950473-47ba0277781c");
const mobile = photo("photo-1512941937669-90a1b58e7e9c");

export const projects: Project[] = [
  {
    slug: "food-platform",
    title: "Food Platform",
    description: "An ecommerce website where customers browse and order food online.",
    summary:
      "A food ordering website that lets customers explore menus, add dishes to a cart and place orders in a few clicks.",
    image: "/Project4/HomeScreen.png",
    alt: "Food Platform home screen preview",
    tags: ["React", "Tailwind CSS", "Firebase"],
    role: "Full Stack Developer",
    year: "2025",
    status: "Live",
    liveUrl: "https://example.com/food-platform",
    repoUrl: "https://github.com/",
    overview:
      "Food Platform was built to make ordering food simple. Customers browse dishes by category, add their favourites to a cart and place an order, while the owner keeps the menu and orders up to date.",
    modules: [
      {
        title: "Authentication & Accounts",
        description:
          "Secure sign up and sign in so every customer has their own profile and order history.",
        image: workspace,
        points: ["Email and Google sign in", "Saved profile and address", "Order history"],
      },
      {
        title: "Menu Browsing",
        description:
          "A clean storefront where customers explore dishes, search and filter to find what they want.",
        image: mobile,
        points: ["Categories and search", "Dish photos and prices", "Mobile friendly layout"],
      },
      {
        title: "Cart & Ordering",
        description:
          "Add dishes to a cart, adjust quantities and place an order with a simple checkout.",
        image: dashboard,
        points: ["Persistent cart", "Quantity and notes", "Order confirmation"],
      },
      {
        title: "Order Management",
        description:
          "The owner can manage the menu and follow incoming orders from one place.",
        image: analytics,
        points: ["Add and edit dishes", "Order status updates", "Simple sales overview"],
      },
    ],
    outcome:
      "A fast, easy to use food ordering experience that works well on both phones and desktops.",
  },
  {
    slug: "pos-system",
    title: "POS System",
    description: "A point of sale system for managing sales, stock and reports.",
    summary:
      "A point of sale system that helps shops record sales, manage inventory and view daily reports.",
    image: "/Project2/image1.png",
    alt: "POS System preview",
    tags: ["Laravel", "MySQL"],
    role: "Backend Developer",
    year: "2025",
    status: "Live",
    liveUrl: "https://example.com/pos-system",
    repoUrl: "https://github.com/",
    overview:
      "The POS System helps small shops run their daily sales. Cashiers scan or select products to make a sale, while the owner manages stock, staff and reports from an admin panel.",
    modules: [
      {
        title: "Sales Counter",
        description:
          "A fast checkout screen where cashiers add products, apply discounts and complete a sale.",
        image: dashboard,
        points: ["Quick product search", "Discounts and totals", "Multiple payment methods"],
      },
      {
        title: "Products & Inventory",
        description:
          "Keep products and stock levels organised so the shop never runs out by surprise.",
        image: workspace,
        points: ["Product and category management", "Stock tracking", "Low stock alerts"],
      },
      {
        title: "Receipts & Orders",
        description:
          "Every sale is saved and can be printed as a receipt or looked up later.",
        image: code,
        points: ["Printable receipts", "Sales history", "Refunds and returns"],
      },
      {
        title: "Sales Reports",
        description:
          "Understand how the shop is doing with simple daily and monthly reports.",
        image: analytics,
        points: ["Daily and monthly sales", "Best selling products", "Staff activity"],
      },
    ],
    outcome:
      "A reliable system that replaces paper records and makes daily shop work faster and more accurate.",
  },
  {
    slug: "phone-shop",
    title: "Phone Shop Ecommerce",
    description: "An online store for browsing and buying mobile phones.",
    summary:
      "An ecommerce website for a phone shop where customers can compare models, view specs and order online.",
    image: "/Project3/image1.png",
    alt: "Phone Shop Ecommerce preview",
    tags: ["React", "Tailwind CSS"],
    role: "Frontend Developer",
    year: "2024",
    status: "Live",
    liveUrl: "https://example.com/phone-shop",
    repoUrl: "https://github.com/",
    overview:
      "Phone Shop Ecommerce gives customers an easy way to find the right phone. They can browse brands, check specifications, compare models and place an order from any device.",
    modules: [
      {
        title: "Phone Catalogue",
        description:
          "Browse phones by brand, price and category with clear photos and key details.",
        image: mobile,
        points: ["Brands and categories", "Search and filters", "Product galleries"],
      },
      {
        title: "Product Details",
        description:
          "Each phone has its own page with specifications, colours and storage options.",
        image: workspace,
        points: ["Full specifications", "Colour and storage options", "Related phones"],
      },
      {
        title: "Cart & Checkout",
        description:
          "A simple cart and checkout so customers can order without any confusion.",
        image: dashboard,
        points: ["Persistent cart", "Order form", "Order confirmation"],
      },
    ],
    outcome:
      "A clean, responsive store that makes it easy for customers to pick and buy a phone.",
  },
  {
    slug: "toy-store",
    title: "Toy Ecommerce Store",
    description: "A colourful online store for toys and gifts.",
    summary:
      "A fast, friendly ecommerce store where parents can browse toys by age and category and order online.",
    image: "/Project1/image1.png",
    alt: "Toy Ecommerce Store preview",
    tags: ["Next.js", "Tailwind CSS"],
    role: "Full Stack Developer",
    year: "2026",
    status: "In progress",
    liveUrl: "https://example.com/toy-store",
    repoUrl: "https://github.com/",
    overview:
      "The Toy Ecommerce Store is built to make shopping for toys fun and simple. Parents can find the right toy by age or category, add it to a cart and check out quickly.",
    modules: [
      {
        title: "Toy Catalogue",
        description:
          "Browse toys by age group, category and price with bright, clear product cards.",
        image: mobile,
        points: ["Age and category filters", "Search", "Product galleries"],
      },
      {
        title: "Shopping Cart",
        description:
          "Add toys to a cart, change quantities and review everything before paying.",
        image: workspace,
        points: ["Persistent cart", "Quantity controls", "Order summary"],
      },
      {
        title: "Orders & Admin",
        description:
          "Manage toys, stock and incoming orders from a simple admin area.",
        image: dashboard,
        points: ["Product management", "Order tracking", "Stock updates"],
      },
    ],
    outcome:
      "A flexible store foundation that is quick to load and easy to expand with new toys.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);