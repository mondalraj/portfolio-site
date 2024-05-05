import { ActionIcon, Box, Text, Tooltip } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconDownload,
  IconMail,
  IconPhone,
} from "@tabler/icons";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        gap: "2rem",
        padding: "4rem 0",

        "@media (max-width: 768px)": {
          flexDirection: "column-reverse",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1.5rem",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          Rajib Mondal
        </h1>
        <Text
          sx={{
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            color: "white",
          }}
        >
          Software Developer
          <Text
            sx={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "white",
              margin: "0 1rem",
            }}
          />
          Former SWE Intern&nbsp;
          <Text
            variant="gradient"
            gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
            ta="center"
            sx={{
              fontSize: "1.1rem",
            }}
            fw={600}
          >
            @Tally Solutions
          </Text>
          <Text
            sx={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "white",
              margin: "0 1rem",
            }}
          />
          Mentored 200+&nbsp;
          <Text
            variant="gradient"
            gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
            ta="center"
            sx={{
              fontSize: "1.1rem",
            }}
            fw={600}
          >
            MERN&nbsp;
          </Text>
          Aspirants
          <Text
            sx={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "white",
              margin: "0 1rem",
            }}
          />
          Data Science Enthusiast
        </Text>
        <Text size={"md"}>
          Greetings, I am a seasoned full-stack software developer with a
          proficiency in crafting robust and scalable end-to-end software
          solutions, backed by over 3 years of hands-on industry experience.
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
          <Tooltip label="Phone" withArrow>
            <a href="tel:+9958164563" target={"_blank"} rel="noreferrer">
              <ActionIcon
                size="lg"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.35rem",
                  cursor: "none",
                }}
              >
                <IconPhone size={26} />
              </ActionIcon>
            </a>
          </Tooltip>
          <Tooltip label="Gmail" withArrow>
            <a href="mailto:mondalrajib2002@gmail.com">
              <ActionIcon
                size="lg"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.35rem",
                  cursor: "none",
                }}
              >
                <IconMail size={26} />
              </ActionIcon>
            </a>
          </Tooltip>
          <Tooltip label="Github" withArrow>
            <a
              href="https://github.com/mondalraj"
              target={"_blank"}
              rel="noreferrer"
            >
              <ActionIcon
                size="lg"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.35rem",
                  cursor: "none",
                }}
              >
                <IconBrandGithub size={26} />
              </ActionIcon>
            </a>
          </Tooltip>
          <Tooltip label="Linkedin" withArrow>
            <a
              href="https://www.linkedin.com/in/mondalraj/"
              target={"_blank"}
              rel="noreferrer"
            >
              <ActionIcon
                size="lg"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.35rem",
                  cursor: "none",
                }}
              >
                <IconBrandLinkedin size={26} />
              </ActionIcon>
            </a>
          </Tooltip>
          <Tooltip label="Twitter" withArrow>
            <a
              href="https://twitter.com/_mondalraj"
              target={"_blank"}
              rel="noreferrer"
            >
              <ActionIcon
                size="lg"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.35rem",
                  cursor: "none",
                }}
              >
                <IconBrandTwitter size={26} />
              </ActionIcon>
            </a>
          </Tooltip>
          <Tooltip label="Hashnode" withArrow>
            <a
              href="https://rajibmondal.hashnode.dev/"
              target={"_blank"}
              rel="noreferrer"
            >
              <ActionIcon
                size="lg"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.35rem",
                  cursor: "none",
                }}
              >
                <Image
                  src="/images/hashnode-icon.png"
                  alt="Hashnode icon"
                  width={20}
                  height={20}
                  color="gray"
                />
              </ActionIcon>
            </a>
          </Tooltip>

          <Tooltip label="Download Resume" withArrow>
            <a
              href="https://drive.google.com/file/d/1FU3jo1o0XuFX-k4drttum9wz-61kq7Cu/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              <ActionIcon
                size="lg"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.35rem",
                  cursor: "none",
                }}
              >
                <IconDownload size={26} />
              </ActionIcon>
            </a>
          </Tooltip>
        </Box>
      </Box>
      <Box>
        <Image
          src="/images/rajib-profile-image.jpeg"
          alt="Picture of Rajib Mondal"
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            zIndex: 200,
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutSection;
