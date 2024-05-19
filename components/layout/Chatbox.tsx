import {
  ActionIcon,
  Box,
  Indicator,
  Loader,
  ScrollArea,
  Text,
  TextInput,
} from "@mantine/core";
import { IconMail, IconPhone, IconSend } from "@tabler/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Chatbox = () => {
  const [convHistory, setConvHistory] = useState<string[]>([
    "Hi, I'm Rajib! Sorry I mean his AI clone 😅. Whatever he knows, I knows. Ask me anything!",
  ]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (bottomRef.current) {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [convHistory]);

  const handleSendMessage = (message: string) => {
    setIsTyping(true);

    setConvHistory((prev) => [...prev, message]);

    setMessage("");

    fetch("/api/ask-question/chatbot", {
      method: "PATCH",
      body: JSON.stringify({
        question: message,
        // convHistory: formatConvHistory(
        //   convHistory?.filter((_, index) => index !== 0) || []
        // ),
      }),
    })
      .then((res) => res.json())
      .then((data: { status: string }) => {
        setIsTyping(false);
        setConvHistory((prev) => [
          ...prev,
          data?.status || "I'm sorry, I don't understand that yet.",
        ]);
      });
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: "0",
          right: "0",
          left: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "0.5px solid rgba(130, 130, 130, 0.3)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Indicator
            dot
            inline
            offset={7}
            position="bottom-end"
            processing
            size={8}
            color="green"
          >
            <Image
              src="/images/rajib-profile-image.jpeg"
              alt="Rajib Mondal"
              width={50}
              height={50}
              style={{
                borderRadius: "50%",
              }}
            />
          </Indicator>
          <Box>
            <Text size="md" tt="uppercase" fw={500}>
              Rajib Mondal
            </Text>
            <Text size="xs" color="dimmed">
              Software Developer
            </Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <ActionIcon radius="xl" component="a" href="tel:+919958164563">
            <IconPhone color="gray" stroke={1.2} />
          </ActionIcon>
          <ActionIcon
            radius="xl"
            component="a"
            href="mailto:mondalrajib2002@gmail.com"
          >
            <IconMail color="gray" stroke={1.2} />
          </ActionIcon>
        </Box>
      </Box>
      <ScrollArea sx={{ height: `calc(100% - 140px)` }} type="never">
        {convHistory.map((conv, index) => {
          if (index % 2 == 0) {
            return (
              <Text
                size="sm"
                sx={{
                  padding: "10px",
                  margin: "10px",
                  width: "85%",
                  background: "white",
                  color: "black",
                  borderRadius: "30px 30px 30px 0",
                }}
                key={index}
              >
                {conv}
              </Text>
            );
          } else {
            return (
              <Text
                size="sm"
                sx={{
                  padding: "10px",
                  margin: "10px",
                  marginLeft: "auto",
                  width: "85%",
                  background: "#A51E4C",
                  color: "white",
                  borderRadius: "30px 30px 0px 30px",
                }}
                key={index}
              >
                {conv}
              </Text>
            );
          }
        })}
        {isTyping && (
          <Text
            sx={{
              padding: "10px 30px",
              margin: "10px",
              width: "85%",
              background: "white",
              color: "black",
              borderRadius: "30px 30px 30px 0",
            }}
          >
            <Loader color="pink" size="sm" variant="dots" />
          </Text>
        )}

        <div ref={bottomRef} />
      </ScrollArea>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 10px",
          borderTop: "0.5px solid rgba(130, 130, 130, 0.3)",
        }}
      >
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();

            handleSendMessage(message);
          }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "4px",
          }}
        >
          <TextInput
            placeholder="Write a message here..."
            variant="unstyled"
            autoFocus
            data-autofocus
            sx={{
              width: "100%",
            }}
            size="md"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
          <ActionIcon
            type="submit"
            disabled={!message}
            radius="xl"
            size={"xl"}
            variant="gradient"
            loading={isTyping}
          >
            <IconSend stroke={1.4} size={24} />
          </ActionIcon>
        </form>
      </Box>
    </div>
  );
};

export default Chatbox;
