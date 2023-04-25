import { Box, Text, createStyles } from "@mantine/core";
import { useState } from "react";
import FullWidthBlog from "../components/blogs/FullWidthBlog";
import HalfWidthBlog from "../components/blogs/HalfWidthBlog";
import Layout from "../components/layout/Layout";
import blogData from "../data/blogData";
import IsMobileScreen from "../hooks/useIsMobileScreen";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#000",
    // boxShadow: theme.shadows.md,
    border: `0.5px solid #fff`,
  },

  active: {
    backgroundImage: theme.fn.gradient({
      from: "#F3EC78",
      to: "#EA7EEB",
      deg: 45,
    }),
  },

  control: {
    border: "0 !important",
  },

  labelActive: {
    color: `${theme.black} !important`,
    fontWeight: 600,
  },
}));

const Blogs = () => {
  const [blogsType, setBlogsType] = useState("all");
  const { classes } = useStyles();

  const isMobileScreen = IsMobileScreen();

  return (
    <Layout currentPage="Blogs">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Text size="xl" color="dimmed" mt={20}>
          My Blogs and Videos
        </Text>
      </Box>
      {blogData?.map((blog, index) => {
        if ((index + 1) % 3 === 1) {
          return <FullWidthBlog key={index} {...blog} />;
        }
        if ((index + 1) % 3 === 2) {
          return <HalfWidthBlog key={index} {...blog} position="left" />;
        }
        if ((index + 1) % 3 === 0) {
          return <HalfWidthBlog key={index} {...blog} position="right" />;
        }
      })}
      <Box mt={20} />
    </Layout>
  );
};

export default Blogs;
