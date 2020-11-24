import React from 'react';
import { BurgerButton } from '../BurgerButton';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';
import { StyledBurgerButton } from '../StyledBurgerButton';
import { StyledBurgerDiv } from '../StyledBurgerDiv';
import { StyledFloatingCircle } from '../StyledFloatingCircle';


describe('<BurgerButton />', () => {

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<BurgerButton />, theme);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledFloatingCircle component', () => {
            expect(renderedComponent.find(StyledFloatingCircle)).toHaveLength(1);
        });

        it('will render a StyledBurgerButton component', () => {
            expect(renderedComponent.find(StyledBurgerButton)).toHaveLength(1);
        });

        it('will render 3 StyledBurgerDiv elems', () => {
            expect(renderedComponent.find(StyledBurgerDiv)).toHaveLength(3);
        });

    });

    describe('props', () => {

        it('will invoke the onClick callback on click event', () => {
            const onClickMock = jest.fn();
            const renderedComponent = mountWithTheme(
                <BurgerButton onClick={onClickMock} />, theme);
            const button = renderedComponent.find(StyledBurgerButton);
            button.simulate('click');
            expect(onClickMock).toBeCalledTimes(1);
        });

    });

});
