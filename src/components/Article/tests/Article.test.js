import React from 'react';
import { Article } from '../Article';
import theme from '../../../../__mocks__/theme.json';
import { shallowWithTheme } from '../../../../scripts/jest/setup';
import { StyledArticle } from '../StyledArticle';
import { StyledArticleImg } from '../SyledArticleImg';
import { StyledArticleContent } from '../StyledArticleContent';
import { StyledTitle } from '../StyledTitle';


const articleMock = {
    title: 'Test article',
    description: 'Test description...',
    img: 'test-img-url'
};

describe('<Article />', () => {

    describe('shape', () => {
        const { title, description, img } = articleMock;
        const renderedComponent = shallowWithTheme(
            <Article title={title}
                     description={description}
                     img={img} />,
            theme
        );

        it('will render correctly', () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it('will render a StyledArticle component', () => {
            expect(renderedComponent.find(StyledArticle)).toHaveLength(1);
        });

        it('will render a StyledArticleImg component', () => {
            expect(renderedComponent.find(StyledArticleImg)).toHaveLength(1);
        });

        it('will render a StyledArticleContent component', () => {
            expect(renderedComponent.find(StyledArticleContent)).toHaveLength(1);
        });

    });

    describe('props', () => {

        it('wont render if title prop is undefined', () => {
            const renderedComponent = shallowWithTheme(
                <Article description={articleMock.description}
                         img={articleMock.img} />,
                theme
            );
            expect(renderedComponent.type()).toBe(null);
        });

        it('wont render if description prop is undefined', () => {
            const renderedComponent = shallowWithTheme(
                <Article title={articleMock.title}
                         img={articleMock.img} />,
                theme
            );
            expect(renderedComponent.type()).toBe(null);
        });

        it('wont render StyledArticleImg if img prop is undefined', () => {
            const renderedComponent = shallowWithTheme(
                <Article title={articleMock.title}
                         description={articleMock.description} />,
                theme
            );
            expect(renderedComponent.find(StyledArticleImg)).toHaveLength(0);
        });

        const renderedComponent = shallowWithTheme(
            <Article title={articleMock.title}
                     description={articleMock.description}
                     img={articleMock.img} />,
            theme
        );

        it('will pass the img prop to the src attr of StyledArticleImg', () => {
            const styledImgComp = renderedComponent.find(StyledArticleImg);
            expect(styledImgComp.props().src).toBe(articleMock.img);
        });

        it('will pass the title prop as the StyledTitle children prop', () => {
            const styledTitle = renderedComponent.find(StyledTitle);
            expect(styledTitle.props().children).toBe(articleMock.title);
        });

        it('will render a <div> with the description prop as text for a <p> children', () => {
            const renderedDiv = renderedComponent.find('div');
            expect(renderedDiv).toHaveLength(1);
            const renderedP = renderedDiv.find('p');
            expect(renderedP.text()).toBe(articleMock.description);
        });

    });

});
