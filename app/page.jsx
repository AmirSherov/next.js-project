
'use client';
import { useEffect, useState } from 'react';
import "./landing.scss";
import NewProducts from './NewProducts';
import LandingItems from './LandingPageItems';
import TypingEffect from "./TypingEffect";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [Newproducts, setNewProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const moveAmount = 15;

  async function getProductsFromDataBase() {
    const response = await fetch("http://localhost:3000/Products");
    const data = await response.json();
    setProducts(data);
  }

  async function getNewProductsFromDataBase() {
    const response = await fetch("http://localhost:3000/NewProducts");
    const data = await response.json();
    setNewProducts(data);
  }

  useEffect(() => {
    getProductsFromDataBase();
    getNewProductsFromDataBase();
  }, []);

  useEffect(() => {
    const imageContainer = document.querySelector(".landing-page-img-container");

    const handleMovement = (e) => {
      const { offsetWidth, offsetHeight } = imageContainer;
      const { clientX, clientY } = e;
      const { top, left } = imageContainer.getBoundingClientRect();
      const centerX = left + offsetWidth / 2;
      const centerY = top + offsetHeight / 2;

      const moveX = ((clientX - centerX) / offsetWidth) * moveAmount;
      const moveY = ((clientY - centerY) / offsetHeight) * moveAmount;

      const image = document.querySelector(".landing-bg");
      image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    imageContainer.addEventListener("mousemove", handleMovement);
    imageContainer.addEventListener("mouseleave", () => {
      const image = document.querySelector(".landing-bg");
      image.style.transform = "translate(0, 0)";
    });

    return () => {
      imageContainer.removeEventListener("mousemove", handleMovement);
    };
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Newproducts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [Newproducts.length]);

  return (
    <div className='landing-page-main-container'>
      <div className='landing-page-text'>
        <div className='welcome'>Welcome to</div>
        <TypingEffect speed={250} text={"Python restaurant"} />
      </div>

      <div className="landing-page-img-container">
        <img className="landing-bg" src="/images/bg.webp" alt="Background" />
      </div>

      <div className='landing-page-items'>
        {products.length > 0 ? (
          products.map((product) => (
            <LandingItems
              key={product.id}
              image={product.imgPath}
              name={product.name}
              restaurant={product.restaurant}
              id={product.id}
            />
          ))
        ) : (
          <p>Загрузка продуктов...</p>
        )}
      </div>

      <div className='landing-page-slider'>
        {Newproducts.length > 0 ? (
          <div className="slider-container">
            <div
              className="slider-content"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 1s ease-in-out',
              }}
            >
              {Newproducts.map((product) => (
                <NewProducts
                  key={product.id}
                  imgPath={product.imgPath}
                  name={product.name}
                  id={product.id}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>Загрузка новых продуктов...</p>
        )}
      </div>
    </div>
  );
}
