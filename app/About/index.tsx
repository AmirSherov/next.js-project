export default function AboutText(){
    return(
        <>
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
        </>
    )
}