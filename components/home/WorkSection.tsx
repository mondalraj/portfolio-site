import { Box, Spoiler, Text, Timeline } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";

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
      <Text color={"dimmed"} size={28} fw={600} mb={10}>
        Work Experience
      </Text>
      <Timeline active={0} bulletSize={40} lineWidth={3}>
        <Timeline.Item
          pb={30}
          active={true}
          color="pink"
          bullet={
            <Image
              src="/images/simplyjet-logo.jpeg"
              alt="DataPitcher"
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
              Software Developer
            </Text>
          }
        >
          <Text size="md" ml={10}>
            <Spoiler maxHeight={70} showLabel="Show more" hideLabel="Hide">
              Currently developing the frontend version 2.0 UI of the
              company&apos;s internal dashboard and client-facing website in
              React & NextJS with TypeScript.
              <br />
              Made major improvements and added new features to the
              company&apos;s dashboard to increase the company&apos;s revenue
              and efficiency.
              <br />
              Developed a Slack App integration with the Whatsapp Cloud API in
              Python, and whenever a client messages on Whatsapp, a notification
              is sent to the Slack channel. Brokers can even reply in the Slack
              thread, and the message is then automatically transmitted to the
              client using Whatsapp.
              <br />
              Created landing Pages for the website to increase reach and SEO of
              the website.
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
            }}
          >
            Simply Jet{" "}
            <Text
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            />
            Laussane, Switzerland
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={
            <Image
              src="/images/datapitcher-logo.jpeg"
              alt="DataPitcher"
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
                zIndex: 200,
              }}
            />
          }
          title={
            <Text size="lg" color="white" ml={10}>
              Full Stack Web Developer
            </Text>
          }
        >
          <Text size="md" ml={10}>
            <Spoiler maxHeight={70} showLabel="Show more" hideLabel="Hide">
              Worked as Backend and ReactJS developer Intern. <br />
              Developed a full-fledged Authentication System using NodeJS,
              ExpressJS, MongoDB, and JWT.
              <br />
              Integrated Send Grid API to send emails to clients on their first
              signup.
              <br />
              Implemented Razorpay Payment Gateway to accept payments from
              clients.
              <br />
              Developed Light Weight UI and Complex Animations using Tailwind
              CSS and Material UI.
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
            }}
          >
            DataPitcher{" "}
            <Text
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            />
            Toronto, Canada
          </Text>
        </Timeline.Item>
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
