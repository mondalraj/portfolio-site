import { Box, SegmentedControl, Text, createStyles } from "@mantine/core";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import ProjectCardLeft from "../components/projects/ProjectCardLeft";
import ProjectCardRight from "../components/projects/ProjectCardRight";
import projectData from "../data/projectData";
import IsMobileScreen from "../hooks/useIsMobileScreen";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#000",
    // boxShadow: theme.shadows.md,
    border: `0.5px solid #fff`,
  },

  active: {
    backgroundImage: theme.fn.gradient({
      from: "#F3EC78",
      to: "#EA7EEB",
      deg: 45,
    }),
  },

  control: {
    border: "0 !important",
  },

  labelActive: {
    color: `${theme.black} !important`,
    fontWeight: 600,
  },
}));

const Projects = () => {
  const [projectType, setProjectType] = useState("all");
  const { classes } = useStyles();

  const isMobileScreen = IsMobileScreen();
  return (
    <Layout currentPage="Projects">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text size="xl" color="dimmed" mt={20}>
          My Projects
        </Text>
        <SegmentedControl
          size={isMobileScreen ? "xs" : "sm"}
          radius="md"
          classNames={classes}
          value={projectType}
          onChange={(value) => {
            setProjectType(value);
          }}
          my={16}
          data={[
            { label: "All Tags", value: "all" },
            { label: "Front End", value: "frontend" },
            { value: "fullstack", label: "Full Stack" },
            { value: "web3", label: "Web 3" },
            { value: "react-native", label: "React Native" },
            // { value: "ai", label: "AI / ML" },
          ]}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          margin: "4rem 0",
        }}
      >
        {projectData
          .filter((project) => {
            return project.tags.includes(projectType);
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
      </Box>
    </Layout>
  );
};

export default Projects;
