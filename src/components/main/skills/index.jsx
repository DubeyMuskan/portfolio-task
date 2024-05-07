import React from "react";

import Zoom from "react-reveal/Zoom";
import Tilt from "react-tilt";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import skill1 from "../../../assets/img/skill1.svg";
import skill2 from "../../../assets/img/skill3.svg";
import skill3 from "../../../assets/img/skill5.svg";
import skill4 from "../../../assets/img/skill6.svg";
import skill5 from "../../../assets/img/skill7.svg";
import skill6 from "../../../assets/img/skill8.svg";
import skill7 from "../../../assets/img/skill9.svg";
import skill8 from "../../../assets/img/skill10.svg";

export default function Skills() {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        background: "#101010",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: "15%",
        "@media (max-width: 550px)": { px: "0%" },
      }}
    >
      <Zoom>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#84fff1",
              "@media (max-width: 550px)": { fontSize: "35px" },
            }}
          >
            Skills &
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#fff",
              "@media (max-width: 550px)": { fontSize: "35px" },
            }}
          >
            Abilities
          </Typography>
        </Stack>
      </Zoom>
      <Zoom>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto auto",
            gap: "10px",
            width: "100%",
            "@media (max-width: 1050px)": {
              gridTemplateColumns: "auto auto auto auto auto",
              "@media (max-width: 870px)": {
                gridTemplateColumns: "auto auto auto",
              },
              "@media (max-width: 550px)": {
                gridTemplateColumns: "auto auto auto",
              },
            },
          }}
        >
          {skills.map((e) => (
            <Tilt className="Tilt" options={{ max: 25, scale: 1 }}>
              <Paper
                elevation={8}
                sx={{
                  p: 2,
                  width: "150px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
                  height: "120px",
                  borderRadius: "20px",
                  "@media (max-width: 550px)": { width: "100px", py: 2, px: 1 },
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "50%",
                  }}
                  src={e.icon}
                />
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "18px",
                    color: "#bbbbbb",
                    mt: 2,
                    "@media (max-width: 550px)": { fontSize: "14px" },
                  }}
                >
                  {e.title}
                </Typography>
              </Paper>
            </Tilt>
          ))}
        </Box>
      </Zoom>
    </Container>
  );
}

const skills = [
  {
    icon: skill1,
    title: "ReactJS",
  },
  {
    icon: skill1,
    title: "React Native",
  },
  {
    icon: skill2,
    title: "NodeJS",
  },
  {
    icon: require("../../../assets/img/skill4.png"),
    title: "ExpressJS",
  },
  {
    icon: skill3,
    title: "MongoDB",
  },
  {
    icon: skill4,
    title: "Firebase",
  },
  {
    icon: skill5,
    title: "Redux",
  },
  {
    icon: skill7,
    title: "MaterialUI",
  },
  {
    icon: skill8,
    title: "Git & GitHub",
  },
  {
    icon: require("../../../assets/img/skill12.png"),
    title: "C/C++",
  },
];
