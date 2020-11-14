import React from 'react';
import renderer from 'react-test-renderer';
import { css, ThemeProvider } from 'styled-components';
import { StyledSectionMenu } from '../StyledSectionMenu';
import { themeMock } from '../../../../__mocks__/theme';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledSectionMenu />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={themeMock}>
                    <StyledSectionMenu />
                </ThemeProvider>
            ).toJSON();
        });

        it('will be a flex box ul container with overflow scroll', () => {
            expect(renderedComponent).toHaveStyleRule('width', '100%');
            expect(renderedComponent).toHaveStyleRule('align-items', 'center');
            expect(renderedComponent).toHaveStyleRule('justify-content', 'flex-start');
            expect(renderedComponent).toHaveStyleRule('display', 'flex');
            expect(renderedComponent).toHaveStyleRule('overflow-x', 'scroll');
            expect(renderedComponent).toHaveStyleRule('white-space', 'nowrap');
            expect(renderedComponent).toHaveStyleRule('display', 'none', {
                modifier: css`::-webkit-scrollbar`,
            });
        });

        it('will set padding from a theme prop', () => {
            expect(renderedComponent).toHaveStyleRule('padding', `0 ${themeMock.header.padding}px`);
        });

        it('will set the font size from a theme prop', () => {
            expect(renderedComponent).toHaveStyleRule('font-size', `${themeMock.sectionMenu.textSize}em`);
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledSectionMenu />, themeMock);

        it('will render an ul elem', () => {
            expect(renderedComponent.find('ul')).toHaveLength(1);
        });
    });

});
