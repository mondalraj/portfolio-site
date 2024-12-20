import { ActionIcon, Affix, Box, Tooltip, Transition } from "@mantine/core";
import Lenis from "@studio-freight/lenis";
import { IconX } from "@tabler/icons";
import axios from "axios";
import { motion, useScroll, useSpring } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { TbMessageCircle2 } from "react-icons/tb";
import IsMobileScreen from "../../hooks/useIsMobileScreen";
import Chatbox from "./Chatbox";
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
  const [chatboxOpened, setChatboxOpened] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1,
    });
    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const getIpInfo = async () => {
      const res = await axios.get("https://ipinfo.io/?token=5e056099665816");
      return res.data;
    };
    if (searchParams.get("source")) {
      getIpInfo().then((data) => {
        console.log(data);
        axios.post("/api/track-pagevisit", {
          source: searchParams.get("source"),
          city: data.city,
          country: data.country,
          loc: data.loc,
        });
      });
    }
  }, [searchParams]);

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
      <div className="movingBall-top" />
      <div className="movingBall-bottom" />
      {!IsMobileScreen() && (
        <motion.div className="cursor" variants={variants} animate="default" />
      )}
      <Navbar currentPage={currentPage} />

      {children}

      <FooterCTA />

      <Footer />

      <Affix position={{ bottom: 80, right: 20 }}>
        <Transition transition="slide-up" mounted={chatboxOpened}>
          {(transitionStyles) => (
            <Box
              style={{
                ...transitionStyles,
                position: "relative",
                height: "600px",
                width: "100vw",
                maxWidth: "370px",
                borderRadius: "12px",
                background: "#14162990",
                border: "0.5px solid rgba(130, 130, 130, 0.3)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <Chatbox />
            </Box>
          )}
        </Transition>
      </Affix>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Box>
          <Tooltip
            withArrow
            openDelay={1000}
            closeDelay={200}
            position="left"
            label={chatboxOpened ? "Close Chat" : "Chat with me!"}
          >
            <ActionIcon
              size={"xl"}
              radius="xl"
              color="pink"
              variant={chatboxOpened ? "outline" : "filled"}
              onClick={() => {
                setChatboxOpened(!chatboxOpened);
              }}
              sx={{
                cursor: "none",
              }}
              title="Chat with me!"
            >
              {chatboxOpened ? (
                <IconX size={24} />
              ) : (
                <TbMessageCircle2 size={24} />
              )}
            </ActionIcon>
          </Tooltip>
        </Box>
      </Affix>
    </Box>
  );
};

export default Layout;
