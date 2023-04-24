import { ActionIcon, Box, Container, Text, Tooltip } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChevronRight,
  IconDownload,
  IconMail,
  IconPhone,
} from "@tabler/icons";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontSize: "1.1rem",
          padding: "2.5rem 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
            paddingBottom: "2rem",
          }}
        >
          <Tooltip label="Phone" withArrow>
            <a href="tel:+9958164563" target={"_blank"} rel="noreferrer">
              <ActionIcon
                size="md"
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
                size="md"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.25rem",
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
                size="md"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.25rem",
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
                size="md"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.25rem",
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
                size="md"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.25rem",
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
                size="md"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.25rem",
                  cursor: "none",
                }}
              >
                <Image
                  src="/images/hashnode-icon.png"
                  alt="Hashnode icon"
                  width={16}
                  height={16}
                  color="gray"
                />
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
                size="md"
                color="gray"
                radius={100}
                variant="outline"
                sx={{
                  padding: "0.25rem",
                  cursor: "none",
                }}
              >
                <IconDownload size={26} />
              </ActionIcon>
            </a>
          </Tooltip>
        </Box>
        <Text
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          Made by{" "}
          <Text
            color={"blue"}
            fw={700}
            span
            sx={{
              display: "flex",
              alignItems: "center",
              zIndex: 10,
              "&:hover": {
                color: "white",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            component="a"
            href="https://www.linkedin.com/in/mondalraj/"
          >
            Rajib Mondal <IconChevronRight size={18} />
          </Text>
        </Text>
        <Text align="center">
          Copyright © github.com/mondalraj | 2023, All rights reserved
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
