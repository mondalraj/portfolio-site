import { Box, Burger, Button, Container, Portal, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDownload, IconHome } from "@tabler/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import IsMobileScreen from "../../hooks/useIsMobileScreen";

const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const isMobile = useMediaQuery("(max-width: 824px)", true, {
    getInitialValueInEffect: false,
  });

  return (
    <Portal>
      <Box
        sx={{
          zIndex: 1000000,
          height: "4rem",
        }}
      >
        <Container
          size="xl"
          style={{
            position: "fixed",
            top: isMobile ? 15 : 20,
            left: isMobile ? 15 : 30,
            right: isMobile ? 15 : 30,
            padding: isMobile ? "0px 20px" : "0px 48px",
            borderRadius: "40px",
            zIndex: 4,
            background: "#14162970",
            border: "0.5px solid rgba(130, 130, 130, 0.3)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
              <Link href="/">
                <IconHome size={24} />
              </Link>
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
                      width: "50%",
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
                        component={Link}
                        href="/"
                        sx={{
                          cursor: "none",
                          color: currentPage === "Home" ? "black" : "gray",
                        }}
                        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                      >
                        Home
                      </Button>
                      <Button
                        variant={
                          currentPage === "Projects" ? "gradient" : "subtle"
                        }
                        component={Link}
                        href="/projects"
                        sx={{
                          cursor: "none",
                          color: currentPage === "Projects" ? "black" : "gray",
                        }}
                        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                      >
                        Projects
                      </Button>
                      <Button
                        variant={currentPage === "Work" ? "gradient" : "subtle"}
                        component={Link}
                        href="/work"
                        sx={{
                          cursor: "none",
                          color: currentPage === "Work" ? "black" : "gray",
                        }}
                        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                      >
                        Work
                      </Button>
                      <Button
                        variant={
                          currentPage === "Blogs" ? "gradient" : "subtle"
                        }
                        component={Link}
                        href="/blogs"
                        sx={{
                          cursor: "none",
                          color: currentPage === "Blogs" ? "black" : "gray",
                        }}
                        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                      >
                        Blogs
                      </Button>
                      <Button
                        variant={
                          currentPage === "Contact" ? "gradient" : "subtle"
                        }
                        component={Link}
                        href="/contact"
                        sx={{
                          cursor: "none",
                          color: currentPage === "Contact" ? "black" : "gray",
                        }}
                        gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
                      >
                        Contact
                      </Button>
                      <Button
                        component="a"
                        target="_blank"
                        href="https://drive.google.com/file/d/1pCX2iT5Bd_tM5vSNjEmddNLEsxqH-v5R/view?usp=sharing"
                        variant="light"
                        color="gray"
                        leftIcon={<IconDownload size={18} />}
                      >
                        Resume
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
                  variant={currentPage === "Home" ? "white" : "subtle"}
                  color="gray"
                  component={Link}
                  href="/"
                  sx={{
                    cursor: "none",
                    color: currentPage === "Home" ? "black" : "white.3",
                  }}
                >
                  Home
                </Button>
                <Button
                  variant={currentPage === "Projects" ? "white" : "subtle"}
                  color="gray"
                  component={Link}
                  href="/projects"
                  sx={{
                    cursor: "none",
                    color: currentPage === "Projects" ? "black" : "white.3",
                  }}
                >
                  Projects
                </Button>
                <Button
                  variant={currentPage === "Work" ? "white" : "subtle"}
                  color="gray"
                  component={Link}
                  href="/work"
                  sx={{
                    cursor: "none",
                    color: currentPage === "Work" ? "black" : "white.3",
                  }}
                >
                  Work
                </Button>
                <Button
                  variant={currentPage === "Blogs" ? "white" : "subtle"}
                  color="gray"
                  component={Link}
                  href="/blogs"
                  sx={{
                    cursor: "none",
                    color: currentPage === "Blogs" ? "black" : "white.3",
                  }}
                >
                  Blogs
                </Button>
                <Button
                  variant={currentPage === "Contact" ? "white" : "subtle"}
                  color="gray"
                  component={Link}
                  href="/contact"
                  sx={{
                    cursor: "none",
                    color: currentPage === "Contact" ? "black" : "white.3",
                  }}
                >
                  Contact
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  href="https://drive.google.com/file/d/1pCX2iT5Bd_tM5vSNjEmddNLEsxqH-v5R/view?usp=sharing"
                  variant="light"
                  color="gray"
                  leftIcon={<IconDownload size={18} />}
                >
                  Resume
                </Button>
              </Box>
            )}
          </nav>
        </Container>
      </Box>
    </Portal>
  );
};

export default Navbar;
