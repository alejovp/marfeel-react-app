import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles';
import { useFetchMockData } from './hooks';
import { AppStore } from './contexts/AppStore';
import { Header } from './components/Header';
import { Main } from './containers/Main';
import { SideNav } from './containers/SideNav';


export const App = () => {
    const { isCalling, data } = useFetchMockData('theme');

    if (isCalling) {
        return 'loading...';
    }

    return (
        <AppStore>
            <ThemeProvider theme={data}>
                <GlobalStyles />
                <Header />
                <Main />
                <SideNav />
            </ThemeProvider>
        </AppStore>
    );
};
