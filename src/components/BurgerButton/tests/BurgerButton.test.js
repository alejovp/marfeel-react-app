import React from 'react';
import { BurgerButton } from '../BurgerButton';
import theme from '../../../../__mocks__/theme.json';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import { StyledBurgerButton } from '../StyledBurgerButton';
import { StyledBurgerDiv } from '../StyledBurgerDiv';


describe('<BurgerButton />', () => {

    describe('shape', () => {
        const renderedComponent = shallowWithTheme(<BurgerButton />, theme);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledBurgerButton component', () => {
            expect(renderedComponent.find(StyledBurgerButton)).toHaveLength(1);
        });

        it('will render 3 StyledBurgerDiv elems', () => {
            expect(renderedComponent.find(StyledBurgerDiv)).toHaveLength(3);
        });

    });

});
