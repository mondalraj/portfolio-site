import { Box, Text } from "@mantine/core";
import { IconBrandMantine, TablerIcon } from "@tabler/icons";
import { IconType } from "react-icons";
import { AiOutlineFilePdf } from "react-icons/ai";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import { GrOptimize } from "react-icons/gr";
import {
  SiAuth0,
  SiChainlink,
  SiEthereum,
  SiExpress,
  SiFramer,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import CustomCarousel from "../skills/CustomCarousel";

type TSkill = {
  name: string;
  icon: IconType | TablerIcon;
};

const skills: TSkill[] = [
  { name: "Next js", icon: SiNextdotjs },
  { name: "CSS3", icon: DiCss3Full },
  { name: "Typescript", icon: SiTypescript },
  { name: "React js", icon: SiReact },
  { name: "Node js", icon: SiNodedotjs },
  { name: "Express js", icon: SiExpress },
  { name: "Nest js", icon: SiNestjs },
  { name: "SEO", icon: GrOptimize },
  { name: "React-PDF", icon: AiOutlineFilePdf },
  { name: "Next-Auth", icon: SiAuth0 },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Mongo DB", icon: DiMongodb },
  { name: "Mantine UI", icon: IconBrandMantine },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "REST API", icon: TbApi },
  { name: "Solidity", icon: SiSolidity },
  { name: "Ethereum", icon: SiEthereum },
  { name: "Chainlink", icon: SiChainlink },
  { name: "Thirdweb", icon: SiWeb3Dotjs },
];

const SkillsSection = () => {
  return (
    <Box my={28}>
      <CustomCarousel>
        {skills?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <item.icon size={32} />
            <Text size="lg">{item.name}</Text>
          </Box>
        ))}
        {skills?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <item.icon size={32} />
            <Text size="lg">{item.name}</Text>
          </Box>
        ))}
        {skills?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <item.icon size={32} />
            <Text size="lg">{item.name}</Text>
          </Box>
        ))}
        {skills?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <item.icon size={32} />
            <Text size="lg">{item.name}</Text>
          </Box>
        ))}
        {skills?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <item.icon size={32} />
            <Text size="lg">{item.name}</Text>
          </Box>
        ))}
      </CustomCarousel>
    </Box>
  );
};

export default SkillsSection;
