import './shop.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/Product/Product";

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error encountered: ", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>
    if (products.length === 0) return <p>Error getting products</p>

    const displayProducts = () => {
        return (
            <div className="product-grid">
                { products.map((product) => <Product key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />) }
            </div>
        )
    };

    return (
        <>
            {displayProducts()}
        </>
    );
}

export default Shop;
