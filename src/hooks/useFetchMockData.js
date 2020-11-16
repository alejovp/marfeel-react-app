import { useEffect, useState } from 'react';
import theme from '../../__mocks__/theme.json';
import articlesMock from '../../__mocks__/articles.json';


const dataMap = {
    theme,
    articles: articlesMock
};

export const useFetchMockData = (type) => {
    const [isCalling, setIsCalling] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchThemeMock = () => new Promise(
            resolve => setTimeout(
                () => resolve(dataMap[type]), 500)
        );

        fetchThemeMock()
            .then(data => {
                setData(data);
                setIsCalling(false);
            });
    }, []);

    return { isCalling, data };
};
