import React from 'react';
import 'jest-styled-components';
import { configure, mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from 'styled-components';

configure({ adapter: new EnzymeAdapter() });

export function mountWithTheme(child, theme) {
    return mount(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        )
    });
}

export function shallowWithTheme(child, theme) {
    return shallow(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        )
    });
}
