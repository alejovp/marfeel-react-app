import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledFloatingCircle } from '../StyledFloatingCircle';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledFloatingCircle />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={theme}>
                    <StyledFloatingCircle />
                </ThemeProvider>
            ).toJSON();
        });

        it('will be a styled div with these props', () => {
            expect(renderedComponent).toHaveStyleRule('position', 'absolute');
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledFloatingCircle />, theme);

        it('will render a div elem', () => {
            expect(renderedComponent.find('div')).toHaveLength(1);
        });
    });

});
