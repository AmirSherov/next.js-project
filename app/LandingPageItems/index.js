import "./style.scss";
function LandingPageItems( {image, name, restaurant }) {
    return (
        <>
        <div className="landing-page-item">
            <div> <img width={230} height={150} src={image} alt={name} /></div>
            <div>{name}</div>
            <div>{restaurant}</div>
        </div>
        </>
    )
}

export default LandingPageItems