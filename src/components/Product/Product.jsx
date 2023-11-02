import './product.css';

function Product({ title, price, image }) {

    return (
        <div className="product">
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