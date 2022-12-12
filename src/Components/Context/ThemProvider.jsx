import React, { createContext, useEffect, useState } from 'react';

export const ThemContext = createContext()
const ThemProvider = ({ children }) => {

    const [theme, setTheme] = useState(false)

    useEffect(() => {
        const rootElement = window.document.documentElement
        // console.log(rootElement);
        if (theme) {
            rootElement.classList.add('dark');
            rootElement.classList.remove('light')
        }
        else {
            rootElement.classList.add('light');
            rootElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(!theme)
    }

    return (
        <ThemContext.Provider value={{ toggleTheme, theme }} >
            {children}
        </ThemContext.Provider>
    );
};

export default ThemProvider;