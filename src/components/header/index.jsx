import React, { useState, cloneElement, createRef, useContext } from "react";
import ScrollSpy from "react-scrollspy-navigation";

import NavButton from "./button";
import VNavButton from "./vbutton";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "primary" : "transparent",
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <EmojiEmotionsIcon fontSize="large" sx={{ color: "#84fff1", my: 1 }} />
      <Divider />
      <List>
        <ScrollSpy>
          {navItems.map((item) => (
            <VNavButton
              key={item}
              href={`#${item}`}
              text={item}
              ref={createRef()}
            />
          ))}
        </ScrollSpy>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar>
            <Box sx={{ display: { sm: "block" }, mr: 4 }}>
              <EmojiEmotionsIcon fontSize="large" sx={{ color: "#84fff1" }} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <ScrollSpy>
                  {navItems.map((item) => (
                    <NavButton
                      key={item}
                      href={`#${item}`}
                      text={item}
                      ref={createRef()}
                    />
                  ))}
                </ScrollSpy>
              </Box>
            </Box>
            <Box sx={{ display: { sm: "block" } }}>
              <a href="mailto: muskandubeyece@gmail.com" target={"_blank"}>
                <IconButton sx={{ color: "#fff" }}>
                  <MailIcon />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-dubey-a7109024a/"
                target={"_blank"}
              >
                <IconButton sx={{ color: "#fff" }}>
                  <LinkedInIcon />
                </IconButton>
              </a>
              <a href="https://github.com/DubeyMuskan" target={"_blank"}>
                <IconButton sx={{ color: "#fff" }}>
                  <GitHubIcon />
                </IconButton>
              </a>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: "none" } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
