import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { StyledSection } from "./HeroSection";
import danny from "../assets/danny-circle.png";

export const Bio = () => {
  return (
    <StyledSection>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          top: 0,
          left: 0,
        }}
      >
        <Container maxWidth="sm" style={{ height: "100%" }}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="#fff"
          >
            <Typography
              variant="h4"
              align="center"
              color="secondary"
              gutterBottom
            >
              About Me
            </Typography>
            <Image src={danny} alt="Danny Fung" width={200} height={200} />
            <Box mt={4}>
              <Typography align="center" color="textSecondary" paragraph>
                I'm a web developer based in California, United States. I've
                worked with multiple organizations to create responsive user
                interfaces and web applications.
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                As an aspiring developer, I am always looking for opportunities
                where I can learn something new.
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                My ultimate goal is to build applications with streamlined
                systems and smooth user experience.
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
    </StyledSection>
  );
};
