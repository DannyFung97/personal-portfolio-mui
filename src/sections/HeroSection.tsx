import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledSection = styled("section")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  "& video": {
    objectFit: "cover",
  },
}));

const StyledOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const Hero = () => {
  return (
    <StyledSection>
      <StyledOverlay>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h2" component="h2" gutterBottom>
            Hi, I'm Danny Fung
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="primary.contrastText"
            paragraph
          >
            Web Developer
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                View my skills
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                View my projects
              </Button>
            </Grid>
          </Grid>
        </Box>
      </StyledOverlay>
    </StyledSection>
  );
};
