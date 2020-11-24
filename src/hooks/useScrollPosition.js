import { useLayoutEffect } from 'react';

export const useScrollPosition  = (callback) => {

    useLayoutEffect(() => {
        const scrollHandler = () => {
            callback(window.scrollY);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

};
