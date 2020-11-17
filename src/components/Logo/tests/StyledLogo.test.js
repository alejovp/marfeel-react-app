import React from 'react';
import renderer from 'react-test-renderer';
import { css, ThemeProvider } from 'styled-components';
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

        it('will set the <img> height prop with the theme logo size value', () => {
            expect(renderedComponent).toHaveStyleRule('height', `${theme.logo.size}px`, {
                modifier: css`img`
            });
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledLogo />, theme);

        it('will render an <a> elem', () => {
            expect(renderedComponent.find('a')).toHaveLength(1);
        });
    });

});
