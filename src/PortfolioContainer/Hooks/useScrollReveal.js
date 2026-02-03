import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is in the viewport using IntersectionObserver.
 * @param {Object} options - IntersectionObserver options
 * @returns {[Object, boolean]} - [ref, isRevealed]
 */
const useScrollReveal = (options = { threshold: 0.2 }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsRevealed(entry.isIntersecting);
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, isRevealed];
};

export default useScrollReveal;
