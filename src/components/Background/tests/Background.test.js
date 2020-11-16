import React from 'react';
import { Background } from '../Background';
import theme from '../../../../__mocks__/theme.json';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import { StyledBackground } from '../StyledBackGround';


describe('<Background />', () => {

    describe('shape', () => {
        const renderedComponent = shallowWithTheme(<Background />, theme);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledBackground component', () => {
            expect(renderedComponent.find(StyledBackground)).toHaveLength(1);
        });

    });

});
