import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Article } from '../../components/Article';
import { StyledArticles } from './StyledArticles';
import { Divider } from '../Divider/Divider';


export const Articles = ({ articles = [] }) => {

    const renderArticles = () => articles.map(article => (
        <Fragment key={article.id}>
            <Article img={article.img}
                     title={article.title}
                     description={article.description} />
            <Divider />
        </Fragment>
    ));

    return (
        <StyledArticles>
            {renderArticles()}
        </StyledArticles>
    );
};

Articles.propTypes = {
    articles: PropTypes.array
};
