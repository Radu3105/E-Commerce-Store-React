import "./checkout.css";
import CartItem from "../../components/Cart Item/CartItem";
import { useState, useEffect } from "react";

function Checkout({ cartItems: initialCartItems, onCartItemRemove }) {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [total, setTotal] = useState(0);

    const deliveryCost = 12.99;

    console.log(cartItems);

    useEffect(() => {
        let _total = 0;
        for (const item of cartItems) {
            _total += item.price * item.quantity;
        }
        setTotal(_total.toFixed(2));
    }, [cartItems]);

    const handleCartItemQuantityChange = (itemId, newQuantity) => {
        setCartItems((currentItems) =>
            currentItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    if (cartItems.length === 0) {
        return <h1 className="empty-cart-title">Shopping cart is empty</h1>;
    }

    return (
        <div className="checkout-container-center">
            <div className="checkout-container">
                <div className="cart-list">
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                            onQuantityChange={handleCartItemQuantityChange}
                            onRemove={() => onCartItemRemove(item.id)}
                        />
                    ))}
                </div>
                <div className="checkout-summary">
                    <h2 className="checkout-summary-title">Payment Summary</h2>
                    <p>Products cost: {total}$</p>
                    <p>Delivery cost: {deliveryCost}$</p>
                    <p>Estimated delivery time: 3 days</p>
                    <h2 className="checkout-summary-total">
                        Total:<br></br>
                        {(parseFloat(total) + parseFloat(deliveryCost)).toFixed(
                            2
                        )}
                        $
                    </h2>
                    <div className="checkout-purchase-btn-container">
                        <button className="checkout-purchase-btn">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
