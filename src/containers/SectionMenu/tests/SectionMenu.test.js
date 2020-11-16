import React from 'react';
import { SectionMenu } from '../SectionMenu';
import theme from '../../../../__mocks__/theme.json';
import { mountWithTheme } from '../../../../scripts/jest/setup';
import { StyledSectionMenu } from '../StyledSectionMenu';
import { sectionsMock } from '../../../../__mocks__/sections';
import { SectionTab } from '../../../components/SectionTab';
import { DispatchContext, StateContext } from '../../../contexts/AppStore';
import { SET_SECTION_MENU_HEIGHT } from '../../../contexts/constants';

const mockHeight = 68;
jest.mock('../../../hooks', () => ({
    useElemDimensions: jest.fn().mockImplementation(() => ([
        jest.fn(),
        {
            height: mockHeight
        }
    ]))
}));

describe('<SectionMenu />', () => {

    describe('shape', () => {
        const renderedComponent = mountWithTheme(
            <DispatchContext.Provider value={jest.fn()}>
                <StateContext.Provider value={{}}>
                    <SectionMenu sections={sectionsMock} />
                </StateContext.Provider>
            </DispatchContext.Provider>, theme);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledSectionMenu component', () => {
            expect(renderedComponent.find(StyledSectionMenu)).toHaveLength(1);
        });

        it('will render as many SectionTab as items in sections prop', () => {
            expect(renderedComponent.find(SectionTab)).toHaveLength(10);
        });

    });

    describe('props', () => {
        const mockDispatch = jest.fn();

        it('will dispatch an action on component mount with SectionMenu height', () => {
            const renderedComponent = mountWithTheme(
                <DispatchContext.Provider value={mockDispatch}>
                    <StateContext.Provider value={{}}>
                        <SectionMenu sections={sectionsMock} />
                    </StateContext.Provider>
                </DispatchContext.Provider>, theme);
            renderedComponent.update();
            expect(mockDispatch).toBeCalledWith({ type: SET_SECTION_MENU_HEIGHT, payload: mockHeight });
        });

    });

});
