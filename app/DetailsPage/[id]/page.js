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
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserId = localStorage.getItem("userId");
            setUserId(storedUserId);
        }
    }, []);

    useEffect(() => {
        if (userId) getProductsFromDataBase();
    }, [userId]);

    useEffect(() => {
        if (!id) return;

        async function fetchProduct() {
            try {
                const response = await fetch(`http://localhost:3000/DetailsProducts/${id}`);
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
            if (!userId) return;

            const response = await fetch(`http://localhost:3000/Users/${userId}`);
            const data = await response.json();
            setExistingProducts(data.Basket);
        } catch (error) {
            console.error("Error fetching basket data:", error);
        }
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    function checkDataBase() {
        if (!userId) {
            toast.error("Please log in to add a product to the basket");
            return;
        }

        const existingProduct = existingProducts.find((item) => item.name === product.name);
        if (existingProduct) {
            toast.error("The product is already in the basket");
        } else {
            setProductToDataBase();
        }
    }

    function setProductToDataBase() {
        const productWithCount = { ...product, count };

        fetch(`http://localhost:3000/Users/${userId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Basket: [...existingProducts, productWithCount] }),
          })
            .then((response) => response.json())
            .then(() => {
                toast.success("The product is successfully added to the basket");
                getProductsFromDataBase(); 
            })
            .catch((error) => toast.error("Error adding product to the basket" , error));
    }

    const handleButtonClick = () => {
        setIsButtonActive(true);
        checkDataBase(); 
        setTimeout(() => setIsButtonActive(false), 300);
    };
console.log(product.id)
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
                    <div onClick={() => setCount(prevCount => prevCount + 1)}>+</div>
                    <div className="details-page-counter-count">{count}</div>
                    <div onClick={() => setCount(prevCount => Math.max(prevCount - 1, 1))}>-</div>
                </div>
                <div className="details-page-text-container">
                    <div>{product.name}</div>
                    <div>{product.restaurant}</div>
                    <div>{product.title}</div>
                    <div>{count * product.price}$</div>
                    <button onClick={handleButtonClick} className="blob-btn">
                        Add to Basket
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default DetailsPage;
