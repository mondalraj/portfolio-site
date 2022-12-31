import { Box, Container, ScrollArea } from "@mantine/core";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";

const Layout = ({
  children,
  currentPage,
}: {
  children: ReactNode;
  currentPage: string;
}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[9],
        height: "100vh",
        width: "100%",
        position: "relative",
      })}
    >
      <div className="movingBall" />
      <motion.div className="cursor" variants={variants} animate="default" />

      <Navbar currentPage={currentPage} />
      <ScrollArea
        style={{ height: "calc(100% - 4.5rem)" }}
        type="scroll"
        scrollbarSize={4}
        scrollHideDelay={500}
      >
        <Container>{children}</Container>
      </ScrollArea>
    </Box>
  );
};

export default Layout;
