import React from 'react';
import { Articles } from '../Articles';
import theme from '../../../../__mocks__/theme.json';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import articlesMock from '../../../../__mocks__/articles.json';
import { StyledArticles } from '../StyledArticles';
import { Article } from '../../Article/Article';


describe('<Articles />', () => {

    describe('shape', () => {
        const renderedComponent = shallowWithTheme(
            <Articles articles={articlesMock.items} />, theme);

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledArticles component', () => {
            expect(renderedComponent.find(StyledArticles)).toHaveLength(1);
        });

        it('will render as many Article comps as items in articlesMock', () => {
            expect(renderedComponent.find(Article)).toHaveLength(articlesMock.items.length);
        });

    });

});
