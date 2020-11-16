import React from 'react';
import { Logo } from '../Logo';
import theme from '../../../../__mocks__/theme.json';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import { StyledLogo } from '../StyledLogo';


describe('<Logo />', () => {

    describe('shape', () => {
        const renderedComponent = shallowWithTheme(<Logo />, theme);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledLogo component', () => {
            expect(renderedComponent.find(StyledLogo)).toHaveLength(1);
        });

        it('will render an img elem', () => {
            expect(renderedComponent.find('img')).toHaveLength(1);
        });

    });

});
