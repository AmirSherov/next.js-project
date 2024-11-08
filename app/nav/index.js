'use client';
import "./style.scss";
import Link  from "next/link";
function Nav() {
    return (
        <>
            <nav className="menu">
                <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                <label className="menu-open-button" htmlFor="menu-open">
                    <span className="hamburger hamburger-1"></span>
                    <span className="hamburger hamburger-2"></span>
                    <span className="hamburger hamburger-3"></span>
                </label>

                <Link className="menu-item" href="/"><i >Home</i></Link>
                <Link className="menu-item" href="/Orders"><i >Orders</i></Link>
                <Link className="menu-item" href="/Basket"><i>Basket</i></Link>
                <Link className="menu-item" href="/Login"><i >Login</i></Link>
                <Link className="menu-item" href="/About"><i>About</i></Link>
            </nav>

          
        </>
    );
}
export default Nav; 