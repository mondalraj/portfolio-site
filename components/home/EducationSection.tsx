import { Box, Text, Timeline } from "@mantine/core";
import { IconDeviceLaptop, IconSchool } from "@tabler/icons";

const EducationSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "1.5rem",
        padding: "4rem 0",
      }}
    >
      <Text
        variant="gradient"
        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
        size={28}
        fw={600}
        mb={10}
      >
        Education Qualifications
      </Text>
      <Timeline active={0} bulletSize={40} lineWidth={3}>
        <Timeline.Item
          pb={30}
          color="pink"
          bullet={<IconDeviceLaptop size={24} color="white" />}
          title={
            <Text size="lg" ml={10} color="white">
              Bachelors in Technology{" "}
              <Text color="dimmed" span>
                (Information Technology)
              </Text>
            </Text>
          }
        >
          <Text size="md" ml={10}>
            Secured an overall CGPA of 9.5.
            <br />
            Collaborated on multiple web development and blockchain projects
            with CodeChef and Google Developer Student Club (GDSC) members.
            <br />
            Achievements:
            <ul
              style={{
                paddingLeft: "2rem",
              }}
            >
              <li>
                1st Runner-Up in Incubate IND Hackathon powered by GitHub.
              </li>
              <li>2nd Runner-Up in Tally CodeBrewers National Hackathon.</li>
              <li>
                Top 8 finalist in Hack-o-uplift Hackathon powered by Devfolio
                (competing among 50 teams).
              </li>
            </ul>
          </Text>
          <Text
            color="dimmed"
            size="sm"
            mt={4}
            ml={10}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              flexWrap: "wrap",
            }}
          >
            Guru Gobind Singh Indraprastha University
            <Text
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            />
            Delhi, India
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconSchool size={24} />}
          title={
            <Text size="lg" color="white" ml={10}>
              Higher Secondary Schooling (X & XII)
            </Text>
          }
        >
          <Text
            size="md"
            ml={10}
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            Completed Higher Secondary Education (Class XII) in Science with a
            score of 94.6% (2020); recognized as School Topper in Physics.{" "}
            <br />
            Achieved a 10 CGPA in Class X (2018) and honored with the Best
            Personality Marker Cup by the School Chairman.
          </Text>
          <Text
            color="dimmed"
            size="sm"
            mt={4}
            ml={10}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              flexWrap: "wrap",
            }}
          >
            Central Board of Secondary Education
            <Text
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            />
            Delhi, India
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
};

export default EducationSection;
