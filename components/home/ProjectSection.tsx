/* eslint-disable @next/next/no-img-element */
import { Box, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import projectData from "../../data/projectData";
import ProjectCardLeft from "../projects/ProjectCardLeft";
import ProjectCardRight from "../projects/ProjectCardRight";

const ProjectSection = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    setIsMobileScreen(window.innerWidth <= 768);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "1.5rem",
        margin: "6rem 0",
      }}
    >
      <Text
        size={28}
        fw={600}
        mb={10}
        variant="gradient"
        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
      >
        Projects
      </Text>

      {projectData
        .filter((project) => {
          return project.title == "Sleek CV" || project.title == "Devshowcase";
        })
        .map((project, index) => {
          return index % 2 === 0 ? (
            <ProjectCardRight
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              demo={project.demo}
              tags={project.tags}
              thumbnail={project.thumbnail}
            />
          ) : (
            <ProjectCardLeft
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              demo={project.demo}
              tags={project.tags}
              thumbnail={project.thumbnail}
            />
          );
        })}

      <Text
        // className="underlineLinks"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.25rem",
          marginTop: "1rem",
          zIndex: 100,

          "&:hover": {
            color: "white",
            gap: "0.5rem",
            transition: "all 0.3s ease-in-out",
          },

          ":after": {
            content: '""',
            position: "absolute",
            width: "0",
            height: "3px",
            backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
            bottom: "-10px",
            left: "0",
            transition: "all 0.5s ease-in-out",
          },
          ":hover:after": {
            width: "100%",
            transition: "all 0.5s ease-in-out",
          },
        }}
        size="lg"
        color="blue.5"
        component={Link}
        href="/projects"
      >
        View All Projects
        <IconChevronRight size={20} />
      </Text>
    </Box>
  );
};

export default ProjectSection;
