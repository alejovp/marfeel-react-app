import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledHeader } from '../StyledHeader';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledHeader />', () => {

    describe('styles', () => {

        it('will be top fixed ', () => {
            const renderedComponent = renderer.create(
                <ThemeProvider theme={theme}>
                    <StyledHeader />
                </ThemeProvider>
            ).toJSON();
            expect(renderedComponent).toHaveStyleRule('position', 'fixed');
            expect(renderedComponent).toHaveStyleRule('top', '0');
            expect(renderedComponent).toHaveStyleRule('width', '100%');
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledHeader />, theme);

        it('will render a header elem', () => {
            expect(renderedComponent.find('header')).toHaveLength(1);
        });
    });

});
