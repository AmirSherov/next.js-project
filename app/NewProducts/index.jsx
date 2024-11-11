import "./style.scss";
import { useRouter } from 'next/navigation';
function NewProduct({ id , imgPath , name }) {
    const router = useRouter();
    const handleOrderClick = () => {
        if (router) {
            router.push(`/DetailsPage/${id}`);
        }
    };
    return (
        <div className="new-products-main">
            <div className="new-products-img">
                <img width={400} height={400} src={imgPath}></img>
            </div>
            <div className="new-products-name">
                {name}
            </div>
            <div onClick={handleOrderClick} className="button">
                Details
            </div>
        </div>
    )
}
export default NewProduct;