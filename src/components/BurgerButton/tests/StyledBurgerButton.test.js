import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledBurgerButton } from '../StyledBurgerButton';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledBurgerButton />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={theme}>
                    <StyledBurgerButton />
                </ThemeProvider>
            ).toJSON();
        });

        it('will be a styled button absolute positioned', () => {
            expect(renderedComponent).toHaveStyleRule('position', 'absolute');
            expect(renderedComponent).toHaveStyleRule('display', 'flex');
            expect(renderedComponent).toHaveStyleRule('flex-direction', 'column');
            expect(renderedComponent).toHaveStyleRule('justify-content', 'space-around');
            expect(renderedComponent).toHaveStyleRule('background', 'transparent');
            expect(renderedComponent).toHaveStyleRule('width', '28px');
            expect(renderedComponent).toHaveStyleRule('height', '28px');
            expect(renderedComponent).toHaveStyleRule('border', 'none');
            expect(renderedComponent).toHaveStyleRule('padding', '0');
        });

        it('will be left positioned by theme prop', () => {
            expect(renderedComponent).toHaveStyleRule('left', `${theme.header.padding}px`);
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledBurgerButton />, theme);

        it('will render a button elem', () => {
            expect(renderedComponent.find('button')).toHaveLength(1);
        });
    });

});
