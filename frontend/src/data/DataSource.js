// Slider Data

const heroSlideImages = [
  {
    id: 1,
    author: "kvilr",
    url: `https://app.kvilr.com/wp-content/uploads/2024/04/Slide1.png`,
    alt: "On-Premise Network",
    title: "On-Premise",
    desc: "",
    cta: "",
    ctalink: "/",
  },
  {
    id: 2,
    author: "kvilr",
    url: `https://app.kvilr.com/wp-content/uploads/2024/04/Slide2.png`,
    alt: "Cloud",
    title: "Cloud",
    desc: "",
    cta: "",
    ctalink: "/",
  },
  {
    id: 3,
    author: "kvilr",
    url: `https://app.kvilr.com/wp-content/uploads/2024/04/Slide3.png`,
    alt: "Security as a Service",
    title: "Security as a Service",
    desc: "",
    cta: "",
    ctalink: "/",
  },
  {
    id: 4,
    author: "kvilr",
    url: `https://app.kvilr.com/wp-content/uploads/2024/04/email.png`,
    alt: "Email",
    title: "Email",
    desc: "",
    cta: "",
    ctalink: "/",
  },
  {
    id: 5,
    author: "kvilr",
    url: `https://app.kvilr.com/wp-content/uploads/2024/04/Slide5.png`,
    alt: "DevOps",
    title: "DevOps",
    desc: "",
    cta: "",
    ctalink: "/",
  },
  {
    id: 6,
    author: "kvilr",
    url: `https://app.kvilr.com/wp-content/uploads/2024/04/Slide6.png`,
    alt: "Projects Portfolio",
    title: "Projects Portfolio",
    desc: "",
    cta: "",
    ctalink: "/",
  },

  {
    id: 7,
    author: "kvilr",
    url: `https://app.kvilr.com/wp-content/uploads/2024/04/Slide7.png`,
    alt: "Managed Services",
    title: "Managed Services",
    desc: "We partner with industry top providers to bring you on-demand services",
    cta: "",
    ctalink: "/",
  },
];

// ##########################################################################################################################
//Solutions
const solutions = [
  {
    id: 1,
    main: "On-Premise",
    sub: [
      {
        idn: 111,
        item: "Firewall",
      },
      {
        idn: 122,
        item: "Edge",
      },
      {
        idn: 133,
        item: "Core",
      },
      {
        idn: 144,
        item: "Servers",
      },
      {
        idn: 155,
        item: "Structured Cabling",
      },

      {
        idn: 166,
        item: "Data center infrastructure",
      },
    ],
  },

  // ######################
  {
    id: 2,
    main: "Cloud",
    sub: [
      {
        idn: 211,
        item: "Shared",
      },
      {
        idn: 222,
        item: "Virtual Private Server",
      },

      {
        idn: 233,
        item: "Dedicated Server",
      },
      {
        idn: 244,
        item: "Domain Names Registration",
      },
      {
        idn: 255,
        item: "Backups",
      },
      {
        idn: 266,
        item: "SSL certificate",
      },
    ],
  },

  // ######################
  {
    id: 3,
    main: "SECaaS",
    sub: [
      {
        idn: 311,
        item: "Secure Websites & APIs",
      },
      {
        idn: 322,
        item: "Zero Trust Access",
      },

      {
        idn: 333,
        item: "L3 DDoS Mitigation",
      },

      {
        idn: 344,
        item: "Phishing-resistant MFA",
      },
      {
        idn: 355,
        item: "Endpoint Security",
      },
      {
        idn: 366,
        item: "Private VPN",
      },
    ],
  },

  // ######################
  {
    id: 4,
    main: "Email",
    sub: [
      {
        idn: 411,
        item: "Business Email",
      },
      {
        idn: 422,
        item: "Dedicated  Email Infrastructure",
      },
      {
        idn: 433,
        item: "DNS",
      },
      {
        idn: 444,
        item: "Email collaboration",
      },
      {
        idn: 455,
        item: "Email marketing",
      },
      {
        idn: 466,
        item: "Secure Email Hosting",
      },
    ],
  },

  // ######################
  {
    id: 5,
    main: "DevOps",
    sub: [
      {
        idn: 511,
        item: "Android App",
      },
      {
        idn: 522,
        item: "iOS App",
      },
      {
        idn: 533,
        item: "Web App",
      },
      {
        idn: 544,
        item: "Distributed App (Java)",
      },
      {
        idn: 555,
        item: "CI/CD",
      },
      {
        idn: 566,
        item: "Database Design & Implementation",
      },
    ],
  },
];

//##############################################################################################################################
//Accordian

const faq = [
  {
    id: 1,
    q: "What are the core services provided by Kanstars Vision?",
    a: "Kanstars Vision is an Information Technology Managed Service Provider. We provide complete ICT Infrastructure Solutions for individuals, Small Businesses, & large enterprises.",
  },
  {
    id: 2,
    q: "What is the payment method accepted?",
    a: "We securely process card issued by all major payment gateway",
  },
  {
    id: 3,
    q: "Do you offer Cloud Services?",
    a: "Yes. We offer cloud services from AWS,Google Cloud, and Microsoft Azure",
  },
  {
    id: 4,
    q: "Do you accept payment through Mobile Money?",
    a: "Yes. Right now we only accept payment through MTN Mobile Money Liberia from anywhere around the world.",
  },
];
export { heroSlideImages, solutions, faq };
