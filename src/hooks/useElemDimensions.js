import { useLayoutEffect, useRef, useState } from 'react';

export const useElemDimensions = () => {
    const elemRef = useRef();
    const [dimensions, setDimensions] = useState({});

    useLayoutEffect(() => {
        const { width, height } = elemRef.current.getBoundingClientRect();
        setDimensions({ width, height });
    }, [elemRef.current]);

    return [elemRef, dimensions];
};
