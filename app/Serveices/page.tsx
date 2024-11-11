import "./style.scss";

export default function Services() {
    return (
        <>
            <header>
                <div className="header-container">
                    <img src="logopy.png" alt="Logo" className="logo-img" />
                    <h1>Python Restaurant</h1>
                </div>
            </header>

            <div className="services-container">
                <section className="services-header">
                    <h2>Наши Услуги</h2>
                    <p>Мы предлагаем широкий выбор блюд и уникальные сервисы, чтобы сделать ваше время с нами еще более незабываемым!</p>
                </section>

                <section className="services-body">
                    <div className="service-card">
                        <img src="Burger.jpg" alt="Burger" className="service-img" />
                        <div className="service-content">
                            <h3>Бургеры на заказ</h3>
                            <p>Мы готовим вкуснейшие бургеры с самыми свежими ингредиентами. Выбирайте любой из наших вариантов или создайте свой уникальный бургер!</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="pizza.jpg" alt="Pizza" className="service-img" />
                        <div className="service-content">
                            <h3>Пицца с доставкой</h3>
                            <p>Наша пицца — это всегда горячие и сочные пироги с самыми разнообразными начинками. Выберите свою любимую пиццу, и мы доставим её прямо к вам!</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="Drinks.jpg" alt="Drinks" className="service-img" />
                        <div className="service-content">
                            <h3>Напитки и коктейли</h3>
                            <p>Мы предлагаем широкий выбор напитков — от свежих соков до экзотических коктейлей, которые идеально дополнят ваше блюдо.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
