import './product.css';
import { useNavigate } from 'react-router-dom';

function Product({ id, title, price, image }) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/product/" + id);
    }

    return (
        <div className="product" onClick={handleClick}>
            <img className="image" src={image} alt={title}></img>
            <div className='group-title-price'>
                <p className="product-title">{title}</p>
                <div className='group-price-buy'>
                    <p className='price'>{price}$</p>
                    <button className="buy-btn">BUY</button>
                </div>
            </div>
        </div>
    );
}

export default Product;