import { Box, Container, Grid, Typography } from "@mui/material";
import { StyledSection } from "./HeroSection";

import imagegallery from "../assets/projects/image-gallery.png";
import chatApp from "../assets/projects/chat-app.png";
import tasklistM from "../assets/projects/task-list.png";
import tasklistS from "../assets/projects/eth-task-list.png";
import minesweeper from "../assets/projects/minesweeper-won.png";
import breakout from "../assets/projects/breakout.png";
import hotTopics from "../assets/projects/hot-topics.png";
import portfolio0 from "../assets/projects/portfolio0.png";

import currentsea from "../assets/projects/currentsea.png";
import squareone from "../assets/projects/squareone.png";
import thano5 from "../assets/projects/thano5.png";
import nearmons from "../assets/projects/near-mons.png";

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
import { Project } from "@/components/Project";

const personalProjects = [
  {
    name: "HotTopics",
    img: hotTopics,
    info: "A social media clone app built using React, Redux, and Firebase.",
    liveUrl: "https://hot-tops.firebaseapp.com/",
    codeUrl: "https://github.com/DannyFung97/social-media-app-client",
    stack: [react, redux, firebase, mui],
  },
  {
    name: "Chat App",
    img: chatApp,
    info: "A public chat app with authentication and login functionality built using Firebase.",
    liveUrl: "https://eager-mestorf-cb3f2a.netlify.app/",
    codeUrl: "https://github.com/DannyFung97/chat-app",
    stack: [react, firebase],
  },
  {
    name: "Image Gallery",
    img: imagegallery,
    info: "An image gallery made from scratch using the Gatsby framework. Images are my own and are stored on the Cloudinary account.",
    liveUrl: "https://dannygallery.netlify.app/",
    codeUrl: "https://github.com/DannyFung97/image-gallery-project",
    stack: [gatsby, bulma, netlify],
  },
  {
    name: "Portfolio 0",
    img: portfolio0,
    info: "A stylistic iteration of my portfolio that is now archived.",
    liveUrl: "https://cocky-jackson-870852.netlify.app/",
    codeUrl: "https://github.com/DannyFung97/personal-portfolio-0",
    stack: [react, bulma, netlify],
  },
  {
    name: "Randomized Breakout",
    img: breakout,
    info: "A game project built based on the Breakout arcade game.",
    liveUrl: "https://dannyfung97.github.io/randomized-breakout/",
    codeUrl: "https://github.com/DannyFung97/randomized-breakout",
    stack: [react, redux],
  },
  {
    name: "Minesweeper",
    img: minesweeper,
    info: "A game created using TypeScript and SASS on the React framework.",
    liveUrl: "https://condescending-mayer-d3975f.netlify.app/",
    codeUrl: "https://github.com/DannyFung97/minesweeper-ts",
    stack: [ts, sass, netlify],
  },
  {
    name: "Task List w/ MongoDB",
    img: tasklistM,
    info: "A web app that stores user-created tasks and allows check offs.",
    liveUrl: "https://github.com/DannyFung97/task-list-react-project",
    codeUrl: "https://github.com/DannyFung97/task-list-react-project",
    stack: [react, redux, node, mongo, bootstrap],
  },
  {
    name: "Task List w/ Solidity",
    img: tasklistS,
    info: "An app that stores user-created tasks on the Ethereum blockchain.",
    liveUrl: "https://github.com/DannyFung97/eth-react-task-manager",
    codeUrl: "https://github.com/DannyFung97/eth-react-task-manager",
    stack: [react, redux, sol, truffle, ganache, web3],
  },
  {
    name: "NEAR mons",
    img: nearmons,
    info: "A smart contract made for the NEAR blockchain that produces digital creature collectibles. Users can create new creatures by fusing two parent creatures into a child creature, inheriting their skills and attributes.",
    liveUrl: null,
    codeUrl: "https://github.com/DannyFung97/near-mons",
    stack: [as],
  },
];

const groupProjects = [
  {
    name: "CurrentSea",
    img: currentsea,
    info: "A web app that keeps track of a user's budget, records their financial transactions, and displays exchange rates for different 33 world currencies.",
    liveUrl: null,
    codeUrl: "https://github.com/izzafkhan/currentSea",
    stack: [react, node, express, sql],
  },
  {
    name: "SquareOne",
    img: squareone,
    info: "A web app in which users pick a map of any sport and edit player positions, draw strategic paths, and save created plays based on the map.",
    liveUrl: null,
    codeUrl: "https://github.com/DannyFung97/SquareOne",
    stack: [jquery, heroku],
  },
  {
    name: "Thano5 Web Components",
    img: thano5,
    info: "A library of custom web components directed at front-end development. Thoroughly tested and documented to maintain integrity over time.",
    liveUrl: null,
    codeUrl: "https://github.com/ucsd-cse112-sp19/thanO5",
    stack: [js, html, css],
  },
];

export const Projects = () => {
  return (
    <StyledSection>
      <Container maxWidth="xl">
        <Box flexDirection={"column"} display="flex" justifyContent={"center"}>
          <Typography
            variant="h4"
            align="center"
            color="secondary"
            gutterBottom
          >
            Projects
          </Typography>
          <Box sx={{ backgroundColor: "secondary.main" }} my={10}>
            <Typography
              variant="subtitle1"
              align="center"
              color="secondary.contrastText"
            >
              Personal Projects
            </Typography>
          </Box>
          <ProjectList projects={personalProjects} />
          <Box sx={{ backgroundColor: "secondary.main" }} my={10}>
            <Typography
              variant="subtitle1"
              align="center"
              color="secondary.contrastText"
            >
              Group Projects
            </Typography>
          </Box>
          <ProjectList projects={groupProjects} />
        </Box>
      </Container>
    </StyledSection>
  );
};

const ProjectList = ({ projects }: { projects: any[] }) => {
  return (
    <Grid container spacing={5} justifyContent="center">
      {projects.map((project, i) => (
        <Grid item key={i}>
          <Project project={project} />
        </Grid>
      ))}
    </Grid>
  );
};
