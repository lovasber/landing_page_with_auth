import './App.css';
import React from 'react';
import {Button, createTheme, Drawer, ThemeProvider} from "@mui/material";
import {blue, deepPurple, grey} from "@mui/material/colors";
import {useContext} from "react";
import ModeContext from "./context/ModeContext";
import {enUS} from "@mui/material/locale";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MainCarousel from "./components/Carousel";

function App() {
    const {theme: mode} = useContext(ModeContext);
    const theme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: blue,
                    divider: blue[200],
                    background: {
                        default: grey[200],
                        paper: grey[200],
                    },
                    text: {
                        primary: grey[900],
                        secondary: grey[800],
                    },
                }
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#AEB6BE',
                    },
                    divider: '#0A1929',
                    background: {
                        default: '#0A1929',
                        paper: '#0A1929',
                    },
                    text: {
                        primary: '#AEB6BE',
                        secondary: grey[500],
                    },
                }),
        }, typography: {
            fontFamily: "'Roboto Mono', monospace",
        }
    }, enUS)

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar/>
            <MainCarousel/>
            <Button>Download Link</Button>
        </ThemeProvider>
    </div>
  );
}

export default App;
