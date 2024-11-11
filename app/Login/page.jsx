'use client';
import "./style.scss";
import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast"

export default function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });
    const [existingUser, setExistingUser] = useState([]);
    const [registration, setRegistration] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        Orders: [],
        Basket: []
    });

    useEffect(() => {
        getExistingUsersFromDataBase();
    }, []);

    function loginChange(e) {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    }

    function registrationChange(e) {
        const { name, value } = e.target;
        setRegistration({ ...registration, [name]: value });
    }

    function handleLogin(e) {
        e.preventDefault();
        const user = existingUser.find((user) => user.username === login.username && user.password === login.password);
        if (user) {
            toast.success("Login Successful");
           if(typeof window !== "undefined") {
            localStorage.setItem("userId", user.id);
            localStorage.setItem("userEmail", user.email);
           }
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        } else {
            toast.error("Login Failed");
        }
    }

    function registrationCheck(e) {
        e.preventDefault();
        const userExists = existingUser.some((user) => user.email === registration.email);
        if (userExists) {
            toast.error("Username already exists");
        } else if (registration.password !== registration.confirmPassword) {
            toast.error("Passwords do not match");
        } else if (registration.username.length <= 5) {
            toast.error("Username should be more than 5 characters");
        } else if (registration.password.length <= 5) {
            toast.error("Password should be more than 5 characters");
        } else if (!registration.email.includes("@gmail.com")) {
            toast.error("Please enter a valid email");
        } else {
            registerUser();
        }
    }

    async function registerUser() {
        const response = await fetch('http://localhost:3000/Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: parseInt(Math.random() * 10000), ...registration }),
        });
        if (response.ok) {
            toast.success("Registration Successful");
            setIsSignup(false);
            getExistingUsersFromDataBase();
        } else {
            toast.error("Registration Failed");
        }
    }

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    function getExistingUsersFromDataBase() {
        fetch("http://localhost:3000/Users")
            .then((response) => response.json())
            .then((data) => setExistingUser(data));
    }

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
            <div className="container">
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <form className="form">
                    {!isSignup && (
                        <div className="form_front">
                            <div className="form_details">Login</div>
                            <input
                                type="text"
                                className="input"
                                placeholder="Username"
                                required
                                name="username"
                                onChange={loginChange}
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                required
                                name="password"
                                onChange={loginChange}
                            />
                            <button
                                className="btn"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                            <div className="signup_div">
                                Don't have an account?{" "}
                                <span className="signup" onClick={toggleForm}>
                                    Sign Up
                                </span>
                            </div>
                        </div>
                    )}
                    {isSignup && (
                        <div className="form_back">
                            <div className="form_details">Sign Up</div>
                            <input
                                type="emial"
                                className="input"
                                placeholder="Email"
                                required
                                name="email"
                                onChange={registrationChange}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Username"
                                required
                                name="username"
                                onChange={registrationChange}
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                required
                                name="password"
                                onChange={registrationChange}
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Confirm Password"
                                required
                                name="confirmPassword"
                                onChange={registrationChange}
                            />
                            <button
                                className="btn"
                                onClick={registrationCheck}
                            >
                                Sign Up
                            </button>
                            <div className="signup_div">
                                Already have an account?{" "}
                                <span className="signup" onClick={toggleForm}>
                                    Login
                                </span>
                            </div>
                        </div>
                    )}
                </form>
                <section>
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                </section>
            </div>
        </>
    );
}
