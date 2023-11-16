import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor ] = useState('#03C9D7')
    const [currentMode, setCurrentMode ] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) =>{
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) =>{
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleOpen = (clicked) =>{
        setIsClicked({ ...initialState, [clicked]: true});
        console.log(clicked);
    }

    const handleClose = (clicked) =>{
        setIsClicked({ ...initialState, [clicked]: false});
        console.log(clicked);
    }

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize, handleClose, handleOpen, currentColor, setCurrentColor, setColor, currentMode, setCurrentMode, setMode, themeSettings, setThemeSettings}}>
            {children}
        </StateContext.Provider>

    )
}

export const useStateContext = () => useContext(StateContext);