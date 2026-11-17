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
    slug: "taskflow",
    title: "Ecommerce Website",
    description: "An ecommerce website for customer to browse.",
    summary:
      "A clean task management system that helps teams plan work, assign tasks and track progress in real time.",
    // image: photo("photo-1559028012-481c04fa702d"),
    image: "/Project1/image1.png",
    alt: "Task management dashboard preview",
    tags: ["React", "Tailwind CSS", "Firebase"],
    role: "Full Stack Developer",
    year: "2025",
    status: "Live",
    liveUrl: "https://example.com/taskflow",
    repoUrl: "https://github.com/",
    overview:
      "TaskFlow was built to replace scattered to-do lists with one shared workspace. Teams create boards, break work into tasks and see who is doing what at a glance.",
    modules: [
      {
        title: "Authentication & Accounts",
        description:
          "Secure sign up and sign in so every team member has their own workspace and role.",
        image: workspace,
        points: ["Email and Google sign in", "Role based access", "Profile and settings"],
      },
      {
        title: "Boards & Task Management",
        description:
          "Create boards with custom columns and move tasks from idea to done with simple drag and drop.",
        image: dashboard,
        points: ["Drag and drop columns", "Due dates and priorities", "Labels and filters"],
      },
      {
        title: "Team Collaboration",
        description:
          "Assign work, comment on tasks and see live updates from teammates without refreshing.",
        image: team,
        points: ["Real-time sync", "Comments and mentions", "Activity timeline"],
      },
      {
        title: "Reports & Insights",
        description:
          "Track how the team is performing with clear charts for progress and workload.",
        image: analytics,
        points: ["Completion charts", "Workload per member", "Weekly summary"],
      },
    ],
    outcome:
      "A fast, responsive app that made it easy for small teams to stay organised and ship on time.",
  },
  {
    slug: "shopsphere",
    title: "ShopSphere",
    description: "An e-commerce platform with secure payments and admin panel.",
    summary:
      "A full e-commerce system with product management, a smooth checkout and secure online payments.",
    image: photo("photo-1556742049-0cfed4f6a45d"),
    alt: "E-commerce website preview",
    tags: ["Laravel", "MySQL", "Stripe"],
    role: "Backend Developer",
    year: "2025",
    status: "Live",
    liveUrl: "https://example.com/shopsphere",
    repoUrl: "https://github.com/",
    overview:
      "ShopSphere lets customers browse products, fill a cart and pay securely, while store owners manage products, orders and customers from an admin panel.",
    modules: [
      {
        title: "Product Catalogue",
        description:
          "A fast storefront where customers search, filter and discover products easily.",
        image: mobile,
        points: ["Search and filters", "Categories and tags", "Product galleries"],
      },
      {
        title: "Cart & Checkout",
        description:
          "A simple, secure checkout flow powered by Stripe so customers can pay with confidence.",
        image: workspace,
        points: ["Persistent cart", "Stripe payments", "Order confirmation emails"],
      },
      {
        title: "Admin Panel",
        description:
          "Store owners manage products, stock, orders and customers from one dashboard.",
        image: dashboard,
        points: ["Product and stock management", "Order tracking", "User management"],
      },
      {
        title: "Sales Analytics",
        description:
          "Understand what sells with revenue charts and top product reports.",
        image: analytics,
        points: ["Revenue overview", "Best sellers", "Monthly reports"],
      },
    ],
    outcome:
      "A complete shopping experience from browsing to payment, with a simple back office for the store owner.",
  },
  {
    slug: "weatherwise",
    title: "WeatherWise",
    description: "Real-time weather forecast with a clean and simple interface.",
    summary:
      "A simple weather app that shows live conditions and a 5 day forecast for any city in the world.",
    image: photo("photo-1504608524841-42fe6f032b4b"),
    alt: "Weather application preview",
    tags: ["React", "OpenWeather API"],
    role: "Frontend Developer",
    year: "2024",
    status: "Live",
    liveUrl: "https://example.com/weatherwise",
    repoUrl: "https://github.com/",
    overview:
      "WeatherWise focuses on doing one thing well: showing the weather clearly. Search a city and instantly see temperature, wind, humidity and the days ahead.",
    modules: [
      {
        title: "City Search",
        description:
          "Find the weather for any city in the world with instant suggestions as you type.",
        image: workspace,
        points: ["Autocomplete search", "Recent searches", "Current location"],
      },
      {
        title: "Current Conditions",
        description:
          "A clear snapshot of temperature, wind, humidity and what the sky looks like right now.",
        image: dashboard,
        points: ["Live temperature", "Wind and humidity", "Sunrise and sunset"],
      },
      {
        title: "5 Day Forecast",
        description:
          "Plan ahead with a simple forecast that is easy to read at a glance.",
        image: analytics,
        points: ["Daily highs and lows", "Rain chances", "Metric and imperial units"],
      },
    ],
    outcome:
      "A lightweight app that loads fast and is easy to read at a glance.",
  },
  {
    slug: "devblog",
    title: "DevBlog",
    description: "A modern blog for developers and technology enthusiasts.",
    summary:
      "A fast, markdown powered blog for sharing tutorials, notes and ideas about web development.",
    image: photo("photo-1498050108023-c5249f4df085"),
    alt: "Developer blog preview",
    tags: ["Next.js", "Markdown"],
    role: "Full Stack Developer",
    year: "2026",
    status: "In progress",
    liveUrl: "https://example.com/devblog",
    repoUrl: "https://github.com/",
    overview:
      "DevBlog is a personal publishing platform where posts are written in markdown and rendered as fast static pages, great for readers and search engines.",
    modules: [
      {
        title: "Markdown Writing",
        description:
          "Write posts in plain markdown with syntax highlighted code blocks and images.",
        image: code,
        points: ["Code highlighting", "Image support", "Draft and publish"],
      },
      {
        title: "Reading Experience",
        description:
          "A clean, distraction free layout designed for long technical articles.",
        image: workspace,
        points: ["Dark and light modes", "Table of contents", "Reading time"],
      },
      {
        title: "Tags & Discovery",
        description:
          "Help readers find what they need with tags, categories and search.",
        image: dashboard,
        points: ["Tags and categories", "Search", "Related posts"],
      },
    ],
    outcome:
      "A flexible blog foundation that makes writing and publishing new posts effortless.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
