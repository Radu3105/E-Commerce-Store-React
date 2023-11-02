import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/Shopping Cart/ShoppingCart";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/shop" element={<Shop />} ></Route>
                <Route path="/shopping-cart" element={<ShoppingCart />} ></Route>
            </Routes>
        </Router>
    );
}

export default App;
