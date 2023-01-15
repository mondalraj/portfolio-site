/* eslint-disable @next/next/no-img-element */
import { ActionIcon, Box, Text, Tooltip } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import {
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

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
        margin: "4rem 0",
      }}
    >
      <Text color={"dimmed"} size={28} fw={600} mb={10}>
        Projects
      </Text>

      <Box
        sx={(theme) => ({
          minHeight: "10rem",
          width: "100%",
          backgroundColor: "black",
          borderRadius: "1rem",
          // padding: "1rem",
          border: `0.5px solid ${theme.colors.dark[7]}`,
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
            border: `0.5px solid ${theme.colors.dark[5]}`,
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
            Devshowcase
          </Text>
          <Text
            sx={{
              fontWeight: 400,
              color: "gray",
              marginBottom: "0.5rem",
            }}
          >
            This is where people who code, can connect, can showcase their
            development projects in front of whole coder&apos;s community. Get
            hired by startups to build your developer expertise.
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
              <Tooltip label="Next.js" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  variant="transparent"
                >
                  <SiNextdotjs size={24} />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Node.js" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  color={"teal"}
                  variant="transparent"
                >
                  <SiNodedotjs size={24} />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Mongo DB" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  color={"green"}
                  variant="transparent"
                >
                  <DiMongodb size={24} />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Tailwind CSS" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  color={"blue"}
                  variant="transparent"
                >
                  <SiTailwindcss size={24} />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="Framer Motion" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  color={"grape"}
                  variant="transparent"
                >
                  <SiFramer size={24} />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="REST API" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  variant="transparent"
                >
                  <TbApi size={24} />
                </ActionIcon>
              </Tooltip>
            </Box>
          </Box>

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
            href="https://devshowcase-22.vercel.app/"
            target="_blank"
          >
            <span>Visit Site</span>
            <IconChevronRight size={16} />
          </Text>
        </Box>
        <Box>
          <img
            src="/images/projects/devshowcase.png"
            alt="Devshowcase"
            style={{
              borderStartEndRadius: isMobileScreen ? "0" : "1rem",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: isMobileScreen ? "1rem" : "0",
              width: "100%",
              height: "100%",
              maxWidth: "700px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={(theme) => ({
          minHeight: "10rem",
          width: "100%",
          backgroundColor: "black",
          borderRadius: "1rem",
          // padding: "1rem",
          border: `0.5px solid ${theme.colors.dark[7]}`,
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "stretch",
          transition: "all 0.5s ease",

          "@media(max-width: 768px)": {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },

          "&:hover": {
            border: `0.5px solid ${theme.colors.dark[5]}`,
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
            Netflix Clone
          </Text>
          <Text
            sx={{
              fontWeight: 400,
              color: "gray",
              marginBottom: "0.5rem",
            }}
          >
            This is the cloned homepage of Netflix, where I have fetched the
            data from the official TMDB API to render the list of movies and
            series in real-time.
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
              <Tooltip label="React.js" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  variant="transparent"
                  color={"indigo"}
                >
                  <SiReact size={24} />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="CSS" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  color={"blue"}
                  variant="transparent"
                >
                  <DiCss3Full size={24} />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="TMDB API" withArrow>
                <ActionIcon
                  sx={{
                    cursor: "none",
                  }}
                  variant="transparent"
                >
                  <TbApi size={24} />
                </ActionIcon>
              </Tooltip>
            </Box>
          </Box>

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
            href="https://clone-projects-ec1aa.web.app/"
            target="_blank"
          >
            <span>Visit Site</span>
            <IconChevronRight size={16} />
          </Text>
        </Box>
        <Box>
          <img
            src="/images/projects/netflix.png"
            alt="Netflix CLone"
            style={{
              borderTopLeftRadius: isMobileScreen ? "0" : "1rem",
              borderBottomRightRadius: isMobileScreen ? "1rem" : "0",
              borderBottomLeftRadius: "1rem",
              width: "100%",
              height: "100%",
              maxWidth: "700px",
            }}
          />
        </Box>
      </Box>

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
