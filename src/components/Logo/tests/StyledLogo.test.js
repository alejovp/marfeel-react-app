import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { StyledLogo } from '../StyledLogo';
import { themeMock } from '../../../../__mocks__/theme';
import { mountWithTheme } from '../../../../scripts/jest/setup';


describe('<StyledLogo />', () => {

    describe('styles', () => {

        let renderedComponent;

        beforeEach(() => {
            renderedComponent = renderer.create(
                <ThemeProvider theme={themeMock}>
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
        const renderedComponent = mountWithTheme(<StyledLogo />, themeMock);

        it('will render an a elem', () => {
            expect(renderedComponent.find('a')).toHaveLength(1);
        });
    });

});
