import emailjs from "@emailjs/browser";
import { Box, Button, Input, Text, Textarea } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { Notify } from "notiflix";
import { useRef } from "react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o8kyvkr",
        "template_86htrws",
        form.current as HTMLFormElement,
        "user_Ne3ZYCjoIJybtjQLJDref"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notify.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          Notify.failure("Message not sent. Please try again.");
        }
      );
  };

  return (
    <Layout currentPage="Contact">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          margin: "4rem 0",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Text
            variant="gradient"
            gradient={{ from: "#F3EC78", to: "#EA7EEB", deg: 45 }}
            ta="center"
            size={32}
            mb={16}
            fw={600}
          >
            Send me a message!
          </Text>
          <Text color="white" size={24} align="center" mb={42}>
            Got a question or proposal, or just want to say hello? Go ahead.
          </Text>
          <form
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4rem",
                width: "100%",
                padding: "2rem 0",

                "@media (max-width: 768px)": {
                  flexDirection: "column",
                  gap: "2rem",
                },
              }}
            >
              <Input.Wrapper
                id="name"
                label="Your Name"
                // error="Please enter your name"
                size="md"
                sx={{
                  width: "100%",
                }}
              >
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  variant="unstyled"
                  size="md"
                  required
                  autoFocus
                  autoComplete="off"
                  sx={{
                    borderBottom: "2px solid gray",
                    transition: "all 0.3s ease",

                    "&:focus-within": {
                      borderImage: "linear-gradient(#f3ec78, #ea7eeb) 45",
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              </Input.Wrapper>
              <Input.Wrapper
                id="email"
                label="Your Email"
                // error="Please enter your name"
                size="md"
                sx={{
                  width: "100%",
                }}
              >
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type={"email"}
                  autoComplete="off"
                  required
                  variant="unstyled"
                  size="md"
                  sx={{
                    borderBottom: "2px solid gray",
                    transition: "all 0.3s ease",

                    "&:focus-within": {
                      borderImage: "linear-gradient(#f3ec78, #ea7eeb) 45",
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              </Input.Wrapper>
            </Box>
            <Input.Wrapper
              id="message"
              label="Your Message"
              // error="Please enter your name"
              size="md"
              sx={{
                width: "100%",
              }}
            >
              <Textarea
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this? Thanks.."
                variant="unstyled"
                id="message"
                name="message"
                autoComplete="off"
                size="md"
                sx={{
                  borderBottom: "2px solid gray",
                  transition: "all 0.3s ease",

                  "&:focus-within": {
                    borderImage: "linear-gradient(#f3ec78, #ea7eeb) 45",
                    transition: "all 0.3s ease",
                  },
                }}
                required
                autosize
                minRows={2}
              />
            </Input.Wrapper>
            <Button
              className="buttonSlide"
              type="submit"
              variant="outline"
              radius="xs"
              size="md"
              color={"pink"}
              sx={{
                margin: "3rem auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "none",
                overflow: "hidden",
                transition: "all 0.3s linear",

                "&:hover": {
                  color: "black",
                  transition: "all 0.3s linear",
                  zIndex: 1,
                },

                "@media (max-width: 768px)": {
                  margin: "2rem 0",
                },
              }}
              rightIcon={<IconChevronRight size={20} />}
            >
              Send Message
            </Button>
          </form>
        </Box>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.221104954798!2d77.28401191514506!3d28.653097589900586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc9ffec3533b%3A0x1622bbaffe359a24!2s57%2C%20New%20Layal%20Pur%20Colony%2C%20Krishna%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110051!5e0!3m2!1sen!2sin!4v1672570334457!5m2!1sen!2sin"
          style={{
            border: 0,
            width: "100%",
            height: "80vh",
            maxHeight: "500px",
            borderRadius: "0.5rem",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Layout>
  );
};

export default Contact;
