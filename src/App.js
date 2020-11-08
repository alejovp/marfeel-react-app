import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles';
import { Header } from './components/Header';
import { useFetchTheme } from './hooks/useFetchTheme';


export const App = () => {
    const { isCalling, theme } = useFetchTheme();

    if (isCalling) {
        return 'loading...';
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <h1>Hello there!!</h1>
        </ThemeProvider>
    );
};
