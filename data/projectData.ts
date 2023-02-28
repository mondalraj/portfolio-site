import { SiNextdotjs, SiReact } from "react-icons/si";

const projectData = [
  {
    title: "Devshowcase",
    description:
      "This is where people who code, can connect, can showcase their development projects in front of whole coder&apos;s community. Get hired by startups to build your developer expertise.",
    techStack: [{ name: "Next.js", icon: SiNextdotjs }],
    github: "https://github.com/mondalraj/devshowcase",
    demo: "https://devshowcase-22.vercel.app/",
    thumbnail: "/images/projects/devshowcase.png",
    tags: ["all", "frontend", "fullstack"],
  },
  {
    title: " Netflix Clone",
    description:
      "This is the cloned homepage of Netflix, where I have fetched the data from the official TMDB API to render the list of movies and series in real-time.",
    techStack: [{ name: "React.js", icon: SiReact }],
    github: "https://github.com/mondalraj/netflix-clone",
    demo: "https://clone-projects-ec1aa.web.app/",
    thumbnail: "/images/projects/netflix.png",
    tags: ["all", "frontend"],
  },
];

export default projectData;
