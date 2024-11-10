'use client';
import { useEffect, useState } from 'react';
import "./style.scss";

function Basket() {
    const [basket, setBasket] = useState(null);
    const [userId, setUserId] = useState(null);

    async function getProductsFromDataBase() {
        if(typeof window !== 'undefined') {
            const userId = localStorage.getItem("userId");
            setUserId(userId);
        }
        
        
        if (!userId) {
            console.log("User is not logged in.");
            setBasket([]);
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/Users/${userId}`);
            if (!response.ok) {
                throw Error("Failed to fetch orders");
            }
            const data = await response.json();
            setBasket(data.Orders || []); 
        } catch (error) {
            console.error("Error fetching basket data:", error);
        }
    }

    useEffect(() => {
        getProductsFromDataBase();
    }, []);

    if (!basket || basket.length === 0) {
        return <p>Empty orders section.....</p>;
    }

    return (
        <div className="basket-main-container1">
            <div className="basket-left-side1">
                {basket.map((product, index) => (
                    <div key={index} className="product-item1">
                        <div>
                            <h3 className='ston'>{product.name}</h3>
                            <p className='res'>{product.restaurant}</p>
                            <p className='tit'>{product.title}</p>
                        </div>
                        <div>
                            <img width={340} height={340} src={product.imgPath} alt={product.name} className='image' />
                            <span className='price'>{product.price}$</span>
                            <span className='time'>{product.time}</span>
                            <span className='count'>Count-{product.count}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Basket;
