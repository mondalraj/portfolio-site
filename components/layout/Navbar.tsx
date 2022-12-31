import { Box, Button, Container, Text } from "@mantine/core";
import { IconHome } from "@tabler/icons";
import Link from "next/link";

const Navbar = ({ currentPage }: { currentPage: string }) => {
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
            padding: "1rem 0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <IconHome size={20} />{" "}
            {currentPage === "Home" ? (
              ""
            ) : (
              <>
                <Text span color={"dimmed"}>
                  /
                </Text>
                <Text
                  variant="gradient"
                  gradient={{ from: "white", to: "indigo", deg: 45 }}
                  ta="center"
                  fw={500}
                >
                  {currentPage}
                </Text>
              </>
            )}
          </Box>
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
              }}
              gradient={{ from: "blue", to: "violet" }}
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
              }}
              gradient={{ from: "blue", to: "violet" }}
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
              gradient={{ from: "blue", to: "violet" }}
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
              }}
              gradient={{ from: "blue", to: "violet" }}
            >
              Contact
            </Button>
          </Box>
        </nav>
      </Container>
    </Box>
  );
};

export default Navbar;
