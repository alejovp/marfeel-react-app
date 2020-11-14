import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles';
import { useFetchTheme } from './hooks';
import { AppStore } from './contexts/AppStore';
import { Header } from './components/Header';
import { Main } from './components/Main';


export const App = () => {
    const { isCalling, theme } = useFetchTheme();

    if (isCalling) {
        return 'loading...';
    }

    return (
        <AppStore>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Main />
            </ThemeProvider>
        </AppStore>
    );
};
