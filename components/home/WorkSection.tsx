import { Box, Spoiler, Text, Timeline } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import workData from "../../data/workData";

const WorkSection = () => {
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
      <Text
        variant="gradient"
        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
        size={28}
        fw={600}
        mb={10}
      >
        Work Experience
      </Text>
      <Timeline active={0} bulletSize={40} lineWidth={3}>
        {workData
          ?.filter((work, index) => index < 2)
          ?.map((work, index) => (
            <Timeline.Item
              key={index}
              pb={30}
              active={true}
              color="pink"
              bullet={
                <Image
                  src={work.logo}
                  alt={work.company}
                  width={40}
                  height={40}
                  style={{
                    borderRadius: "50%",
                    zIndex: 200,
                  }}
                />
              }
              title={
                <Text size="lg" ml={10} color="white">
                  {work.title}
                </Text>
              }
            >
              <Text size="md" ml={10}>
                <Spoiler
                  maxHeight={index === 0 ? 250 : 80}
                  showLabel="Show more"
                  hideLabel="Hide"
                  sx={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {work.description}
                </Spoiler>
              </Text>
              <Text
                color="dimmed"
                size="sm"
                mt={4}
                ml={10}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",

                  "@media (max-width: 768px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.2rem",
                  },
                }}
              >
                <Text>{work.company} </Text>
                <Text
                  sx={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "gray",

                    "@media (max-width: 768px)": {
                      display: "none",
                    },
                  }}
                />
                <Text>
                  {work.location} - ({work.duration})
                </Text>
              </Text>
            </Timeline.Item>
          ))}
      </Timeline>
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
        href="/work"
      >
        View All Past Experiences
        <IconChevronRight size={20} />
      </Text>
    </Box>
  );
};

export default WorkSection;
