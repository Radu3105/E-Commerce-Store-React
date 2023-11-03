import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/Product Details/ProductDetails";
import { useEffect, useState } from "react";
import Checkout from "./pages/Checkout/Checkout";

function App() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const handleProductAddToCart = (product) => {
        setCartItems((prevCart) => [...prevCart, product]);
    }

    return (
        <Router>
            <Navbar cartItems={cartItems}/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/product/:id" element={<ProductDetails handleAddToCart={handleProductAddToCart}/>}></Route>
                <Route path="/checkout" element={<Checkout cartItems={cartItems}/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
