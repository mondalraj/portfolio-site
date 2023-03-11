import { Box, Image, Text } from "@mantine/core";
import IsMobileScreen from "../../hooks/useIsMobileScreen";

interface IProps {
  title: string;
  date: string;
  tag: string;
  thumbnail: string;
  url: string;
  description: string;
  position?: string;
}

const HalfWidthBlog = ({
  title,
  date,
  tag,
  thumbnail,
  url,
  description,
  position,
}: IProps) => {
  const isMobileScreen = IsMobileScreen();
  return (
    <Box
      sx={{
        width: "50%",
        display: "inline-block",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1rem",
          marginTop: "1rem",

          backgroundColor: "rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0)",

          padding: "1rem",
          borderRadius: "0.5rem",
          marginRight: position === "left" ? "0.5rem" : "0",
          marginLeft: position === "right" ? "0.5rem" : "0",

          // hover
          "&:hover": {
            backgroundColor: "rgba(19, 20, 40, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.2s ease-in-out",
          },
        }}
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            height={isMobileScreen ? 150 : 250}
            radius={"sm"}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <Text size="sm" color="#EA7EEB" fw={600}>
              {tag?.toUpperCase()}
            </Text>
            <span
              style={{
                display: "inline-block",
                height: "0.35rem",
                width: "0.35rem",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
            <Text size="sm" color="dimmed">
              {date}
            </Text>
          </Box>
          <Text size="xl" color="white" fw={500} my={10}>
            {title}
          </Text>
          <Text size="md" color="dimmed" mt={20}>
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HalfWidthBlog;
