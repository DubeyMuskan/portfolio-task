import React from "react";

import Typed from "react-typed";
// import Zoom from "react-reveal/Zoom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        "@media (max-width: 700px)": {
          flexDirection: "column-reverse",
          justifyContent: "start",
          pt: 4,
        },
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          "@media (max-width: 700px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: "53px",
            color: "#84fff1",
          }}
        >
          Hi There,
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#84fff1",
            }}
          >
            I'm 
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#fff",
            }}
          >
            Muskan
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "33px",
            color: "#84fff1",
          }}
        >
          I Am Into
        </Typography>
        <Typed
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "#fff",
            fontSize: "25px",
          }}
          // typedRef={typedRef()}
          loop
          typeSpeed={50}
          backSpeed={20}
          strings={["Web Development", "App Development", "Open Source", "Freelancing"]}
          smartBackspace
          shuffle={false}
          backDelay={1}
          fadeOut={false}
          fadeOutDelay={100}
          loopCount={0}
          showCursor
          cursorChar="|"
        />
      </Box>

      <Box
        sx={{
          width: "40%",
          mr: "10%",
          "@media (max-width: 1000px)": {
            width: "50%",
            mr: "0%",
            "@media (max-width: 700px)": {
              width: "80%",
              mr: "0%",
            },
          },
        }}
      >
        {/* <img
          src={require("../../../assets/img/home.jpeg")}
          alt=""
          style={{ width: "100%", opacity: 0.7 }}
        /> */}
      </Box>
    </Container>
  );
}
