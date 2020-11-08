import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledBackground } from '../StyledBackground';
import { themeMock } from '../../../../__mocks__/theme';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledBackground />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={themeMock}>
                    <StyledBackground />
                </ThemeProvider>
            ).toJSON();
        });

        it('will inherit height from its parent', () => {
            expect(renderedComponent).toHaveStyleRule('height', 'inherit');
            expect(renderedComponent).toHaveStyleRule('width', '100%');
        });

        it('will set the background-color with a color prop from theme', () => {
            expect(renderedComponent).toHaveStyleRule('background-color', themeMock.background.color);
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledBackground />, themeMock);

        it('will render a div elem', () => {
            expect(renderedComponent.find('div')).toHaveLength(1);
        });
    });

});
