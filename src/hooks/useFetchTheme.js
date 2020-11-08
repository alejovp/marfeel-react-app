import { useEffect, useState } from 'react';
import { themeMock } from '../../__mocks__/theme';

export const useFetchTheme = () => {
    const [isCalling, setIsCalling] = useState(true);
    const [theme, setTheme] = useState({});

    useEffect(() => {
        const fetchThemeMock = () => new Promise(
            resolve => setTimeout(
                () => resolve(themeMock), 500)
        );

        fetchThemeMock()
            .then(theme => {
                setTheme(theme);
                setIsCalling(false);
            });
    }, []);

    return { isCalling, theme };
};
