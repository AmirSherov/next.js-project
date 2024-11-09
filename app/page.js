'use client';
import { useEffect, useRef, useState } from 'react';
import "./landing.scss";
import LandingItems from './LandingPageItems';
import TypingEffect from "./TypingEffect";

export default function Home() {
  const [products, setProducts] = useState([]); 
  const imageContainer = useRef(null);
  const images = useRef([]);
  const moveAmount = 15;
  async function getProductsFromDataBase() {
    const response = await fetch("http://localhost:3000/Products");
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProductsFromDataBase();

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
        image.style.transform = 'translate(0, 0)';
      });
    });

    return () => {
      container.removeEventListener('mousemove', handleMovement);
      container.removeEventListener('mouseleave', () => {
        images.current.forEach((image) => {
          image.style.transform = 'translate(0, 0)';
        });
      });
    };
  }, []);

  let welcometext = "Python restourant";

  return (
    <>
      <div className='landing-page-main-container'>
        <div className='landing-page-text'>
          <div className='welcome'>Welcome to</div>
          <TypingEffect speed={250} text={welcometext} />
        </div>
        <div className="landing-page-img-container" ref={imageContainer}>
          <img className="landing-bg" ref={(el) => (images.current[0] = el)} src="/images/bg.webp" alt="Background" />
        </div>
        <div className='landing-page-items'>
        {products.length > 0 ? (
          products.map((product, index) => (
            <LandingItems
              key={index}
              image={product.imgPath}
              name={product.name}
              restaurant={product.restaurant}
              id = {product.id}
            />
          ))
        ) : (
          <p>Загрузка продуктов...</p> 
        )}
        </div>
      </div>
    </>
  );
}