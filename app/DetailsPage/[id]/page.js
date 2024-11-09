'use client';
import "./style.scss";
import { useState, useEffect, use } from "react";
import { toast, Toaster } from "react-hot-toast";

function DetailsPage({ params: paramsPromise }) {
    const params = use(paramsPromise);
    const { id } = params;
    const [existingProducts, setExistingProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        getProductsFromDataBase();
    }, []);

    useEffect(() => {
        if (!id) return;

        async function fetchProduct() {
            try {
                const response = await fetch(`http://localhost:3002/Products/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product data");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }

        fetchProduct();
    }, [id]);

    async function getProductsFromDataBase() {
        try {
            const response = await fetch("http://localhost:3002/Basket");
            const data = await response.json();
            setExistingProducts(data);
        } catch (error) {
            console.error("Error fetching basket data:", error);
        }
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    function checkDataBase() {
        const existingProduct = existingProducts.find((item) => item.name === product.name);
        if (existingProduct) {
            toast.error("The product is already in the basket");
        } else {
            setProductToDataBase();
        }
    }

    function setProductToDataBase() {
        const productWithCount = { ...product, count };

        fetch("http://localhost:3002/Basket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productWithCount),
        })
            .then((response) => response.json())
            .then(() => {
                toast.success("The product is successfully added to the basket");
                getProductsFromDataBase(); 
            })
            .catch((error) => console.error("Error adding product to basket:", error));
    }

    const handleButtonClick = () => {
        setIsButtonActive(true);
        checkDataBase(); 
        setTimeout(() => setIsButtonActive(false), 300);
    };

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: 'black',
                        color: 'white',
                        borderRadius: '8px',
                        padding: '10px',
                        fontSize: '16px',
                    },
                }}
            />
            <div className="details-page-main-container">
                <div className="details-page-img-container">
                    <img width={200} height={120} src={product.imgPath} alt={product.name} />
                </div>
                <div className="details-page-counter">
                    <div onClick={() => setCount(prevCount => Math.max(prevCount + 1, 1))}>+</div>
                    <div className="details-page-counter-count">{count}</div>
                    <div onClick={() => setCount(prevCount => Math.max(prevCount - 1, 1))}>-</div>
                </div>
                <div className="details-page-text-container">
                    <div>{product.name}</div>
                    <div>{product.restaurant}</div>
                    <div>{product.title}</div>
                    <div>{count * product.price}$</div>
                    <button
                        className={`cta ${isButtonActive ? 'active' : ''}`}
                        onClick={handleButtonClick}
                    >
                        <span>Add to Basket</span>
                        <span className="shape">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default DetailsPage;
