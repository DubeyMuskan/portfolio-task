import { forwardRef } from "react";
import Button from "@mui/material/Button";

const NavButton = forwardRef(({ href, text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick}>
    <Button
      sx={{
        color: "#fff",
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: "600",
        mr: 1.5,
      }}
    >
      {text}
    </Button>
  </a>
));

export default NavButton;
