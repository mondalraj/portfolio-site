import { ActionIcon, Box, Text, Tooltip } from "@mantine/core";
import { IconChevronRight, TablerIcon } from "@tabler/icons";
import Image from "next/image";
import { IconType } from "react-icons";
import IsMobileScreen from "../../hooks/useIsMobileScreen";

interface IProps {
  title: string;
  description: string;
  techStack: {
    name: string;
    icon: IconType | TablerIcon;
  }[];
  github: string;
  demo: string;
  thumbnail: string;
  tags: string[];
}

const ProjectCardRight = ({
  title,
  description,
  techStack,
  github,
  demo,
  thumbnail,
  tags,
}: IProps) => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: "10rem",
        width: "100%",
        backgroundColor: "black",
        borderRadius: "1rem",
        // padding: "1rem",
        border: `1px solid ${theme.colors.dark[7]}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        transition: "all 0.5s ease",

        "@media(max-width: 768px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },

        "&:hover": {
          border: `1px solid ${theme.colors.dark[5]}`,
          transition: "all 0.5s ease",
        },
      })}
    >
      <Box
        sx={{
          padding: "1rem",
          width: "100%",
        }}
      >
        <Text
          sx={{
            fontWeight: 600,
            color: "white",
            marginBottom: "0.5rem",
          }}
          size={"xl"}
        >
          {title}
        </Text>
        <Text
          sx={{
            fontWeight: 400,
            color: "gray",
            marginBottom: "0.5rem",
          }}
        >
          {description}
        </Text>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Text
            sx={{
              fontWeight: 400,
              color: "gray",
              margin: "1rem 0",
            }}
          >
            Tech Stack:
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {techStack?.map((tech, index) => {
              return (
                <Tooltip key={index} label={tech.name} withArrow>
                  <ActionIcon
                    sx={{
                      cursor: "none",
                    }}
                    variant="transparent"
                  >
                    <tech.icon size={24} />
                  </ActionIcon>
                </Tooltip>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Text
            span
            sx={{
              fontSize: "0.9rem",
              fontWeight: 400,
              width: "fit-content",
              // color: "blue.5",
              marginBottom: "0.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s ease",

              "&:hover": {
                color: "white",
                transition: "all 0.2s ease",
              },
            }}
            color={"blue.5"}
            component="a"
            href={demo}
            target="_blank"
          >
            <span>Visit Site</span>
            <IconChevronRight size={16} />
          </Text>
          <Text
            span
            sx={{
              fontSize: "0.9rem",
              fontWeight: 400,
              width: "fit-content",
              // color: "blue.5",
              marginBottom: "0.5rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s ease",

              "&:hover": {
                color: "white",
                transition: "all 0.2s ease",
              },
            }}
            color={"blue.5"}
            component="a"
            href={github}
            target="_blank"
          >
            <span>View Code</span>
            <IconChevronRight size={16} />
          </Text>
        </Box>
      </Box>
      <Box>
        <Image
          src={thumbnail}
          alt={title}
          width={700}
          height={IsMobileScreen() ? 300 : 400}
          style={{
            borderStartEndRadius: IsMobileScreen() ? "0" : "1rem",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: IsMobileScreen() ? "1rem" : "0",
            width: "100%",
            height: "100%",
            maxWidth: "700px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProjectCardRight;
