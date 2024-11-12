'use client'
import "./style.scss"
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AboutText from "./index.tsx";
import { toast, Toaster } from "react-hot-toast";
function About() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        client_name: '',
        client_email: '',
        message: '',
    });
    useEffect(() => {
        const contactButton = document.querySelector('.contact-btn');
        const contactFormContainer = document.querySelector('.contact-form-container');

        if (contactButton) {
            const handleFormVisibility = () => {
                setFormVisible(true);
                contactButton.style.display = 'none';
            };

            contactButton.addEventListener('click', handleFormVisibility);

            return () => {
                contactButton.removeEventListener('click', handleFormVisibility);
            };
        }
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const serviceID = 'service_2rubszp';
        const templateID = 'template_35kbgmp';
        const userID = 'is4tIQbVekFqp5mpl';

        emailjs.send(serviceID, templateID, formData, userID)
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    setStatus('Message sent successfully!');
                    setIsLoading(false);
                },
                (error) => {
                    toast.error("Error sending message: " + error.text);
                    setStatus('Error sending message: ' + error.text);
                    setIsLoading(false);
                }
            );
    };
    return (
        <>
            <Toaster
                position="top-right" />
            <div className="about-us-container">
                {AboutText()}
                <section className="contact-section">
                    <h2>Get In Touch</h2>
                    <button className="contact-btn">Leave a Request</button>
                    <div
                        className="contact-form-container"
                        style={{
                            display: isFormVisible ? 'block' : 'none',
                            opacity: isFormVisible ? 1 : 0,
                            transition: 'opacity 0.4s ease-in-out',
                        }}
                    >
                        <form className="contact-form">
                            <input onChange={(e) => handleChange(e)} type="text" placeholder="Your Name" name="client_name" required />
                            <input onChange={(e) => handleChange(e)} type="email" placeholder="Your Email" name="client_email" required />
                            <textarea  onChange={(e) => handleChange(e)} placeholder="Your Message" name="message" required></textarea>
                            <button type="submit" onClick={(e) => handleSubmit(e)} >{isLoading ? 'Sending...' : 'Submit'}</button>
                        </form>
                    </div>
                    {status && <p>{status}</p>}
                </section>
            </div>
        </>
    )
}
export default About;