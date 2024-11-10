'use client';
import { useEffect, useState } from 'react';
import "./style.scss";
import { toast, Toaster } from "react-hot-toast";

function Basket() {
    const [userData, setUserData] = useState(null);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        setUserId(storedUserId);
    }, []);


    useEffect(() => {
        if (userId) {
            getProductsFromDataBase();
        }
    }, [userId]);

    async function getProductsFromDataBase() {
        try {
            const response = await fetch(`http://localhost:3000/Users/${userId}`);
            const data = await response.json();
            setUserData(data);
            if (data && data.Basket) {
                setBasket(data.Basket);
            }
        } catch (error) {
            toast.error("Error fetching user data");
        }
    }
    useEffect(() => {
        if (basket.length > 0) {
            const newTotal = basket.reduce((sum, product) => sum + parseInt(product.price) * parseInt(product.count), 0);
            setTotal(newTotal);
        }
    }, [basket]);

    async function removeItemFromUserBasket(productId) {
        try {
            const response = await fetch(`http://localhost:3000/Users/${userId}`);
            const user = await response.json();
            if (!user) {
                toast.error("User not found");
                return;
            }

            const updatedBasket = user.Basket.filter(product => product.id !== productId);
            const updatedUser = { ...user, Basket: updatedBasket };

            await fetch(`http://localhost:3000/Users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            });

            setBasket(updatedBasket);
            toast.success("Product removed from basket");
        } catch (error) {
            toast.error("Error removing product from basket");
        }
    }

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
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
                                    <img width={200} height={200} src={product.imgPath} alt={product.name} />
                                    <span>{product.price}$</span>
                                    <span onClick={() => removeItemFromUserBasket(product.id)}>
                                        <button className="dark-button">Remove from Basket</button>
                                    </span>
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
                <h1>Basket is empty...</h1>
            )}
        </>
    );
}

export default Basket;
