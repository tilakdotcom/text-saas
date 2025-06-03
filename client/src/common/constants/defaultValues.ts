import { Variants } from "framer-motion";

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "Free",
    description: "Perfect for occasional users",
    items: ["5 PDF summaries", "Standard processing speed", "Email support"],
    paymentLink: "/upload",
    priceId: "basic_free",
  },
  {
    id: "pro",
    name: "Pro",
    price: "200",
    description: "Perfect for occasional users",
    items: [
      "10 PDF summaries",
      "Standard processing speed",
      "Email support",
      "Markdown Export",
    ],
    priceId: "pro_monthly",
    paymentLink: "/upload",
  },
];

export const demoText: string = `# SOMMAIRE: AI-Powered Document Summarizer 🧠📄
🎯 SOMMAIRE is an intelligent, web - based tool that simplifies complex documents into clear, concise summaries—powered by state - of - the - art AI.

# Website Details
• 🌐 Platform: SOMMAIRE (https://sommaire-kv.vercel.app)
• 👥 For: Students, Professionals, Researchers, and Content Creators

# Key Highlights
• ⚡ Instant PDF / Text Summarization
• 🔍 AI - driven Insights & Keyword Extraction
• 💡 Clean, Responsive UI with Next.js + Tailwind CSS

# Why It Matters
• 🧠 SOMMAIRE helps users save time and effort by auto - generating meaningful summaries of lengthy PDFs and text files.It empowers better comprehension and faster decision - making.

# Main Features
• 📄 Upload or paste content to receive instant AI - generated summaries.
• 🗂️ Supports multiple document formats like PDF, DOCX, and TXT.
• 🔐 Secure file handling and fast performance using Node.js and OpenAI integration.
• 📊 Insight view with extracted key terms, sentence importance, and word clouds.

# Pro Tips
• 📌 Use SOMMAIRE to quickly scan academic papers or lengthy reports.
• 🚀 Highlight key takeaways and save summaries for later review.
• 🧩 Ideal for integrating into knowledge workflows or research pipelines.

# Key Terms to Know
• 🧠 NLP: Natural Language Processing—used to interpret and summarize text.
• ⚙️ OpenAI API: The engine behind SOMMAIRE’s smart summarization capabilities.

# Bottom Line
• 💫 SOMMAIRE is your go - to AI assistant for document summarization—fast, efficient, and built for clarity in the age of information overload.`;

export const tilakText: string =`# Full-Stack MERN Developer: Tilak Singh's Portfolio 🚀\n\n🎯 A skilled MERN stack developer showcasing experience in building scalable applications and creating seamless user experiences.\n• 📌 Highlights projects demonstrating proficiency in front-end, back-end, and database technologies.\n\n# Document Details\n• 📃 Type: Resume/Portfolio Summary\n• 👥 For: Potential Employers/Clients\n\n# Key Highlights\n• 🚀 Full-stack expertise focused on the MERN stack.\n• ⭐ Experience building e-commerce platforms, link shorteners, and Telegram bots.\n• 💫 Proficient in various languages, frameworks, and tools.\n\n# Why It Matters\n• 💡 This portfolio highlights a developer with the skills to build and deploy robust, user-friendly web applications, making them an asset for any team.\n\n# Main Points\n• 🎯 Demonstrated ability to develop full-stack applications from concept to deployment.\n• 💪 Strong command of modern web technologies, including React, Node.js, and various databases.\n• 🔥 Proven track record of delivering efficient solutions and clean code.\n\n# Pro Tips\n• ⭐ Emphasize project accomplishments with quantifiable results (e.g., \"increased user engagement by X%\").\n• 💎 Tailor the portfolio to the specific requirements of each job application.\n• 🌟 Continuously update the portfolio with new projects and technologies.\n\n# Key Terms to Know\n• 📚 MERN Stack: A popular JavaScript-based stack (MongoDB, Express.js, React.js, Node.js) for web development.\n• 🔍 RESTful APIs: Architectural style for designing networked applications, using HTTP requests to access and manipulate data.\n\n# Bottom Line\n• 💫 A highly skilled MERN stack developer with a portfolio showcasing practical experience and a commitment to quality.\n`

// Container animation
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Individual item animation
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

// List item animation from the left
export const listVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

// Button hover effect
export const buttonVariants = {
  scale: 1.05,
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 300,
    duration: 0.8,
  },
};
