import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          background: "#101010",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "190px",
            "@media (max-width: 820px)": { width: "35px" },
          }}
        >
          <EmojiEmotionsIcon fontSize="large" sx={{ color: "#84fff1" }} />
        </Box>
        <Typography
          sx={{
            "@media (max-width: 550px)": {
              fontSize: "12px",
              fontFamily: "'Open Sans', sans-serif",
            },
          }}
        >
          Copyright &copy; 2023 Muskan.
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "190px",
            "@media (max-width: 700px)": { width: "140px" },
          }}
        >
          <a href="mailto: muskandubeyece@gmail.com" target={"_blank"}>
            <IconButton sx={{ color: "#fff", border: "1px solid", mr: 1 }}>
              <MailIcon
                sx={{
                  "@media (max-width: 700px)": {
                    height: "10px",
                    width: "10px",
                  },
                }}
              />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-dubey-a7109024a/"
            target={"_blank"}
          >
            <IconButton sx={{ color: "#fff", border: "1px solid", mr: 1 }}>
              <LinkedInIcon
                sx={{
                  "@media (max-width: 700px)": {
                    height: "10px",
                    width: "10px",
                  },
                }}
              />
            </IconButton>
          </a>
          <a href="https://github.com/DubeyMuskan" target={"_blank"}>
            <IconButton sx={{ color: "#fff", border: "1px solid", mr: 1 }}>
              <GitHubIcon
                sx={{
                  "@media (max-width: 700px)": {
                    height: "10px",
                    width: "10px",
                  },
                }}
              />
            </IconButton>
          </a>
         
        </Box>
      </Container>
    </>
  );
}
