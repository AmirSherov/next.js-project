'use client'
import "./style.scss";
import { useState } from "react";

export default function Login() {
    const [isSignup, setIsSignup] = useState(false); // Используем состояние для переключения форм

    const toggleForm = () => {
        setIsSignup(!isSignup); // Переключаем между входом и регистрацией
    };

    return (
        <div className="container">
            <form className="form">
                {/* Если isSignup false, показываем форму входа */}
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

                {/* Если isSignup true, показываем форму регистрации */}
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
        </div>
    );
}
