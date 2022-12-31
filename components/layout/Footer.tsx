import { ActionIcon, Box, Container, Text, Tooltip } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChevronRight,
  IconDownload,
  IconMail,
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
            paddingBottom: "1rem",
          }}
        >
          <Tooltip label="Github" withArrow>
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
          </Tooltip>
          <Tooltip label="Linkedin" withArrow>
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
          </Tooltip>
          <Tooltip label="Twitter" withArrow>
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
          </Tooltip>
          <Tooltip label="Hashnode" withArrow>
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
          </Tooltip>
          <Tooltip label="Gmail" withArrow>
            <ActionIcon
              size="md"
              color="gray"
              radius={10}
              variant="outline"
              sx={{
                padding: "0.25rem",
                cursor: "none",
              }}
            >
              <IconMail size={26} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Download Resume" withArrow>
            <ActionIcon
              size="md"
              color="gray"
              radius={10}
              variant="outline"
              sx={{
                padding: "0.25rem",
                cursor: "none",
              }}
            >
              <IconDownload size={26} />
            </ActionIcon>
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
            }}
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
