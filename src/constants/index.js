import { visom, rjinftch, obdurate, outlier, istudio } from "../assets/images";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  bootstrap,
  django,
  figma,
  mysql,
  python,
  threejs,
  ghub,
  atm,
  frs,
  zentry,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  //   {
  //     imageUrl: mongodb,
  //     name: "MongoDB",
  //     type: "Database",
  //   },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  //   {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  //   },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },

  {
    imageUrl: django,
    name: "Django",
    type: "Backend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
];

export const experiences = [
  {
    title: "Python Developer Intern",
    company_name: "Obdurate Technologies",
    icon: obdurate,
    iconBg: "#accbe1",
    date: "Mar 2022 - May 2022",
    points: [
      "Developed basic Python programs to automate tasks and streamline processes, enhancing efficiency across small projects.",
      "Conducted an Exploratory Data Analysis on the Iris flower dataset, identifying key patterns and insights to improve classification accuracy.",
    ],
  },
  {
    title: "Jr. Frontend Developer",
    company_name: "RJ Infotech",
    icon: rjinftch,
    iconBg: "#fbc3bc",
    date: "May 2023 - Nov 2023",
    points: [
      "Developed a Digital Store, allowing a local shop to expand its online presence and reach a broader customer base.",
      "Implemented user-friendly design features, improving the shopping experience and boosting customer engagement.",
      "Collaborated with the team to ensure seamless integration of the store's functionalities and smooth user navigation.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Internship Studio",
    icon: istudio,
    iconBg: "#b7e4c7",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Designed and developed a comprehensive clothing e-commerce website providing a seamless and engaging shopping experience.",
      " Implemented responsive design techniques to ensure the website was fully optimized for both desktop and mobile users.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "Visom6 Technologies Pvt Ltd",
    icon: visom,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Led and collaborated on various React projects, concentrating on the development of highly intuitive, responsive user interfaces to improve the overall user experience and functionality.",
      "Redesigned an existing project, enhancing its UI/UX and overall functionality.",
      "Managed and coordinated project teams, ensuring clear communication, efficient workflows, and timely delivery of all project milestones and key features.",
    ],
  },

  {
    title: "AI Trainer (Freelance)",
    company_name: "Outlier AI",
    icon: outlier,
    iconBg: "#A8F1FF",
    date: "Nov 2024 - Present",
    points: [
      "Engineered complex prompts to systematically challenge and assess LLM capabilities, identifying vulnerabilities and areas for improvement.",
      "Conducted analysis of model responses, diagnosing inaccuracies, and implementing precise corrections to enhance performance.",
      "Reviewed and evaluated LLM training tasks submitted by peers, ensuring adherence to quality standards and providing structured feedback with performance ratings.",
    ],
  },
];

// export const socialLinks = [
//     {
//         name: 'Contact',
//         iconUrl: contact,
//         link: '/contact',
//     },
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/YourGitHubUsername',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/YourLinkedInUsername',
//     }
// ];

export const projects = [
  {
    iconUrl: ghub,
    theme: "btn-back-red",
    name: "Gamer's Hub",
    description:
      "A gaming e-commerce site with user login, product search, Razorpay checkout, email alerts, and responsive design, ensuring a smooth shopping experience across all devices.",
    link: "https://github.com/Sam282001/Gamer-Hub",
  },
  {
    iconUrl: frs,
    theme: "btn-back-green",
    name: "Food Recommendation System",
    description:
      "A health-focused food recommendation system for diabetics that calculates BMI/BMR and suggests personalized meal plans to support better dietary habits and diabetes management.",
    link: "https://github.com/Sam282001/Food-Recommendation-System",
  },
  {
    iconUrl: zentry,
    theme: "btn-back-blue",
    name: "Awwwards Site - Zentry Clone",
    description:
      "An animated Zentry clone featuring engaging transitions, video storytelling, and interactive design elements to showcase modern, creative web experiences.",
    link: "https://github.com/Sam282001/awwwards-site-clone",
  },
  {
    iconUrl: atm,
    theme: "btn-back-pink",
    name: "Console Based ATM Simulator",
    description:
      "A terminal-based ATM simulator replicating basic ATM functions like deposits, withdrawals, and balance checks for hands-on learning in a simple, text-based format.",
    link: "https://github.com/Sam282001/ATM-Simulator",
  },
];
