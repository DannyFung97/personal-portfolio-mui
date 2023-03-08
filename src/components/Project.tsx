import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

export const Project = ({ project }: { project: any }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="300"
          src={project.img.src}
          image={project.img.src}
          alt={project.name}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "primary.main",
            color: "white",
            padding: "10px",
            opacity: 0.8,
          }}
        >
          <Typography variant="h5">{project.name}</Typography>
        </Box>
      </Box>
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={"center"}
          mb={2}
          gap={2}
        >
          {project.stack.map((tech: any, i: number) => (
            <Image src={tech} alt={""} height="20" />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {project.info}
        </Typography>
      </CardContent>
      <CardActions>
        <a target="_blank" href={project.liveUrl}>
          <Button size="small">View App</Button>
        </a>
        <a target="_blank" href={project.codeUrl}>
          <Button size="small">View Code</Button>
        </a>
      </CardActions>
    </Card>
  );
};
