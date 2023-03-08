import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { StyledSection } from "./HeroSection";

import aeec from "../assets/workplaces/aeec-logo.png";
import sdsc from "../assets/workplaces/sdsc-logo.png";
import ledgersafe from "../assets/workplaces/ledgersafe-logo.png";
import btg from "../assets/workplaces/btg-logo.png";
import solace from "../assets/workplaces/solace-2-logo.svg";

// import resume from "../assets/DannyFungResume.pdf";

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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Experience = () => {
  return (
    <StyledSection>
      <Container maxWidth={false}>
        <Box justifyContent={"center"} flexDirection="column" display="flex">
          <Typography
            variant="h4"
            align="center"
            color="secondary"
            gutterBottom
          >
            Experience
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              flexDirection="column"
              justifyContent={"center"}
              gap={2}
              display="flex"
            >
              <Box justifyContent={"center"} flexDirection="row" display="flex">
                <Image width={132} src={solace} alt={"Solace"} />
              </Box>
              <Typography variant="h5" align="center" color="textPrimary">
                Solace
              </Typography>
              <Typography variant="body2" align="center" color="textPrimary">
                Frontend Developer
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                March 2021 - Present
              </Typography>
              <Box
                justifyContent={"center"}
                flexDirection="row"
                display="flex"
                gap={1}
              >
                <Image alt={"React"} src={react} />
              </Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="textSecondary">Learn More</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Developed the foundation of the web interface for Solace
                    that interacts with deployed smart contracts on the Ethereum
                    blockchain.
                  </Typography>
                  <Typography>
                    Shipped quality code and ensured careful version control
                    using Github.
                  </Typography>
                  <Typography>
                    Refactored and constantly optimized functionality to improve
                    user experience.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              flexDirection="column"
              justifyContent={"center"}
              gap={2}
              display="flex"
            >
              <Box justifyContent={"center"} flexDirection="row" display="flex">
                <Image
                  width={132}
                  src={sdsc}
                  alt={"San Diego Supercomputer Center"}
                />
              </Box>
              <Typography variant="h5" align="center" color="textPrimary">
                San Diego Supercomputer Center
              </Typography>
              <Typography variant="body2" align="center" color="textPrimary">
                Research Associate
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                Jul 2019 - Sep 2020
              </Typography>
              <Box
                justifyContent={"center"}
                flexDirection="row"
                display="flex"
                gap={1}
              >
                <Image alt="React" src={react} />
                <Image alt="Node" src={node} />
                <Image alt="Express" src={express} />
                <Image alt="Bootstrap" src={bootstrap} />
                <Image alt="Solidity" src={sol} />
                <Image alt="ganache" src={ganache} />
                <Image alt="truffle" src={truffle} />
                <Image alt="web3" src={web3} />
              </Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="textSecondary">Learn More</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Developed a blockchain-based web application prototype using
                    React, node.js, and Solidity, that tracks claims filed by
                    healthcare providers and services provided to patients.
                  </Typography>
                  <Typography>
                    Integrated tracking functionality of 4 Ethereum smart
                    contracts, documented technical designs and frameworks, and
                    implemented back-end layers on node.js and Solidity.
                  </Typography>
                  <Typography>
                    Tested compatibility of conventional web tools with current
                    blockchain infrastructure and existing distributed systems.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              flexDirection="column"
              justifyContent={"center"}
              gap={2}
              display="flex"
            >
              <Box justifyContent={"center"} flexDirection="row" display="flex">
                <Image width={132} src={aeec} alt={"AEEC"} />
              </Box>
              <Typography variant="h5" align="center" color="textPrimary">
                AEEC
              </Typography>
              <Typography variant="body2" align="center" color="textPrimary">
                Software Engineer
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                Jun 2020 - Sep 2020
              </Typography>
              <Box
                justifyContent={"center"}
                flexDirection="row"
                display="flex"
                gap={1}
              >
                <Image alt="Python" src={py} />
                <Image alt="Google Cloud Platform" src={gcp} />
                <Image alt="Node" src={node} />
              </Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="textSecondary">Learn More</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Collaborated on the user interface design for data science
                    notebooks and databases from business clients.
                  </Typography>
                  <Typography>
                    Trained on using cloud technology, including Azure and GCP,
                    to help progress projects forward and earned certificates
                    for completing relevant courses.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              flexDirection="column"
              justifyContent={"center"}
              gap={2}
              display="flex"
            >
              <Box justifyContent={"center"} flexDirection="row" display="flex">
                <Image width={132} src={ledgersafe} alt={"LedgerSafe"} />
              </Box>
              <Typography variant="h5" align="center" color="textPrimary">
                LedgerSafe
              </Typography>
              <Typography variant="body2" align="center" color="textPrimary">
                Front-end Developer Intern
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                May 2019 - Sep 2019
              </Typography>
              <Box
                justifyContent={"center"}
                flexDirection="row"
                display="flex"
                gap={1}
              >
                <Image alt={"React"} src={react} />
                <Image alt={"Node"} src={node} />
                <Image alt={"Express"} src={express} />
                <Image alt={"Bootstrap"} src={bootstrap} />
              </Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="textSecondary">Learn More</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Collaborated on a React web application designed to lower
                    friction between high risk businesses and financial
                    institutions through establishing trust using distributed
                    ledger technology.
                  </Typography>
                  <Typography>
                    Studied application of Hyperledger Fabric, a permissioned
                    blockchain infrastructure, and role of compliance frameworks
                    in distributed systems.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              flexDirection="column"
              justifyContent={"center"}
              gap={2}
              display="flex"
            >
              <Box justifyContent={"center"} flexDirection="row" display="flex">
                <Image
                  width={132}
                  src={btg}
                  alt={"Blockchain Technology Group"}
                />
              </Box>
              <Typography variant="h5" align="center" color="textPrimary">
                Blockchain Technology Group
              </Typography>
              <Typography variant="body2" align="center" color="textPrimary">
                Software Engineering Intern
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                Oct 2018 - Dec 2018
              </Typography>
              <Box
                justifyContent={"center"}
                flexDirection="row"
                display="flex"
                gap={1}
              >
                <Image alt={"React"} src={react} />
              </Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="textSecondary">Learn More</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Designed a React user interface of a cryptocurrency wallet
                    to track balance of Florincoin tokens and transaction
                    histories.
                  </Typography>
                  <Typography>
                    Studied Open Index Protocol technology, the core intricacies
                    of blockchain, and its economic principles.
                  </Typography>
                  <Typography>
                    Wrote final paper surrounding the current proof of concept
                    and practice of distributed ledger technology.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledSection>
  );
};
