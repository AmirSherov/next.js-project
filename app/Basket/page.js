'use client'
import { useEffect, useState } from 'react';
import "./style.scss";
import { toast, Toaster } from "react-hot-toast";

function Basket() {
    const [userData, setUserData] = useState(null);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);

    async function getProductsFromDataBase() {
        try {
            const userId = parseInt(localStorage.getItem("userId"));
            const response = await fetch(`http://localhost:3000/Users/${userId}`);
            const data = await response.json();
            setUserData(data);
            if (data && data.Basket) {
                setBasket(data.Basket); 
            }
        } catch (error) {
            toast.error("Error fetching basket data");
        }
    }

    useEffect(() => {
        getProductsFromDataBase();
    }, []);

    useEffect(() => {
        if (basket.length > 0) {
            const newTotal = basket.reduce((sum, product) => sum + parseInt(product.price) * parseInt(product.count), 0);
            setTotal(newTotal);
        }
    }, [basket]);

    return (
        <> <Toaster
            position="top-right"
            reverseOrder={false}
        />
            {basket.length > 0 ? (
                <div className="basket-main-container">
                    <div className="basket-left-side">
                        {basket.map((product, index) => (
                            <div key={index} className="product-item-basket">
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.restaurant}</p>
                                    <p>{product.title}</p>
                                    <p>{product.count}X</p>
                                </div>
                                <div>
                                    <img width={150} height={150} src={product.imgPath} alt={product.name} />
                                    <span>{product.price}$</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="basket-right-side">
                        <h1>Basket</h1>
                       <div className='basket-scroll'>
                       {basket.map((product, index) => (
                            <div key={index} className="product-item-price">
                                <span>{product.name} x {product.count}</span>
                                <span>{product.price * product.count}$</span>
                            </div>
                        ))}
                       </div>
                        <h2>Total price: {total}$</h2>
                    </div>
                </div>
            ) : (
                <h1>Basket is empty</h1>
            )}
        </>
    );
}

export default Basket;
