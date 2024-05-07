import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import Zoom from "react-reveal/Zoom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_9f0ytoj",
        "template_0mezgwt",
        form.current,
        "J5vVlRkq6T73zPT15"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message Sent");
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          form.current.reset();
          alert("Message not Sent");
          setIsLoading(false);
        }
      );
  };

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
            Get in
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#fff",
              "@media (max-width: 550px)": { fontSize: "40px" },
            }}
          >
            Touch
          </Typography>
        </Stack>
      </Zoom>
      <Zoom>
        <Paper
          sx={{
            p: 4,
            borderRadius: "10px",
            width: "500px",
              "@media (max-width: 550px)": { width: '90vw' },
          }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              type="text"
              name="user_name"
              variant="outlined"
              fullWidth={true}
              required
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              name="user_email"
              variant="outlined"
              fullWidth={true}
              type="email"
              required
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Phone No."
              name="user_number"
              variant="outlined"
              fullWidth={true}
              type="number"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Message"
              name="message"
              variant="outlined"
              fullWidth={true}
              multiline
              rows={3}
              required
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ mt: 4, borderRadius: "30px" }}
              type="submit"
              value="Send"
              disabled={isLoading}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Zoom>
    </Container>
  );
}
