'use client';
import "./style.scss";
import { useState , useEffect } from "react";

export default function Login() {
    const [isSignup, setIsSignup] = useState(false); // Toggle state for switching forms

    const toggleForm = () => {
        setIsSignup(!isSignup); // Toggle between login and signup
    };

    useEffect(() => {
        if (typeof window === "undefined") return; // Ensure this code only runs in the browser

        // Function to create a star element
        function stars() {
            const e = document.createElement("div");
            e.setAttribute("class", "star");
            document.body.appendChild(e);

            e.style.left = Math.random() * window.innerWidth + "px";

            const size = Math.random() * 12;
            const duration = Math.random() * 3;

            e.style.fontSize = 12 + size + "px";
            e.style.animationDuration = 3 + duration + "s";

            // Set timeout to remove the star after 5 seconds
            setTimeout(() => {
                if (document.body.contains(e)) {
                    document.body.removeChild(e);
                }
            }, 5000);
        }

        // Set up the interval for creating stars
        const starInterval = setInterval(stars, 100);

        // Cleanup function to clear interval and remove stars when unmounting
        return () => {
            clearInterval(starInterval);
            document.querySelectorAll(".star").forEach((star) => star.remove());
        };
    }, []); // Empty dependency array to run only once on mount/unmount

    return (
        <>
        <div className="container">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <form className="form">
                {/* Show login form if isSignup is false */}
                {!isSignup && (
                    <div className="form_front">
                        <div className="form_details">Login</div>
                        <input type="text" className="input" placeholder="Username" required />
                        <input type="password" className="input" placeholder="Password" required />
                        <button type="submit" className="btn">Login</button>
                        <span className="switch">
                            Don't have an account?
                            <button type="button" className="signup_tog" onClick={toggleForm}>
                                Sign Up
                            </button>
                        </span>
                    </div>
                )}

                {/* Show signup form if isSignup is true */}
                {isSignup && (
                    <div className="form_back">
                        <div className="form_details">Sign Up</div>
                        <input type="text" className="input" placeholder="Firstname" required />
                        <input type="text" className="input" placeholder="Username" required />
                        <input type="password" className="input" placeholder="Password" required />
                        <input type="password" className="input" placeholder="Confirm Password" required />
                        <button type="submit" className="btn">Sign Up</button>
                        <span className="switch">
                            Already have an account?
                            <button type="button" className="signup_tog" onClick={toggleForm}>
                                Sign In
                            </button>
                        </span>
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
