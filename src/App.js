import React, { useState, createContext } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particlesConfig";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...{
      // palette values for dark mode
      primary: grey,
      divider: grey[100],
      background: {
        default: grey[900],
        paper: grey[900],
      },
      text: {
        primary: "#fff",
        secondary: grey[300],
      },
    },
  },
});

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [isColumn, setIsColumn] = useState(true);
  const LayoutContext = createContext();
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        height="100vh"
      />

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LayoutContext.Provider value={[isColumn, setIsColumn]}>
          <Header />
          <Main />
          <Footer />
        </LayoutContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
