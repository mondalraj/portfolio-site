import { ActionIcon, Box, Text, Tooltip } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconDownload,
  IconMail,
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
        <h1>Rajib Mondal</h1>
        <Text
          sx={{
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            color: "white",
          }}
        >
          Software Developer&nbsp;
          <Text
            variant="gradient"
            gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
            ta="center"
            sx={{
              fontSize: "1.1rem",
            }}
            fw={600}
          >
            @SimplyJet
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
          Full Stack Web Developer
          <Text
            sx={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "white",
              margin: "0 1rem",
            }}
          />
          Mentored 100+ students&nbsp;
          <Text
            variant="gradient"
            gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
            ta="center"
            sx={{
              fontSize: "1.1rem",
            }}
            fw={600}
          >
            @10xAcademy
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
          Web3 Application Developer
        </Text>
        <Text size={"lg"}>
          I&apos;m a Full Stack Web Developer and have expertise with different
          technologies{" "}
          <Text
            fw={700}
            variant="gradient"
            gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
            // ta="center"
          >
            (React, TypeScript, Next.js, Node.js, Express.js, PostgreSQL,
            Python).
          </Text>
          Currently scratching my head on Web3 and Blockchain. Also practicing
          problem solving with Data Structures and Algorithms.
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
              href="https://twitter.com/raj_mondal2002"
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
          <Tooltip label="Gmail" withArrow>
            <a href="mailto:mondalrajib2002@gmail.com">
              <ActionIcon
                size="lg"
                color="gray"
                radius={10}
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
          <Tooltip label="Download Resume" withArrow>
            <a
              href="https://drive.google.com/file/d/1rksFf-O-Q1CDk_tSOzSQYf7fG0invQwQ/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              <ActionIcon
                size="lg"
                color="gray"
                radius={10}
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
