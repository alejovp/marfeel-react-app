import React from 'react';
import PropTypes from 'prop-types';
import { StyledArticle } from './StyledArticle';
import { StyledArticleContent } from './StyledArticleContent';
import { StyledTitle } from './StyledTitle';
import { StyledArticleImg } from './SyledArticleImg';


export const Article = ({ img, title, description}) => {

    if (!title || !description) {
        return null;
    }

    const renderImage = () => {
        if (!img) {
            return null;
        }
        return <StyledArticleImg src={img} />;
    };

    return (
        <StyledArticle>
            {renderImage()}
            <StyledArticleContent>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <div>
                    <p>{description}</p>
                </div>
            </StyledArticleContent>
        </StyledArticle>
    );
};

Article.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};
