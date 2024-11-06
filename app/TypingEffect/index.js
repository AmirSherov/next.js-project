'use client'; // Обязательно для клиентских компонентов
import { useEffect, useState } from 'react';
import './style.scss'; // Стили для эффекта печати

const TypingEffect = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState(""); // Текст для отображения
    const [index, setIndex] = useState(0); // Текущий индекс символа

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index)); // Добавляем символ
                setIndex((prev) => prev + 1); // Увеличиваем индекс
            } else {
                // Завершаем печать, делаем паузу и сбрасываем
                setTimeout(() => {
                    setDisplayedText(""); // Сбрасываем текст
                setIndex(0); // Сбрасываем индекс
                } ,2000)
            }
        }, speed); // Задержка между печатью символов

        return () => clearTimeout(timeoutId); // Очищаем таймер при размонтировании
    }, [index, text, speed]); // Запускаем эффект, если изменился индекс или текст

    return (
        <div className="typing-effect">
            <span className="text">{displayedText}</span>
            <span className="cursor">{index < text.length ? "|" : ""}</span> {/* Курсор появляется только во время печати */}
        </div>
    );
};

export default TypingEffect;
