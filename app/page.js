'use client';
import { useEffect, useRef } from 'react';
import "./landing.scss";
import TypingEffect from "./TypingEffect";
export default function Home() {
  const imageContainer = useRef(null);
  const images = useRef([]);

  const moveAmount = 30;

  useEffect(() => {
    const handleMovement = (e) => {
      const { offsetWidth, offsetHeight } = imageContainer.current;
      const { clientX, clientY } = e;
      const { top, left } = imageContainer.current.getBoundingClientRect();
      const centerX = left + offsetWidth / 2;
      const centerY = top + offsetHeight / 2;


      const moveX = ((clientX - centerX) / offsetWidth) * moveAmount;
      const moveY = ((clientY - centerY) / offsetHeight) * moveAmount;
      images.current[0].style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const container = imageContainer.current;

    container.addEventListener('mousemove', handleMovement);

    container.addEventListener('mouseleave', () => {
      images.current.forEach((image) => {
        image.style.transform = `translate(0, 0)`;
      });
    });

    return () => {
      container.removeEventListener('mousemove', handleMovement);
      container.removeEventListener('mouseleave', () => {
        images.current.forEach((image) => {
          image.style.transform = `translate(0, 0)`;
        });
      });
    };
  }, []);
 let welcometext = "Python restourant"
  
  return (
    <>
      <div className='landing-page-main-container'>
        <div className='landing-page-text'>
          <div className='welcome'>Welocome to</div>
            <TypingEffect speed={400} text={welcometext} />
        </div>
        <div className="landing-page-img-container" ref={imageContainer}>
          <img className="landing-bg" ref={(el) => (images.current[0] = el)} src="/images/bg.webp" alt="Background" />
        </div>
      </div>
    </>
  );
}
