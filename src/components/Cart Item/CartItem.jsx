import { useState } from "react";
import "./cartItem.css";

function CartItem({
    id,
    image,
    title,
    price,
    quantity: initialQuantity,
    onQuantityChange,
    onRemove,
}) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);
        onQuantityChange(id, newQuantity);
    };

    return (
        <div className="cart-item">
            <img className="cart-item-image" src={image} alt={title}></img>
            <div className="cart-item-info">
                <p>{title}</p>
            </div>
            <div className="cart-item-price">
                <p className="cart-item-price-title">
                    {(price * quantity).toFixed(2)}$
                </p>
                <div className="cart-item-quantity">
                    <p>Qty: </p>
                    <input
                        className="cart-item-quantity-input"
                        type="number"
                        value={quantity}
                        min={1}
                        onChange={handleQuantityChange}
                    ></input>
                </div>
                <p className="cart-item-remove-btn" onClick={onRemove}>
                    Remove
                </p>
            </div>
        </div>
    );
}

export default CartItem;
