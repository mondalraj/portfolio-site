import {
  Box,
  Button,
  Container,
  Overlay,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "50px",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: "1.5rem",
    letterSpacing: "1px",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: "1.3rem",
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors.pink[5],
  },

  description: {
    color: "dimmed",
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    marginTop: theme.spacing.md,
    height: "2.5rem",
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function FooterCTA() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Build{" "}
          <Text component="span" inherit className={classes.highlight}>
            reliable
          </Text>{" "}
          software with{" "}
          <Text component="span" inherit className={classes.highlight}>
            any stack
          </Text>
        </Title>

        <Container size={640}>
          <Text size="md" mt={20} className={classes.description}>
            Have any project in mind? Let&apos;s talk about it and make it
            happen by scheduling a 30 minutes call with me.
          </Text>
        </Container>

        <Box className={classes.controls} mt={20}>
          <Button
            component="a"
            target="_blank"
            href="https://calendly.com/mondalraj/30min"
            variant="outline"
            leftIcon={<IconExternalLink size="0.9rem" />}
            className={classes.control}
            color="pink"
          >
            Schedule a Meeting
          </Button>
        </Box>
      </div>
    </div>
  );
}
