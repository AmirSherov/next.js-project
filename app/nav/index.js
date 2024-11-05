import "./style.scss"
import { AiOutlineProduct } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
export default function Nav() {
    return(
        <div className="navigation-wrapper">
            <div className="navigation-items">
                <div><span>Products</span><span><AiOutlineProduct /></span></div>
                <div><span>Orders</span><span><FaBorderAll /></span></div>
                <div><span>Basket</span><span><FaBasketShopping /></span></div>
                <div><span>Login</span><span><IoIosLogIn /></span></div>
            </div>
        </div>
    )
}