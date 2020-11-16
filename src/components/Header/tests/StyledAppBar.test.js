import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledAppBar } from '../StyledAppBar';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledAppBar />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={theme}>
                    <StyledAppBar />
                </ThemeProvider>
            ).toJSON();
        });

        it('will be a flex box container relative positioned', () => {
            expect(renderedComponent).toHaveStyleRule('position', 'relative');
            expect(renderedComponent).toHaveStyleRule('display', 'flex');
            expect(renderedComponent).toHaveStyleRule('align-items', 'center');
            expect(renderedComponent).toHaveStyleRule('justify-content', 'center');
            expect(renderedComponent).toHaveStyleRule('width', '100%');
        });

        it('will receive a theme padding prop', () => {
            expect(renderedComponent).toHaveStyleRule('padding', `10px ${theme.header.padding}px`);
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledAppBar />, theme);

        it('will render a div elem', () => {
            expect(renderedComponent.find('div')).toHaveLength(1);
        });
    });

});
