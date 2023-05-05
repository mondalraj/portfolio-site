import { IconBrandMantine } from "@tabler/icons";
import { AiOutlineFilePdf } from "react-icons/ai";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import {
  SiAuth0,
  SiEthereum,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const projectData = [
  {
    title: "Devshowcase",
    description:
      "This is where people who code, can connect, can showcase their development projects in front of whole coder&apos;s community. Get hired by startups to build your developer expertise.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Mongo DB", icon: DiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "REST API", icon: TbApi },
    ],
    github: "https://github.com/mondalraj/devshowcase",
    demo: "https://devshowcase-22.vercel.app/",
    thumbnail: "/images/projects/devshowcase.png",
    tags: ["all", "frontend", "fullstack"],
  },
  {
    title: "InstaFund",
    description:
      "An end-to-end platform where people can fund campaigns within the deadline using crypto (ETH). Safe and Secure Decentralized application to get funding for your campaign.",
    techStack: [
      { name: "React.js", icon: SiReact },
      { name: "Typescript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Solidity", icon: SiSolidity },
      { name: "Ethereum", icon: SiEthereum },
    ],
    github: "https://github.com/mondalraj/InstaFund_2.0",
    demo: "https://instafund.vercel.app/",
    thumbnail: "/images/projects/instafund.png",
    tags: ["all", "frontend", "fullstack", "web3"],
  },
  {
    title: "Sleek CV",
    description:
      "A Resume Builder App with neat, clean structure and optimized for ATS that follows Jake's Resume Format. It has Github authentication and Prisma ORM for database management.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Typescript", icon: SiTypescript },
      { name: "Mantine UI", icon: IconBrandMantine },
      { name: "React-PDF", icon: AiOutlineFilePdf },
      { name: "Next-Auth", icon: SiAuth0 },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    github: "https://github.com/mondalraj/SleekCV",
    demo: "https://sleekcv.vercel.app/",
    thumbnail: "/images/projects/sleekCV.png",
    tags: ["all", "frontend", "fullstack"],
  },
  {
    title: " Netflix Clone",
    description:
      "This is the cloned homepage of Netflix, where I have fetched the data from the official TMDB API to render the list of movies and series in real-time.",
    techStack: [
      { name: "React.js", icon: SiReact },
      { name: "CSS", icon: DiCss3Full },
      { name: "MDB API", icon: TbApi },
    ],
    github: "https://github.com/mondalraj/netflix-clone",
    demo: "https://clone-projects-ec1aa.web.app/",
    thumbnail: "/images/projects/netflix.png",
    tags: ["all", "frontend"],
  },

  {
    title: "Mojlo",
    description:
      "This is a movies/web series listing application where user can filter out their genre according to their interest and can watch the brief description and rating of any particular movie/series.",
    techStack: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/mondalraj/mojlo-app",
    demo: "http://mojlo-app.vercel.app/",
    thumbnail: "/images/projects/mojlo.png",
    tags: ["all", "frontend"],
  },
];

export default projectData;
