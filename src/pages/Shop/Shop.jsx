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
        return products.map((product) => <Product key={product.id} {...product}/>);
    };

    return (
        <div>
            {displayProducts()}
        </div>
    );
}

export default Shop;
