'use client'; 
import { useEffect, useState } from 'react';
import './style.scss';

const TypingEffect = ({ text, speed = 200 }) => {
    const [displayedText, setDisplayedText] = useState(""); 
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1); 
            } else {
             
                setTimeout(() => {
                    setDisplayedText(""); 
                setIndex(0);
                } ,2000)
            }
        }, speed); 

        return () => clearTimeout(timeoutId); 
    }, [index, text, speed]); 

    return (
        <div className="typing-effect">
            <span className="text">{displayedText}</span>
            <span className="cursor">{index < text.length ? "|" : ""}</span> 
        </div>
    );
};

export default TypingEffect;
