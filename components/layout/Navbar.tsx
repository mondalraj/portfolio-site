import { Box, Burger, Button, Container, Text } from "@mantine/core";
import { IconHome } from "@tabler/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import IsMobileScreen from "../../hooks/useIsMobileScreen";

const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Box
      sx={(theme) => ({
        zIndex: 100,
        height: "4rem",
      })}
    >
      <Container size="xl">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: "1rem 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <IconHome size={24} />{" "}
            {currentPage === "Home" ? (
              ""
            ) : (
              <>
                <Text span color={"dimmed"}>
                  /
                </Text>
                <Text
                  variant="gradient"
                  gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                  ta="center"
                  sx={{
                    fontSize: "1.1rem",
                  }}
                  fw={600}
                >
                  {currentPage}
                </Text>
              </>
            )}
          </Box>
          {IsMobileScreen() ? (
            <>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
              />
              {opened && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    default: {
                      duration: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    },
                  }}
                  style={{
                    position: "absolute",
                    top: "3.5rem",
                    right: "1rem",
                    zIndex: 100,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",

                      backgroundColor: theme.colors.dark[9],
                      boxShadow: "0 0 5px 1px rgba(255, 255, 255, 0.1)",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                    })}
                  >
                    <Button
                      variant={currentPage === "Home" ? "gradient" : "subtle"}
                      color={"gray"}
                      component={Link}
                      href="/"
                      sx={{
                        cursor: "none",
                      }}
                      gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                    >
                      Home
                    </Button>
                    <Button
                      variant={
                        currentPage === "Projects" ? "gradient" : "subtle"
                      }
                      color={"gray"}
                      component={Link}
                      href="/projects"
                      sx={{
                        cursor: "none",
                      }}
                      gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                    >
                      Projects
                    </Button>
                    <Button
                      variant={currentPage === "Work" ? "gradient" : "subtle"}
                      color={"gray"}
                      component={Link}
                      href="/work"
                      sx={{
                        cursor: "none",
                      }}
                      gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                    >
                      Work
                    </Button>
                    {/* <Box>Blogs</Box> */}
                    <Button
                      variant={
                        currentPage === "Contact" ? "gradient" : "subtle"
                      }
                      color={"gray"}
                      component={Link}
                      href="/contact"
                      sx={{
                        cursor: "none",
                      }}
                      gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                    >
                      Contact
                    </Button>
                  </Box>
                </motion.div>
              )}
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Button
                variant={currentPage === "Home" ? "gradient" : "subtle"}
                color={"gray"}
                component={Link}
                href="/"
                sx={{
                  cursor: "none",
                  color: currentPage === "Home" ? "black" : "white.4",
                }}
                gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
              >
                Home
              </Button>
              <Button
                variant={currentPage === "Projects" ? "gradient" : "subtle"}
                color={"gray"}
                component={Link}
                href="/projects"
                sx={{
                  cursor: "none",
                  color: currentPage === "Projects" ? "black" : "white.4",
                }}
                gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
              >
                Projects
              </Button>
              <Button
                variant={currentPage === "Work" ? "gradient" : "subtle"}
                color={"gray"}
                component={Link}
                href="/work"
                sx={{
                  cursor: "none",
                  color: currentPage === "Work" ? "black" : "white.4",
                }}
                gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
              >
                Work
              </Button>
              {/* <Box>Blogs</Box> */}
              <Button
                variant={currentPage === "Contact" ? "gradient" : "subtle"}
                color={"gray"}
                component={Link}
                href="/contact"
                sx={{
                  cursor: "none",
                  color: currentPage === "Contact" ? "black" : "white.4",
                }}
                gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
              >
                Contact
              </Button>
            </Box>
          )}
        </nav>
      </Container>
    </Box>
  );
};

export default Navbar;
