import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from './Icons';
import "./ThemeIcon.scss";

const ICON_THEME = {
    light: 'light',
    dark: 'dark'
}

const THEME_TRESHOLD = 20;

const getInitialTheme = dateTime => {
    const hours = dateTime.getHours();
    return hours <= THEME_TRESHOLD ? ICON_THEME.light : ICON_THEME.dark;
}

const handleThemeSwitch = (currentTheme, setTheme) => {
    if (currentTheme === ICON_THEME.light) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        setTheme(ICON_THEME.dark);
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme'); 
        setTheme(ICON_THEME.light);
    } 
};

const ThemeIcon = () => {
    const [currentTheme, setTheme] = useState(undefined);

    useEffect(() => {
        handleThemeSwitch(getInitialTheme(new Date()), setTheme);
    }, []);

    return (
        <button
            title={`Switch to ${currentTheme === ICON_THEME.light ? ICON_THEME.dark : ICON_THEME.light} theme`}
            className="theme-button"
            onClick={() => handleThemeSwitch(currentTheme, setTheme)}    
        >
            {currentTheme === ICON_THEME.light
                ? <MoonIcon/>
                : <SunIcon/>
            }
        </button>
    );
};

export default ThemeIcon;