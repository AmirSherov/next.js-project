import "./style.scss";

function LandingPageItems({ image, name, restaurant }) {
    return (
        <>
            <div className="landing-page-item">
                <div>
                    <img width={200} height={120} src={image} alt={name} />
                </div>
                <div>{name}</div>
                <div>{restaurant}</div>
                <div className="buttons">
                    <button className="blob-btn">
                        Order
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                    </button>
                </div>
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
            </>
    );
}

export default LandingPageItems;
