import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

    const handleAddToCartProduct = (newProduct) => {
        setCartItems((prevCart) => {
            if (!newProduct || !newProduct.id) {
                console.error(
                    "handleAddToCartProduct was called with an invalid product:",
                    newProduct
                );
                return prevCart;
            }

            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === newProduct.id
            );
            if (existingProductIndex > -1) {
                return prevCart.map((item, index) => {
                    if (index === existingProductIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            } else {
                return [...prevCart, { ...newProduct, quantity: 1 }];
            }
        });
    };

    const handleRemoveProductFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <Router>
            <Navbar cartItems={cartItems} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route
                    path="/product/:id"
                    element={
                        <ProductDetails
                            handleAddToCart={handleAddToCartProduct}
                        />
                    }
                ></Route>
                <Route
                    path="/checkout"
                    element={
                        <Checkout
                            cartItems={cartItems}
                            onCartItemRemove={handleRemoveProductFromCart}
                        />
                    }
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
