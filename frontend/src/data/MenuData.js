import solutions from "../assets/images/src/on-premise.jpg";
import cloud from "../assets/images/src/cloud.jpg";
import secaas from "../assets/images/src/secaas.png";
import email from "../assets/images/src/e.png";
import devops from "../assets/images/src/devops.jpg";
import projects from "../assets/images/src/projs.jpg";
import company from "../assets/images/src/company.jpeg";
import store from "../assets/images/src/store.png";

const menu = [
  {
    id: 1,
    menutitle: "On-Premise",
    submenu: true,
    sublinks: [
      {
        id: 11,
        Head: "Solutions",
        src: `${solutions}`,
        portfolio: "On-Premise",
        sublink: [
          {
            idn: 111,
            menuitems: "Firewall",

            link: "/on-premise",
          },
          {
            idn: 122,
            menuitems: "Edge",
            link: "/edge",
          },
          {
            idn: 133,
            menuitems: "Core",
            link: "/core",
          },
          {
            idn: 144,
            menuitems: "Servers",
            link: "/servers",
          },
          {
            idn: 155,
            menuitems: "Structured Cabling",
            link: "/cabling",
          },

          {
            idn: 166,
            menuitems: "Data center infrastructure",
            link: "/data-center",
          },
          /* {
            idn: 177,
            menuitems: "Internet Service Provider",
            link: "/isp",
          }, */
        ],
      },
    ],
  },

  // ######################
  {
    id: 2,
    menutitle: "Cloud",
    submenu: true,
    sublinks: [
      {
        id: 21,
        Head: "Hosting",
        src: `${cloud}`,
        portfolio: "Cloud",
        sublink: [
          {
            idn: 211,
            menuitems: "Shared",
            link: "/shared",
          },
          {
            idn: 222,
            menuitems: "Virtual Private Server",
            link: "/vps",
          },

          {
            idn: 233,
            menuitems: "Dedicated Server",
            link: "/ds",
          },
          {
            idn: 244,
            menuitems: "Domain Names Registration",
            link: "/domains",
          },
          {
            idn: 255,
            menuitems: "Backups",
            link: "/domains",
          },
          {
            idn: 266,
            menuitems: "SSL certificate",
            link: "/domains",
          },
        ],
      },
    ],
  },

  // ######################
  {
    id: 3,
    menutitle: "SECaaS",
    submenu: true,

    sublinks: [
      {
        id: 31,
        Head: "Security as a Service",
        src: `${secaas}`,
        portfolio: "SECaaS",
        sublink: [
          {
            idn: 311,
            menuitems: "Secure Websites & APIs",
            link: "/swapi",
          },
          {
            idn: 322,
            menuitems: "Zero Trust Access",
            link: "/zta",
          },

          {
            idn: 333,
            menuitems: "L3 DDoS Mitigation",
            link: "/ddoS-mitigation",
          },

          {
            idn: 344,
            menuitems: "Phishing-resistant MFA",
            link: "/prmfa",
          },
          {
            idn: 355,
            menuitems: "Endpoint Security",
            link: "/prmfa",
          },
          {
            idn: 366,
            menuitems: "Private VPN",
            link: "/prmfa",
          },
        ],
      },
    ],
  },

  // ######################
  {
    id: 4,
    menutitle: "Email",
    submenu: true,

    sublinks: [
      {
        id: 41,
        Head: "Email Services",
        src: `${email}`,
        portfolio: "Email",
        sublink: [
          {
            idn: 411,
            menuitems: "Business Email",
            link: "/email",
          },
          {
            idn: 422,
            menuitems: "Dedicated  Email Infrastructure",
            link: "/dedicated-email",
          },
          {
            idn: 433,
            menuitems: "DNS",
            link: "/dedicated-email",
          },
          {
            idn: 444,
            menuitems: "Email collaboration",
            link: "/dedicated-email",
          },
          {
            idn: 455,
            menuitems: "Email marketing",
            link: "/dedicated-email",
          },
          {
            idn: 466,
            menuitems: "Secure Email Hosting",
            link: "/dedicated-email",
          },
        ],
      },
    ],
  },

  // ######################
  {
    id: 5,
    menutitle: "DevOps",
    submenu: true,

    sublinks: [
      {
        id: 51,
        Head: "DevOps Consulting",
        src: `${devops}`,
        portfolio: "DevOps",
        sublink: [
          {
            idn: 511,
            menuitems: "Android App",
            link: "/android",
          },
          {
            idn: 522,
            menuitems: "iOS App",
            link: "/android",
          },
          {
            idn: 533,
            menuitems: "Web App",
            link: "/wa",
          },
          {
            idn: 544,
            menuitems: "Distributed App (Java)",
            link: "/da",
          },
          {
            idn: 555,
            menuitems: "CI/CD",
            link: "/da",
          },
          {
            idn: 566,
            menuitems: "Database Design & Implementation",
            link: "/da",
          },
        ],
      },
    ],
  },
  // ######################
  {
    id: 6,
    menutitle: "Projects",
    submenu: true,

    sublinks: [
      {
        id: 61,
        Head: "Portfolio",
        src: `${projects}`,
        portfolio: "Projects",
        sublink: [
          {
            idn: 611,
            menuitems: "Procurement",
            link: "/procurement",
          },
          {
            idn: 622,
            menuitems: "ICT Support Services",
            link: "/ict-supports",
          },
          {
            idn: 633,
            menuitems: "Devops",
            link: "/android",
          },

          {
            idn: 644,
            menuitems: "Security as a Service",
            link: "/android",
          },
          {
            idn: 655,
            menuitems: "Cloud",
            link: "/android",
          },
          {
            idn: 667,
            menuitems: "Email",
            link: "/wa",
          },
          /*  {
            idn: 677,
            menuitems: "Desktop App (Java)",
            link: "/da",
          }, */
        ],
      },
    ],
  },
  // ######################
  {
    id: 7,
    menutitle: "Company",
    submenu: true,

    sublinks: [
      {
        id: 71,
        Head: "Manaded Service Provider",
        src: `${company}`,
        portfolio: "Company",
        sublink: [
          {
            idn: 711,
            menuitems: "About Us",
            link: "/about",
          },
          {
            idn: 722,
            menuitems: "Training & Certifications",
            link: "/training",
          },
          {
            idn: 733,
            menuitems: "Careers ",
            link: "/careers",
          },
          {
            idn: 734,
            menuitems: "Cookies Policy",
            link: "/cookies",
          },
          {
            idn: 735,
            menuitems: "Privacy Policy",
            link: "/privacy",
          },
          {
            idn: 736,
            menuitems: "Terms of services",
            link: "/t&s",
          },
        ],
      },
    ],
  },
  // ######################
  {
    id: 8,
    menutitle: "Store",
    submenu: true,

    sublinks: [
      {
        id: 81,
        Head: "Store",
        src: `${store}`,
        portfolio: "Store",
        sublink: [
          {
            idn: 811,
            menuitems: "Computer",
            link: "/computer",
          },
          {
            idn: 822,
            menuitems: "Networking",
            link: "/networking",
          },
          {
            idn: 833,
            menuitems: "Security",
            link: "/security",
          },
          {
            idn: 834,
            menuitems: "Servers",
            link: "/servers",
          },
        
          {
            idn: 835,
            menuitems: "Electronics",
            link: "/electronics",
          },
        ],
      },
    ],
  },
];

export default menu;
