import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledAppNav } from '../StyledAppNav';
import { themeMock } from '../../../../__mocks__/theme';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledAppNav />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={themeMock}>
                    <StyledAppNav />
                </ThemeProvider>
            ).toJSON();
        });

        it('will be a flex box column container relative positioned', () => {
            expect(renderedComponent).toHaveStyleRule('position', 'relative');
            expect(renderedComponent).toHaveStyleRule('display', 'flex');
            expect(renderedComponent).toHaveStyleRule('align-items', 'center');
            expect(renderedComponent).toHaveStyleRule('justify-content', 'center');
            expect(renderedComponent).toHaveStyleRule('width', '100%');
            expect(renderedComponent).toHaveStyleRule('flex-direction', 'column');
        });

    });

    describe('shape', () => {
        const renderedComponent = mountWithTheme(<StyledAppNav />, themeMock);

        it('will render a nav elem', () => {
            expect(renderedComponent.find('nav')).toHaveLength(1);
        });
    });

});
