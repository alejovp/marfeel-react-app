import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledBurgerDiv } from '../StyledBurgerDiv';
import { themeMock } from '../../../../__mocks__/theme';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledBurgerDiv />', () => {

    describe('styles', () => {

        it('will be a styled div relative positioned', () => {
            const renderedComponent = renderer.create(
                <StyledBurgerDiv />
            ).toJSON();
            expect(renderedComponent).toHaveStyleRule('position', 'relative');
            expect(renderedComponent).toHaveStyleRule('width', '28px');
            expect(renderedComponent).toHaveStyleRule('height', '4px');
            expect(renderedComponent).toHaveStyleRule('border-radius', '10px');
            expect(renderedComponent).toHaveStyleRule('transform-origin', '1px');
        });

        it('will set the background to default color if no theme prop is defined', () => {
            const renderedComponent = renderer.create(
                <StyledBurgerDiv />
            ).toJSON();
            expect(renderedComponent).toHaveStyleRule('background', 'black');
        });

        it('will set the background by theme prop if present', () => {
            const renderedComponent = renderer.create(
                <ThemeProvider theme={themeMock}>
                    <StyledBurgerDiv />
                </ThemeProvider>
            ).toJSON();
            expect(renderedComponent).toHaveStyleRule('background', themeMock.burgerButton.color);
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledBurgerDiv />, themeMock);

        it('will render a div elem', () => {
            expect(renderedComponent.find('div')).toHaveLength(1);
        });
    });

});
