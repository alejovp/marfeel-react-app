import React from 'react';
import { Articles } from '../../components/Articles/Articles';
import { useFetchMockData } from '../../hooks';


export const HomePage = () => {

    const { isCalling, data } =  useFetchMockData('articles');

    if (isCalling) {
        return 'Loading articles...';
    }

    const articles = data && data.items;

    return <Articles articles={articles} />;
};
