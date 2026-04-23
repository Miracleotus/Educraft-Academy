export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: "Design" | "Web Development" | "Marketing" | "Data Science" | "Business";
};

export const products: Product[] = [
  {
    id: "1",
    sku: "ECA-DES-001",
    name: "UX/UI Design Masterclass",
    shortDesc: "Learn to design beautiful, user-centric interfaces from scratch using Figma.",
    fullDesc: "This comprehensive 8-week course takes you from absolute beginner to confident product designer. Covers wireframing, prototyping, user research, and advanced Figma techniques. Includes 5 real-world portfolio projects.",
    price: 149.00,
    category: "Design",
  },
  {
    id: "2",
    sku: "ECA-DEV-001",
    name: "Full-Stack Web Dev Bootcamp",
    shortDesc: "Master front-end and back-end web development using the MERN stack.",
    fullDesc: "Dive deep into HTML, CSS, JavaScript, React, Node.js, and MongoDB. This 40-hour video course includes coding exercises, quizzes, and a final capstone project to build a fully functional e-commerce site.",
    price: 199.00,
    category: "Web Development",
  },
  {
    id: "3",
    sku: "ECA-MKT-001",
    name: "Digital Marketing Fundamentals",
    shortDesc: "Grow any business online using SEO, social media, and paid ads.",
    fullDesc: "Learn the strategies behind successful digital marketing campaigns. This course covers SEO basics, Google Ads, Meta Ads, and email marketing. Perfect for entrepreneurs and aspiring marketers.",
    price: 99.00,
    category: "Marketing",
  },
  {
    id: "4",
    sku: "ECA-DAT-001",
    name: "Python for Data Science",
    shortDesc: "Learn Python programming and data analysis techniques using Pandas and NumPy.",
    fullDesc: "Unlock the power of data. This beginner-friendly course teaches core Python syntax before moving into data manipulation, visualization with Matplotlib, and an introduction to machine learning concepts.",
    price: 129.00,
    category: "Data Science",
  },
  {
    id: "5",
    sku: "ECA-BUS-001",
    name: "Freelance Copywriting Blueprint",
    shortDesc: "Turn words into income. Learn to write high-converting copy for web and email.",
    fullDesc: "Discover the psychology of selling through text. This course teaches you how to write landing pages, email sequences, and ad copy, plus a bonus module on how to pitch clients and set your freelance rates.",
    price: 89.00,
    category: "Business",
  },
  {
    id: "6",
    sku: "ECA-DEV-002",
    name: "Advanced React Patterns",
    shortDesc: "Level up your React skills with custom hooks, context, and state management.",
    fullDesc: "Designed for intermediate developers, this course explores complex state management, performance optimization, and architectural patterns used by senior frontend engineers at top tech companies.",
    price: 119.00,
    category: "Web Development",
  },
  {
    id: "7",
    sku: "ECA-DES-002",
    name: "Graphic Design for Beginners",
    shortDesc: "Master the Adobe Creative Cloud (Photoshop, Illustrator, InDesign).",
    fullDesc: "A practical, hands-on introduction to graphic design theory and software. Learn typography, color theory, and layout while building a robust portfolio of logos, posters, and social media assets.",
    price: 109.00,
    category: "Design",
  },
  {
    id: "8",
    sku: "ECA-MKT-002",
    name: "SEO Mastery 2026",
    shortDesc: "Dominate search rankings with modern, white-hat SEO strategies.",
    fullDesc: "Learn how to conduct keyword research, optimize on-page content, build authoritative backlinks, and master technical SEO to drive consistent, organic traffic to your website.",
    price: 99.00,
    category: "Marketing",
  },
  {
    id: "9",
    sku: "ECA-DAT-002",
    name: "Machine Learning A-Z",
    shortDesc: "Build predictive models and algorithms using Scikit-Learn and TensorFlow.",
    fullDesc: "Step into the future of tech. This course breaks down complex ML algorithms into easy-to-understand concepts. Build regression models, neural networks, and natural language processing tools.",
    price: 159.00,
    category: "Data Science",
  },
  {
    id: "10",
    sku: "ECA-BUS-002",
    name: "Launch Your Tech Startup",
    shortDesc: "A step-by-step guide to validating, building, and funding your tech idea.",
    fullDesc: "Taught by successful founders, this course covers market research, building an MVP, creating a pitch deck, and understanding term sheets. Essential for aspiring tech entrepreneurs.",
    price: 149.00,
    category: "Business",
  },
];