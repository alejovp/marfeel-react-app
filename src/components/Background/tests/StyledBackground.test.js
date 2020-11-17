import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledBackground } from '../StyledBackground';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledBackground />', () => {

    describe('styles', () => {

        it('will inherit height from its parent', () => {
            const renderedComponent = renderer.create(
                <ThemeProvider theme={theme}>
                    <StyledBackground />
                </ThemeProvider>
            ).toJSON();
            expect(renderedComponent).toHaveStyleRule('height', 'inherit');
            expect(renderedComponent).toHaveStyleRule('width', '100%');
        });

        it('will set the background-color with a color prop from theme', () => {
            const renderedComponent = renderer.create(
                <ThemeProvider theme={theme}>
                    <StyledBackground />
                </ThemeProvider>
            ).toJSON();
            expect(renderedComponent).toHaveStyleRule('background-color', theme.background.color);
        });

        it('will set the background with a gradient prop from theme', () => {
            const testGradient = 'test-gradient-value';
            const renderedComponent = renderer.create(
                <ThemeProvider theme={{ background: { gradient: testGradient } }}>
                    <StyledBackground />
                </ThemeProvider>
            ).toJSON();
            expect(renderedComponent).toHaveStyleRule('background', testGradient);
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledBackground />, theme);

        it('will render a div elem', () => {
            expect(renderedComponent.find('div')).toHaveLength(1);
        });
    });

});
