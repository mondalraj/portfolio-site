import {
  ActionIcon,
  Box,
  Container,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

const AboutSection = () => {
  const isMobile = useMediaQuery("(max-width: 824px)", true, {
    getInitialValueInEffect: false,
  });
  return (
    <Box>
      <Box
        style={{
          position: "relative",
        }}
      >
        <Image
          src={
            isMobile
              ? "images/cover-image-mobile.png"
              : "images/cover-image.png"
          }
          alt="Cover Image"
        />
        <Container>
          <Image
            src="/images/rajib-profile-image.jpeg"
            alt="Rajib Mondal"
            width={isMobile ? 140 : 250}
            height={isMobile ? 140 : 250}
            radius={200}
            style={{
              position: "absolute",
              bottom: isMobile ? "-30%" : "-20%",
            }}
          />
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            gap: "2rem",
            padding: "4rem 0",
            marginTop: isMobile ? "1rem" : "3rem",

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
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <h1
                style={{
                  color: "white",
                  width: "100%",
                }}
              >
                Rajib Mondal
              </h1>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
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
              </Box>
            </Box>
            <Text
              sx={{
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                color: "white",
              }}
            >
              Software Engineer (Full Stack)&nbsp;
              <Text
                variant="gradient"
                gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                ta="center"
                sx={{
                  fontSize: "1.1rem",
                }}
                fw={600}
              >
                @Simply Jet
              </Text>
              <Text
                sx={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  margin: "0 0.7rem",
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
                  margin: "0 0.7rem",
                }}
              />
              React.js, Next.js, Typescript, SQL, MongoDB, Node.js, Nest.js,
              Docker, CI/CD, Generative AI
            </Text>
            <Text size={"md"} mt={10} color="dimmed">
              Experienced Full Stack Developer with over 3 years of experience
              working in fast-paced startups. Specialized in frontend
              technologies like React.js and Next.js, and proficient in backend
              development with Node.js. Strong analytical skills, good grasp of
              data structures and algorithms, and a passion for delivering
              innovative web solutions.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
