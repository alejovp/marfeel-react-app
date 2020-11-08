import React from 'react';
import { Background } from '../Background';
import { themeMock } from '../../../../__mocks__/theme';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import { StyledBackground } from '../StyledBackGround';


describe('<Background />', () => {

    describe('shape', () => {
        const renderedComponent = shallowWithTheme(<Background />, themeMock);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledBackground component', () => {
            expect(renderedComponent.find(StyledBackground)).toHaveLength(1);
        });

    });

});
