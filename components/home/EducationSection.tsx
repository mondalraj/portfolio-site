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
            9.5 CGPA Overall.
            <br />
            Have worked on multiple projects in Web Development and Blockchain
            Technology with Technical Club Members (Codechef and GDSC).
            <br />
            1st Runner Up in Incubate IND hackathon powered by Github.
            <br />
            2nd Runner Up in Tally CodeBrewers National Hackathon.
            <br />
            Top 8 in Hack-o-uplift hackathon powered by Devfolio out of 50
            teams.
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
            Passed Higher Secondary Education (XII) in&nbsp; Science with 94.6%
            in 2020 and became the School Topper in Physics. <br />
            Achieved 10 CGPA in Class X in 2018 and was awarded with the Best
            Personality Marker Cup by School Chairman.
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
