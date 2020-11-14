import React from 'react';
import { SectionTab } from '../SectionTab';
import { themeMock } from '../../../../__mocks__/theme';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import { sectionsMock } from '../../../../__mocks__/sections';
import { StyledSectionTab } from '../StyledSectionTab';


describe('<SectionTab />', () => {

    describe('shape', () => {
        const renderedComponent = shallowWithTheme(
            <SectionTab section={sectionsMock[1]}
                        onClick={jest.fn()} />, themeMock);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledSectionTab component', () => {
            expect(renderedComponent.find(StyledSectionTab)).toHaveLength(1);
        });

        it('will render an anchor elem', () => {
            expect(renderedComponent.find('a')).toHaveLength(1);
        });

    });

    describe('props', () => {

        it('wont render anything if section prop have no id or text', () => {
            const renderedComponent = shallowWithTheme(
                <SectionTab section={{ text: '' }}
                            onClick={jest.fn()} />, themeMock);
            expect(renderedComponent.type()).toBe(null);
        });

        it('will trigger the onClick callback with the section id', () => {
            const onClickMock = jest.fn();
            const renderedComponent = shallowWithTheme(
                <SectionTab section={sectionsMock[1]}
                            onClick={onClickMock}
                            currentSection={sectionsMock[2].id} />, themeMock);
            renderedComponent.simulate('click');
            expect(onClickMock).toBeCalledWith(sectionsMock[1].id);
        });

    });

});
