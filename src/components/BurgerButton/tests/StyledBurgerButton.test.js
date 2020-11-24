import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledBurgerButton } from '../StyledBurgerButton';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';
import { BURGER_BUTTON_SIZE } from '../../../internals/constants';


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

        it('will be a styled button with these props', () => {
            expect(renderedComponent).toHaveStyleRule('display', 'flex');
            expect(renderedComponent).toHaveStyleRule('flex-direction', 'column');
            expect(renderedComponent).toHaveStyleRule('justify-content', 'space-around');
            expect(renderedComponent).toHaveStyleRule('background', 'transparent');
            expect(renderedComponent).toHaveStyleRule('width', `${BURGER_BUTTON_SIZE}px`);
            expect(renderedComponent).toHaveStyleRule('height', `${BURGER_BUTTON_SIZE}px`);
            expect(renderedComponent).toHaveStyleRule('border', 'none');
            expect(renderedComponent).toHaveStyleRule('padding', '0');
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledBurgerButton />, theme);

        it('will render a button elem', () => {
            expect(renderedComponent.find('button')).toHaveLength(1);
        });
    });

});
