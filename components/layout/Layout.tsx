import {
  ActionIcon,
  Affix,
  Box,
  Container,
  Tooltip,
  Transition,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconChevronUp } from "@tabler/icons";
import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import IsMobileScreen from "../../hooks/useIsMobileScreen";
import Footer from "./Footer";
import { FooterCTA } from "./FooterCTA";
import Navbar from "./Navbar";

const Layout = ({
  children,
  currentPage,
}: {
  children: ReactNode;
  currentPage: string;
}) => {
  const [scroll, scrollTo] = useWindowScroll();
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

      <FooterCTA />

      <Footer />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Tooltip
              withArrow
              openDelay={500}
              closeDelay={200}
              label="Scroll to top"
            >
              <ActionIcon
                size={"xl"}
                radius="xl"
                color="pink"
                variant="filled"
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
                sx={{
                  cursor: "none",
                }}
                title="Scroll to top"
              >
                <IconChevronUp size={20} />
              </ActionIcon>
            </Tooltip>
          )}
        </Transition>
      </Affix>
    </Box>
  );
};

export default Layout;
