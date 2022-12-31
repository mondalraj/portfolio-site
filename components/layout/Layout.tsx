import { Box, Container } from "@mantine/core";
import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import IsMobileScreen from "../../hooks/useIsMobileScreen";
import Footer from "./Footer";
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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[9],
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      })}
    >
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="movingBall" />
      {!IsMobileScreen() && (
        <motion.div className="cursor" variants={variants} animate="default" />
      )}
      <Navbar currentPage={currentPage} />
      <Container>{children}</Container>

      <Footer />
    </Box>
  );
};

export default Layout;
