import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledLogo } from '../StyledLogo';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledLogo />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={theme}>
                    <StyledLogo />
                </ThemeProvider>
            ).toJSON();
        });

        it('will be an styled anchor', () => {
            expect(renderedComponent).toHaveStyleRule('position', 'relative');
            expect(renderedComponent).toHaveStyleRule('cursor', 'pointer');
            expect(renderedComponent).toHaveStyleRule('text-decoration', 'none');
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledLogo />, theme);

        it('will render an a elem', () => {
            expect(renderedComponent.find('a')).toHaveLength(1);
        });
    });

});
