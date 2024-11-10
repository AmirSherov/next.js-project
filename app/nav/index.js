'use client';
import "./style.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

function Nav() {
    const [isLogin, setIsLogin] = useState(false);
    const [menu, setMenu] = useState(false);
    const [email, setEmail] = useState("");

    function maskEmail() {
        const [name, domain] = email.split('@');
        const middleIndex = Math.floor(name.length / 2);
        const maskedName = name.slice(0, middleIndex) + "***";
        return `${maskedName}@${domain}`;
    }

    const toggleMenu = () => {
        setMenu(!menu);
    };
    useEffect(() => {
        let userId = localStorage.getItem('userId');
        let userEmail = localStorage.getItem('userEmail');

        if (userEmail) {
            setEmail(userEmail);
            setIsLogin(true);
        } else {
            setEmail('');
            setIsLogin(false);
        }
    }, [isLogin]);
    function askPermission() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true 
        });

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Do you really want to logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Log Out!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: 'Logged Out!',
                    text: 'You have been Logged Out.',
                    icon: 'success'
                });
                localStorage.removeItem('userId');
                localStorage.removeItem('userEmail');
                setIsLogin(false);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: 'Cancelled',
                    text: 'Your data file is safe :)',
                    icon: 'error'
                });
            }
        });


    }
    return (
        <>
            <div className={`menu ${menu ? "open" : ""}`}>
                <div className="navigation-container">
                    <div className="navigation-logo">
                        <img src="/logopy.png" alt="logo" />
                    </div>
                    <ul className="navigation-list">
                        <li className="navigation-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="navigation-item">
                            <Link href="/Basket">Basket</Link>
                        </li>
                        <li className="navigation-item">
                            <Link href="/Orders">Orders</Link>
                        </li>
                        {isLogin ? (
                            <li onClick={() => askPermission()} className="navigation-item logout">
                                <Link href="#">Log Out {maskEmail()}</Link>
                            </li>
                        ) : (
                            <li className="navigation-item">
                                <Link href="/Login">Login</Link>
                            </li>
                        )
                        }
                        <li className="navigation-item">
                            <Link href="/About">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`burger-menu ${menu ? "open" : ""}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}

export default Nav;
