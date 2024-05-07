import { forwardRef } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const VNavButton = forwardRef(({ href, text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick}>
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          color: "#fff",
          textAlign: "center",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: "600",
        }}
      >
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  </a>
));

export default VNavButton;
