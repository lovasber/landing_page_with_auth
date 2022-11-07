import {createContext, useEffect, useState} from "react";
import {useMediaQuery} from "@mui/material";


const ModeContext = createContext();

export default ModeContext;

export const ModeProvider = ({children}) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    let theme
    localStorage.getItem("mode") ? theme = localStorage.getItem("mode") : theme = prefersDarkMode? 'dark' : 'light'

    const [mode, setMode] = useState(theme)

    const toggleModes = () => {
        if (mode === 'dark') {
            setMode('light')
            localStorage.setItem("mode", "light")
        }
        else {
            setMode('dark')
            localStorage.setItem("mode", "dark")
        }
    }

    useEffect(() => {
        setMode(theme)
    }, [theme])

    const contextData = {
        theme: mode,
        toggle: toggleModes
    }

    return <ModeContext.Provider value={contextData}>{children}</ModeContext.Provider>;
}