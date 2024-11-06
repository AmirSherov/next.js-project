'use client'
import { useEffect, useState } from 'react';
import "./style.scss";

function Basket() {
    const [basket, setBasket] = useState(null);

    async function getProductsFromDataBase() {
        const response = await fetch("http://localhost:3002/Basket");
        const data = await response.json();
        setBasket(data);
    }

    useEffect(() => {
        getProductsFromDataBase();
    }, []);

    return (
        <div className="basket-main-container1">
            <div className="basket-left-side1">
                {basket && basket.map((product, index) => (
                    <div key={index} className="product-item1">
                        <div>
                            <h3 className='ston'>{product.name}</h3>
                            <p className='res'>{product.restaurant}</p>
                            <p className='tit'>{product.title}</p>
                        </div>
                        <div>
                            <img width={340} height={340} src={product.imgPath} alt={product.name}  className='image'/>
                            <span className='price'>{product.price}$</span>
                            <span className='time'>{product.time}</span>
                            <span className='count'>Count-{product.number}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Basket;
