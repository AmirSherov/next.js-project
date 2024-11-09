import { useRouter } from 'next/navigation';
import "./style.scss";
import { useEffect } from 'react';

function LandingPageItems({ id, image, name, restaurant }) {
    const router = useRouter();

    const handleOrderClick = () => {
        if (router) {
            router.push(`/DetailsPage/${id}`);
        }
    };

    return (
        <>
            <div className="landing-page-item">
                <div>
                    <img width={200} height={120} src={image} alt={name} />
                </div>
                <div>{name}</div>
                <div>{restaurant}</div>
                <div onClick={handleOrderClick} className="button">
                    Details
                </div>
            </div>
        </>
    );
}

export default LandingPageItems;
