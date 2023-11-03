import { useState } from "react";
import Cart from "../Cart/Cart";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ cartItems }) {
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    }

    return (
        <div className="navbar">
            <Link to="/">
                <div className="logo">
                    <p>E-Store</p>
                </div>
            </Link>
            <div className="group-pages-cart">
                <div className="group-home-shop">
                    <Link to="/">
                        <div className="home">
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link to="/shop">
                        <div className="shop">
                            <p>Shop</p>
                        </div>
                    </Link>
                </div>
                <Link to="checkout">
                    <Cart items={cartItems}/>
                </Link>
                <div className="mobile-menu-button" onClick={toggleDropdown}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={`dropdown-content ${openDropdown ? 'show' : ''}`}>
                    <Link to="/" onClick={toggleDropdown}>Home</Link>
                    <Link to="/shop" onClick={toggleDropdown}>Shop</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
