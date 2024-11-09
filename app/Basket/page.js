'use client'
import { useEffect, useState } from 'react';
import "./style.scss";

function Basket() {
    const [basket, setBasket] = useState(null);
    const [total, setTotal] = useState(0);

    async function getProductsFromDataBase() {
        const response = await fetch("http://localhost:3002/Basket");
        const data = await response.json();
        setBasket(data);
    }

    useEffect(() => {
        getProductsFromDataBase();
    }, []);

    useEffect(() => {
        if (basket) {
            const newTotal = basket.reduce((sum, product) => sum + parseInt(product.price * product.count), 0);
            setTotal(newTotal);
        }
    }, [basket]);

    return (
        <>
            <div className="basket-main-container">
                <div className="basket-left-side">
                    {basket ? (
                        basket.map((product, index) => (
                            <div key={index} className="product-item">
                               <div>
                               <h3>{product.name}</h3>
                                <p>{product.restaurant}</p>
                                <p>{product.title}</p>
                               </div>
                                <div><img width={150} height={150} src={product.imgPath} alt={product.name} />
                                <span>{product.price }$</span>
                                </div>
                                
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="basket-right-side">
                    <h1>Basket</h1>
                    {basket ? (
                        basket.map((product, index) => (
                            <div key={index} className="product-item-price">
                                <span>{product.name} x {product.count}</span>
                                <span>{product.price * product.count}$</span>
                            </div>
                        ))
                    ) : (
                        <p>Loading....</p>
                    )}
                    <h2>Total price: {total}$</h2>
                </div>
            </div>
        </>
    );
}

export default Basket;
