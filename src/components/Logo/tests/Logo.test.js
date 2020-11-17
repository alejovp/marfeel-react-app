import React from 'react';
import { Logo } from '../Logo';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';
import { StyledLogo } from '../StyledLogo';


describe('<Logo />', () => {

    const renderedComponent = mountWithTheme(<Logo />, theme);

    describe('shape', () => {

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a <StyledLogo> component', () => {
            expect(renderedComponent.find(StyledLogo)).toHaveLength(1);
        });

        it('will render an <img> elem', () => {
            expect(renderedComponent.find('img')).toHaveLength(1);
        });

    });

    describe('props', () => {

        it('will set the <img> src prop with the theme logo image value', () => {
            expect(renderedComponent.find('img').props().src).toBe(theme.logo.image);
        });

    });

});
