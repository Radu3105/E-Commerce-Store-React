import "./productDetails.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetails({ handleAddToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                console.log(response.data);
                setProduct(response.data);
            } catch (error) {
                console.error("An error ocurred:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    const handleAddToCartClick = (product) => {
        handleAddToCart(product);
        navigate(-1);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="center">
            <div className="container">
                <div className="image-container">
                    <img
                        className="product-image"
                        src={product.image}
                        alt={product.title}
                    ></img>
                </div>
                <div className="description-container">
                    <h1>{product.title}</h1>
                    <h3>{product.price}$</h3>
                    <div className="product-description">
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                    {(product.category === "women's clothing" ||
                        product.category === "men's clothing") && (
                        <div className="product-sizes">
                            <h2>Sizes</h2>
                            <div className="sizes-options">
                                <button>XS</button>
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XXL</button>
                            </div>
                        </div>
                    )}
                    <button
                        className="description-buy-btn"
                        onClick={() => handleAddToCartClick(product)}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
