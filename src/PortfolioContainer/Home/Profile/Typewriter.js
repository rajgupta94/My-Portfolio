import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, loop = true, typeSpeed = 150, deleteSpeed = 100, delaySpeed = 1500 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [speed, setSpeed] = useState(typeSpeed);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            const isWordComplete = !isDeleting && text === currentWord;
            const isDeletionComplete = isDeleting && text === '';

            if (isWordComplete) {
                setTimeout(() => setIsDeleting(true), delaySpeed);
                return;
            }

            if (isDeletionComplete) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
                setSpeed(typeSpeed);
                return;
            }

            const updatedText = isDeleting
                ? currentWord.substring(0, text.length - 1)
                : currentWord.substring(0, text.length + 1);

            setText(updatedText);
            setSpeed(isDeleting ? deleteSpeed : typeSpeed);
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed, speed]);

    return (
        <span className="typewriter-text">
            {text}
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

export default Typewriter;
