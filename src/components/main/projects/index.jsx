import React from "react";

import Zoom from "react-reveal/Zoom";
import Tilt from "react-tilt";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Projects() {
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
        px: "15%",
        py:4
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
            Personal
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#fff",
              "@media (max-width: 550px)": { fontSize: "35px" },
            }}
          >
            Projects
          </Typography>
        </Stack>
      </Zoom>
      <Zoom>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "30px",
            width: "100%",
            "@media (max-width: 850px)": {
              gridTemplateColumns: "auto auto",
              "@media (max-width: 550px)": {
                gridTemplateColumns: "auto",
              },
            },
          }}
        >
          {skills.map((e) => (
            <Tilt
              className="Tilt"
              options={{ max: 6, scale: 1.05 }}
              style={{ height: "100%", width: "100%" }}
            >
              <Paper
                elevation={8}
                sx={{
                  pb: 2,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={e.img}
                  alt=""
                  style={{
                    height: "300px",
                    width: "100%",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "18px",
                    color: "#bbbbbb",
                    mt: 2,
                  }}
                >
                  {e.title}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    mt: 1,
                  }}
                >
                  <a  href={e.git} target={"_blank"}>
                  <Button variant="outlined" startIcon={<CodeOffIcon />}>
                    Code
                  </Button>
                  </a>
                  <a  href={e.live} target={"_blank"}>
                  <Button variant="contained" startIcon={<VisibilityIcon />}>
                    View
                  </Button>
                  </a>
                </Stack>
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
    img: require("../../../assets/img/chitchat.png"),
    title: "ChitChat",
    git:"https://github.com/DubeyMuskan/chitchat",
    live:""
  },
  {
    img: require("../../../assets/img/inotebook.png"),
    title: "iNotebook",
    git:"https://github.com/rohitsinghind/iNotebook",
    live:""
  },

];
