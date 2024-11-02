import { Container, Spoiler, Text, Timeline } from "@mantine/core";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import workData from "../data/workData";

const Work = () => {
  return (
    <Layout currentPage="Work">
      <Container>
        <Text size="xl" color="dimmed" mb={30} pt={140}>
          Work Experience
        </Text>
        <Timeline active={0} bulletSize={40} lineWidth={3}>
          {workData.map((work, index) => (
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
                  maxHeight={index === 0 ? 250 : 70}
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
      </Container>
    </Layout>
  );
};

export default Work;
