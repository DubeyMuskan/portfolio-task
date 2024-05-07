import React from "react";

import Zoom from "react-reveal/Zoom";
import Tilt from "react-tilt";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

export default function About() {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        background: "#212121",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Zoom>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#84fff1",
              "@media (max-width: 550px)": { fontSize: "40px" },
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#fff",
              "@media (max-width: 550px)": { fontSize: "40px" },
            }}
          >
            Me
          </Typography>
        </Stack>
      </Zoom>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "start",
          width: "70%",
          "@media (max-width: 1050px)": {
            flexDirection: "column",
            alignItems: "center",
            width: "90%",
          },
        }}
      >
        <Box>
          <Zoom>
            <Tilt
              className="Tilt"
              options={{ max: 20, scale: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Avatar
                sx={{
                  width: "200px",
                  height: "200px",
                  mr: 4,
                  "@media (max-width: 550px)": {
                    width: "150px",
                    height: "150px",
                    mb: 4,
                    mr: 0,
                  },
                }}
                src={require("../../../assets/img/photo.jpg")}
              />
            </Tilt>
          </Zoom>
        </Box>
        <Box>
          <Zoom>
            <Typography
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "33px",
                color: "#fff",
                fontWeight: 600,
                "@media (max-width: 550px)": { fontSize: "25px" },
              }}
            >
              I'm Muskan
            </Typography>
          </Zoom>
          <Zoom>
            <Typography
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "18px",
                color: "#e1e1e1",
                fontWeight: 600,
                my: 2,
                "@media (max-width: 550px)": { fontSize: "16px" },
              }}
            >
              Passionate Full Stack Web Developer
            </Typography>
          </Zoom>
          <Zoom>
            <Typography
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "18px",
                color: "#bbbbbb",
                "@media (max-width: 550px)": { fontSize: "14px" },
              }}
            >
              <ul>
                <li>
                  Build, tested, and managed code used by thousands of people.
                </li>
                <li>
                  Extensive experience in web, android, and ios app development.
                </li>
                <li>
                  Expertise in working in a fast-paced high-tech environment
                  with skills in planning scheduling quality management and team
                  development.
                </li>
              </ul>
            </Typography>
          </Zoom>
        </Box>
      </Box>
    </Container>
  );
}
