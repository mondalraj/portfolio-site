import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { RouterTransition } from "../components/layout/RouterTransition";
import "../styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Rajib Mondal | Full Stack Developer</title>
        <meta
          name="description"
          content="Self Taught Full Stack Developer with 2+ years of experience | Web3 Enthusiast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
          fontFamily: "poppins, sans-serif",
          cursorType: "pointer",
          colors: {
            dark: [
              "#C1C2C5",
              "#A6A7AB",
              "#909296",
              "#5C5F66",
              "#373A40",
              "#2C2E33",
              "#25262B",
              "#1A1B1E",
              "#141517",
              "#0d0d0d",
            ],
          },
        }}
      >
        <RouterTransition />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
