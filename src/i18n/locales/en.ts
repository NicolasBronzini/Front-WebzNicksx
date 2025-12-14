import { Translations } from './es';

export const en: Translations = {
  // NavBar
  nav: {
    home: "Home",
    presentProject: "Present Your Project",
    workWithUs: "Work With Us",
    contact: "Contact Us",
  },

  // Header / Hero
  header: {
    title: "Boost your business with a",
    titleHighlight: "professional website",
    description: "At WebzNick, we create web pages, Ecommerce, API integrations and services designed to fit your business so you can sell more and grow faster.",
    benefits: {
      modern: "Modern and functional design",
      optimized: "Optimized to grow your business",
      budget: "Tailored to your budget and needs",
    },
    cta: "Let's Talk Now",
  },

  // Footer
  footer: {
    tagline: "Innovation and technology at your service.",
    followUs: "Follow Us",
    copyright: "All rights reserved.",
  },

  // QueHacemos (What We Do)
  queHacemos: {
    title: "Our development process",
    processes: {
      idea: {
        title: "Idea",
        description: "At this stage, the problem or need to be solved is defined, objectives are established, and a detailed work plan is created.",
        items: [
          "Market and trend analysis.",
          "Opportunity identification.",
          "Clear objective definition.",
          "Work plan creation.",
        ],
      },
      design: {
        title: "Design",
        description: "Here the project takes visual form. We work on visual identity, information architecture, and navigation structure.",
        items: [
          "Visual identity creation.",
          "Interface design (UI/UX).",
          "Information architecture.",
          "Navigation structure.",
        ],
      },
      development: {
        title: "Development",
        description: "In this phase, the website or mobile application is built using the best technologies, frameworks, and development tools.",
        items: [
          "Front-end development.",
          "Back-end development.",
          "Technology integration.",
          "Testing and bug fixing.",
        ],
      },
    },
  },

  // TablePrice
  tablePrice: {
    title: "Our",
    titleHighlight: "Pricing",
    description: "Transparency and quality in every project. Choose the plan that best suits your needs.",
    estimatedTime: "Estimated time:",
    requestQuote: "Request Quote",
    projects: {
      landingPage: {
        type: "Landing Page",
        description: "Simple page with one or two sections, contact form, optimized for basic SEO.",
        price: "$75 - $125",
        time: "1 - 2 weeks",
        features: ["1-2 Sections", "Contact Form", "Basic SEO", "Responsive Design"],
      },
      ecommerceBasic: {
        type: "Basic E-commerce",
        description: "Online store with shopping cart, payment gateway integration, and simple catalog.",
        price: "$210 - $330",
        time: "3 - 5 weeks",
        features: ["Up to 50 products", "Payment Gateway", "Shopping Cart", "Admin Panel"],
      },
      ecommerceAdvanced: {
        type: "Advanced E-commerce",
        description: "Additional features like advanced filters, multiple payment methods, ERP integration.",
        price: "$375 - $665",
        time: "6 - 10 weeks",
        features: ["Advanced Filters", "Multiple Payments", "ERP Integration", "Custom Panel"],
      },
      corporatePage: {
        type: "Corporate Website",
        description: "Professional website for companies, with multiple pages and informational sections.",
        price: "$375 - $665",
        time: "2 - 4 weeks",
        features: ["Multiple Pages", "Blog / News", "Social Media Integration", "SEO Optimization"],
      },
      webApp: {
        type: "Web Application",
        description: "Custom system (e.g., CRM, ERP, Dashboard) with specific functionalities and database.",
        price: "$500 - $1,000",
        time: "8 - 16 weeks",
        features: ["Database", "User Authentication", "Admin Dashboard", "Complex Logic"],
      },
      apiBasic: {
        type: "Basic API",
        description: "Simple REST API to integrate data between systems. Includes CRUD and basic authentication.",
        price: "$150 - $300",
        time: "2 - 4 weeks",
        features: ["Complete CRUD", "Basic Authentication", "Documentation", "DB Integration"],
      },
      apiAdvanced: {
        type: "Advanced API",
        description: "API with complex functionalities like OAuth, payments, or real-time.",
        price: "$400 - $800",
        time: "4 - 8 weeks",
        features: ["OAuth 2.0", "Websockets", "Online Payments", "High Scalability"],
      },
      maintenance: {
        type: "Maintenance",
        description: "Includes security updates, small content changes, and technical support.",
        price: "$12 - $29",
        time: "Monthly",
        features: ["Updates", "Technical Support", "Backups", "Monitoring"],
      },
    },
  },

  // ContactForm
  contactForm: {
    title: "Have questions?",
    titleHighlight: "Let's talk!",
    description: "Tell us about your project and we'll help you make it a reality.",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "youremail@example.com",
      message: "How can we help you?",
    },
    button: "Send Message",
    buttonSending: "Sending...",
    alerts: {
      success: "Message sent successfully!",
      error: "There was an error sending the message. Please try again.",
    },
  },

  // PresPeticion (Present Your Project)
  presPeticion: {
    title: "Present your",
    titleHighlight: "project",
    description1: "Do you have an idea for a web project? Tell us about it and we'll help you make it a reality. We are web development experts and can offer you customized solutions for your needs.",
    description2: "At WebzNicks, we make sure to be with you every step of the way. From initial design to final implementation, we'll guide you through the entire process.",
    features: {
      communication: {
        title: "Effective communication",
        description: "We maintain clear and constant communication to ensure you are informed and satisfied with the project's progress.",
      },
      quality: {
        title: "Commitment to quality",
        description: "We offer high-quality customized solutions to ensure customer satisfaction and project success.",
      },
      professionalism: {
        title: "Seriousness and professionalism",
        description: "We are committed to meeting agreed deadlines and ensuring the confidentiality and security of information.",
      },
    },
  },

  // ProyectForm
  proyectForm: {
    title: "Tell us about your",
    titleHighlight: "project",
    titleEnd: "!",
    description: "Fill out the form and we'll get in touch with you as soon as possible.",
    labels: {
      name: "Name",
      email: "Email",
      projectType: "Project Type",
      description: "Project Description",
    },
    placeholders: {
      name: "Your name",
      email: "youremail@example.com",
      projectType: "Select...",
      description: "Tell us the details...",
    },
    projectTypes: {
      landingPage: "Landing Page",
      ecommerceBasic: "Basic E-commerce",
      ecommerceAdvanced: "Advanced E-commerce",
      corporatePage: "Corporate Website",
      webApp: "Web Application",
      apiBasic: "Basic API",
      apiAdvanced: "Advanced API",
      maintenance: "Monthly Maintenance",
    },
    button: "Send Project",
    buttonSending: "Sending...",
    alerts: {
      success: "Project sent successfully! We'll be in touch soon.",
      error: "There was an error sending the project. Please try again.",
    },
  },

  // NewDevs (Work With Us)
  newDevs: {
    title: "Work with",
    titleHighlight: "Us",
    description: "We are looking for talent passionate about technology and web development. If you like to innovate and create impactful solutions, we want you on our team!",
    benefits: {
      technology: {
        title: "Cutting-Edge Technology",
        description: "We work with the latest technologies and frameworks on the market.",
      },
      projects: {
        title: "Challenging Projects",
        description: "Participate in innovative projects that will test your skills.",
      },
      growth: {
        title: "Professional Growth",
        description: "Collaborative environment where continuous learning is our priority.",
      },
    },
    formTitle: "Ready for the next level?",
    formDescription: "Fill out the form and your email client will open.",
    formDescriptionHighlight: "Don't forget to attach your CV!",
    labels: {
      name: "Name",
      email: "Email",
      linkedin: "LinkedIn",
      portfolio: "Portfolio",
      message: "Message",
      cv: "CV / Resume",
    },
    placeholders: {
      name: "Your name",
      email: "youremail@example.com",
      linkedin: "Your profile URL",
      portfolio: "Your portfolio URL",
      message: "Tell us why you want to join...",
    },
    helperText: {
      cv: "PDF, DOC or DOCX (Max 5MB)",
    },
    button: "Send Application",
    buttonSending: "Sending...",
    alerts: {
      success: "Application sent! We'll contact you soon to request your CV.",
      error: "There was an error sending the application. Please try again.",
    },
  },

  // NotFound
  notFound: {
    title: "Oops! Page Not Found",
    message: "Oh no! It seems the link you're looking for is as lost as a needle in a haystack. Better go back to the home page and start your search again. Don't worry, we won't judge you for getting lost on our website! ;)",
    button: "Back to Home",
    contactSupport: "Contact Support",
  },

  // Testimonials
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Real testimonials from successful projects",
    items: [
      {
        name: "Maria G.",
        project: "E-commerce",
        rating: 5,
        text: "Excellent work, very professional and fast. The site turned out better than expected.",
        avatar: "MG"
      },
      {
        name: "Carlos R.",
        project: "Landing Page",
        rating: 5,
        text: "Very satisfied with the result. Good communication throughout the project.",
        avatar: "CR"
      },
      {
        name: "Ana L.",
        project: "Web Application",
        rating: 5,
        text: "They met deadlines and budget. 100% recommended.",
        avatar: "AL"
      }
    ]
  },

  // Trust Badges
  trustBadges: {
    title: "Our Guarantees",
    subtitle: "Your peace of mind is our priority",
    badges: {
      satisfaction: {
        title: "100% Satisfaction Guarantee",
        description: "You don't pay until you're completely satisfied"
      },
      revisions: {
        title: "Unlimited Revisions",
        description: "We adjust until it's perfect"
      },
      support: {
        title: "Post-Launch Support",
        description: "30 days of free technical support"
      },
      cleanCode: {
        title: "Clean Code",
        description: "Documented and easy to maintain"
      },
      onTime: {
        title: "On-Time Delivery",
        description: "We meet agreed deadlines"
      },
      fairPrices: {
        title: "Fair Prices",
        description: "No hidden costs or surprises"
      }
    }
  },

  // Tech Stack
  techStack: {
    title: "Technologies We Master",
    subtitle: "We work with the best tools on the market"
  },

  // Why Choose Us
  whyChooseUs: {
    title: "Why Choose Us?",
    subtitle: "Reasons that make us different",
    reasons: {
      modernTech: {
        title: "Modern Technology",
        description: "We use React, TypeScript, and Node.js to create fast, scalable, and maintainable applications."
      },
      fastResponse: {
        title: "Fast Response",
        description: "Quote in 24 hours and constant communication throughout the project."
      },
      transparentPricing: {
        title: "Transparent Pricing",
        description: "No hidden costs. Clear and detailed budget from the start."
      },
      support: {
        title: "Support Included",
        description: "30 days of free technical support after launch."
      },
      quality: {
        title: "Quality Code",
        description: "Clean, documented code following industry best practices."
      },
      guarantee: {
        title: "Total Guarantee",
        description: "Unlimited revisions until you reach 100% satisfaction."
      }
    }
  },
};
