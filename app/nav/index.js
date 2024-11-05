'use client';
import "./style.scss";
import { AiOutlineProduct } from "react-icons/ai";
import { FaBorderAll, FaBasketShopping } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { useRef, useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const burger = useRef();
    const nav = useRef();

    function handleNav() {
        setOpen(!open);
    }

    return (
        <>
            <div
                ref={burger}
                className={`burger`}
                onClick={handleNav} // Используем onClick вместо addEventListener
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                ref={nav}
                className={`navigation-wrapper ${open ? "active" : "simple"}`}
            >
                <div className="logo-container">
                    <span><img width={60} height={60} src="../images/logo.webp" alt="Logo" /></span>
                    <span>Python Food</span>
                </div>
                <div className="navigation-items">
                    <div><span>Products</span><span><AiOutlineProduct /></span></div>
                    <div><span>Orders</span><span><FaBorderAll /></span></div>
                    <div><span>Basket</span><span><FaBasketShopping /></span></div>
                    <div><span>Login</span><span><IoIosLogIn /></span></div>
                </div>
            </div>
        </>
    );
}
