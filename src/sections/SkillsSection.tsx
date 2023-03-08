import { Box, Container, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";
import { StyledSection } from "./HeroSection";

import js from "../assets/skills/languages/js-logo.png";
import ts from "../assets/skills/languages/ts-logo.png";
import html from "../assets/skills/languages/html-logo.png";
import css from "../assets/skills/languages/css-logo.png";
import sass from "../assets/skills/languages/sass-logo.png";
import sol from "../assets/skills/languages/solidity-logo.png";
import py from "../assets/skills/languages/py-logo.png";
import sql from "../assets/skills/languages/sql-logo.png";
import csharp from "../assets/skills/languages/csharp-logo.png";
import c from "../assets/skills/languages/c-logo.png";
import java from "../assets/skills/languages/java-logo.png";
import cpp from "../assets/skills/languages/cpp-logo.png";
import as from "../assets/skills/languages/as-logo.png";

import node from "../assets/skills/frameworks/node-logo.png";
import express from "../assets/skills/frameworks/express-logo.png";
import react from "../assets/skills/frameworks/react-logo.png";
import redux from "../assets/skills/frameworks/redux-logo.png";
import gatsby from "../assets/skills/frameworks/gatsby-logo.png";
import jest from "../assets/skills/frameworks/jest-logo.png";
import jquery from "../assets/skills/frameworks/jquery-logo.png";
import bootstrap from "../assets/skills/frameworks/bootstrap-logo.png";
import bulma from "../assets/skills/frameworks/bulma-logo.png";
import mui from "../assets/skills/frameworks/mui-logo.png";
import truffle from "../assets/skills/frameworks/truffle-logo.png";
import web3 from "../assets/skills/frameworks/web3-logo.png";

import git from "../assets/skills/devTools/git-logo.png";
import npm from "../assets/skills/devTools/npm-logo.png";
import vscode from "../assets/skills/devTools/vscode-logo.png";
import mongo from "../assets/skills/devTools/mongo-logo.png";
import mysql from "../assets/skills/devTools/mysql-logo.png";
import docker from "../assets/skills/devTools/docker-logo.png";
import ganache from "../assets/skills/devTools/ganache-logo.png";
import postman from "../assets/skills/devTools/postman-logo.png";
import heroku from "../assets/skills/devTools/heroku-logo.png";
import netlify from "../assets/skills/devTools/netlify-logo.png";
import firebase from "../assets/skills/devTools/firebase-logo.png";
import gcp from "../assets/skills/devTools/gcp-logo.png";
import infura from "../assets/skills/devTools/infura-logo.png";

import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import GridViewIcon from "@mui/icons-material/GridView";
import ConstructionIcon from "@mui/icons-material/Construction";

const frontendLanguages = [
  [
    { logo: js, name: "JavaScript", focus: true },
    { logo: css, name: "CSS", focus: true },
    { logo: html, name: "HTML", focus: true },
  ],
  [
    { logo: ts, name: "TypeScript", focus: false },
    { logo: sass, name: "SASS", focus: false },
  ],
];

const frontendFrameworks = [
  [
    { logo: react, name: "React", focus: true },
    { logo: redux, name: "Redux", focus: true },
    { logo: gatsby, name: "Gatsby", focus: false },
    { logo: jquery, name: "jQuery" },
  ],
  [
    { logo: bootstrap, name: "Bootstrap", focus: true },
    { logo: bulma, name: "Bulma", focus: true },
    { logo: mui, name: "Material-UI", focus: false },
    // { logo: jest, name: "Jest" },
  ],
];

const backendLanguages = [
  [
    { logo: sql, name: "SQL", focus: true },
    { logo: py, name: "Python", focus: false },
    { logo: java, name: "Java", focus: false },
  ],
  [
    { logo: as, name: "AssemblyScript", focus: true },
    { logo: csharp, name: "C#", focus: true },
    { logo: c, name: "C++", focus: false },
  ],
];

const backendTools = [
  [
    { logo: node, name: "Node.js", focus: true },
    { logo: express, name: "Express", focus: true },
    { logo: mongo, name: "MongoDB", focus: false },
  ],
  [
    { logo: firebase, name: "Firebase", focus: false },
    { logo: gcp, name: "Google Cloud Platform", focus: false },
    // { logo: mysql, name: "MySQL Workbench" },
  ],
];

const blockchain = [
  [
    { logo: sol, name: "Solidity", focus: true },
    { logo: ganache, name: "Ganache", focus: true },
    { logo: truffle, name: "Truffle", focus: true },
  ],
  [
    { logo: web3, name: "Web3", focus: true },
    { logo: infura, name: "Infura", focus: false },
  ],
];

const devTools = [
  [
    // { logo: git, name: "Git" },
    // { logo: npm, name: "npm" },
    { logo: postman, name: "Postman", focus: true },
    { logo: netlify, name: "Netlify", focus: true },
    // ],
    // [
    { logo: heroku, name: "Heroku", focus: false },
    { logo: docker, name: "Docker", focus: false },
    // { logo: vscode, name: "Visual Studio Code" },
  ],
];

export const Skills = () => {
  return (
    <StyledSection>
      <Container maxWidth={false} style={{ minHeight: "100%" }}>
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
            Skills
          </Typography>
          <Grid container spacing={2}>
            <SkillColumn
              name="Front End"
              arrays={[frontendFrameworks, frontendLanguages]}
              icon={<ComputerIcon color="primary" fontSize="medium" />}
              subsecs={["Frameworks", "Languages"]}
            />
            <SkillColumn
              name="Back End"
              arrays={[backendTools, backendLanguages]}
              icon={<StorageIcon color="primary" fontSize="medium" />}
              subsecs={["Tools", "Languages"]}
            />
            <SkillColumn
              name="Development"
              arrays={[devTools]}
              icon={<ConstructionIcon color="primary" fontSize="medium" />}
            />
            <SkillColumn
              name="Blockchain"
              arrays={[blockchain]}
              icon={<GridViewIcon color="primary" fontSize="medium" />}
            />
          </Grid>
        </Box>
      </Container>
    </StyledSection>
  );
};

const SkillColumn = ({
  name,
  arrays,
  subsecs,
  icon,
}: {
  name: string;
  arrays: { logo: StaticImageData; name: string; focus?: boolean }[][][];
  subsecs?: string[];
  icon: any;
}) => {
  return (
    <Grid item md={12} lg={3}>
      <Box display="flex" justifyContent={"center"} gap={2} alignItems="center">
        {icon}
        <Typography variant="h5" align="center" color="primary">
          {name}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        {arrays.map((array, i) => (
          <Fragment key={i}>
            <Box sx={{ backgroundColor: "secondary.main" }} my={2}>
              <Typography
                variant="subtitle1"
                align="center"
                color="secondary.contrastText"
              >
                {subsecs ? subsecs[i] : " "}
              </Typography>
            </Box>
            {array.map((arraySec, j) => (
              <Box
                flexDirection="row"
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                margin={3}
                key={j}
              >
                {arraySec.map((arrayItem, k) => (
                  <Box display="block" margin={3} position={"relative"} key={k}>
                    <Image src={arrayItem.logo} alt={arrayItem.name} />
                    <Typography
                      variant="body2"
                      align="center"
                      color="textSecondary"
                      paragraph
                      position={"absolute"}
                      left={0}
                      right={0}
                      justifyContent={"center"}
                      display={"flex"}
                    >
                      {arrayItem.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Fragment>
        ))}
      </Box>
    </Grid>
  );
};
