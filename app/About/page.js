'use client'
import "./style.scss"
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
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
                <section className="intro">
                    <h1 className="intro-title">О нас</h1>
                    <p className="intro-description">
                        Добро пожаловать! Мы — команда, которая создаёт нечто удивительное. В нашем ресторане вы найдете неповторимые вкусы и уникальный подход к каждой детали.
                    </p>
                </section>

                <section className="team">
                    <h2 className="section-title">Наша Команда</h2>
                    <div className="team-cards">
                        <div className="team-card">
                            <img src="chef1.jpg" alt="Team Member 1" className="team-image" />
                            <h3 className="team-name">Алексей Иванов</h3>
                            <p className="team-role">Шеф-повар</p>
                            <p className="team-description">Создает авторские блюда и удивляет вкусами.</p>
                        </div>
                        <div className="team-card">
                            <img src="chef2.webp" alt="Team Member 2" className="team-image" />
                            <h3 className="team-name">Мария Петрова</h3>
                            <p className="team-role">Сомелье</p>
                            <p className="team-description">Выбирает идеальные сочетания напитков к блюдам.</p>
                        </div>
                        <div className="team-card">
                            <img src="chef3.webp" alt="Team Member 3" className="team-image" />
                            <h3 className="team-name">Иван Смирнов</h3>
                            <p className="team-role">Менеджер</p>
                            <p className="team-description">Следит за тем, чтобы каждый гость чувствовал себя как дома.</p>
                        </div>
                    </div>
                </section>

                <section className="values">
                    <h2 className="section-title">Наши Ценности</h2>
                    <div className="values-list">
                        <div className="value-item">
                            <h3>Качество</h3>
                            <p>Мы используем только свежие и отборные ингредиенты.</p>
                        </div>
                        <div className="value-item">
                            <h3>Креативность</h3>
                            <p>Каждое блюдо — это произведение искусства.</p>
                        </div>
                        <div className="value-item">
                            <h3>Дружелюбие</h3>
                            <p>Мы рады каждому гостю и создаём теплую атмосферу.</p>
                        </div>
                    </div>
                </section>
                <section className="team-section">
                    <h2>Meet Our Developers</h2>
                    <div className="team-container">
                        <div className="team-member">
                            <img src="team1.webp" alt="Developer 1" />
                            <h3>Amir</h3>
                            <p>Frontend Developer</p>
                            <p>Specializes in crafting modern, responsive user interfaces.</p>
                            <div className="social-links">
                                <a href="https://github.com/amir" target="_blank"><i className="fab fa-github"></i></a>
                                <a href="https://linkedin.com/in/amir" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="https://twitter.com/amir" target="_blank"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src="team1.webp" alt="Developer 2" />
                            <h3>Amir</h3>
                            <p>Backend Developer</p>
                            <p>Ensures smooth and secure data handling across all services.</p>
                            <div className="social-links">
                                <a href="https://github.com/sara" target="_blank"><i className="fab fa-github"></i></a>
                                <a href="https://linkedin.com/in/sara" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="https://twitter.com/sara" target="_blank"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="company-section">
                    <div className="company-text">
                        <h2>Who We Are</h2>
                        <p>We are a team of creative and passionate web developers, who specialize in creating modern, responsive websites tailored to our client's needs. From small business sites to large-scale e-commerce platforms, we build solutions that drive results.</p>
                    </div>
                    <div className="company-video">
                        <video autoPlay={true} muted={true} loop={true} className="company-video-background">
                            <source src="/company.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
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