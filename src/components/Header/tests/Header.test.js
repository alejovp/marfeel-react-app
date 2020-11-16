import React from 'react';
import { Header } from '../Header';
import theme from '../../../../__mocks__/theme.json';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import { StyledHeader } from '../StyledHeader';
import { Background } from '../../Background';
import { StyledAppNav } from '../StyledAppNav';
import { Logo } from '../../Logo/Logo';


describe('<Header />', () => {

    describe('shape', () => {
        const renderedComponent = shallowWithTheme(<Header />, theme);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledHeader component', () => {
            expect(renderedComponent.find(StyledHeader)).toHaveLength(1);
        });

        it('will render two Background components', () => {
            expect(renderedComponent.find(Background)).toHaveLength(2);
        });

        it('will render a StyledAppNav component', () => {
            expect(renderedComponent.find(StyledAppNav)).toHaveLength(1);
        });

        it('will render a StyledAppBar component', () => {
            expect(renderedComponent.find(StyledAppNav)).toHaveLength(1);
        });

        it('will render a Logo component', () => {
            expect(renderedComponent.find(Logo)).toHaveLength(1);
        });

    });

});
