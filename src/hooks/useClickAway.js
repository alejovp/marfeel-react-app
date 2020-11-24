import { useLayoutEffect } from 'react';

export const useClickAway = (ref, handler) => {

    useLayoutEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        ref && window.addEventListener('mousedown', listener);
        return () => ref && window.removeEventListener('mousedown', listener);
    }, [ref, handler]);

};
