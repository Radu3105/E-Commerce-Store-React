import "./cart.css";

function Cart({ items }) {
    const displayCartQuantity = () => {
        if (items.length > 0) {
            return (
                <div className="cart-quantity">
                    {items.length <= 99 ? <p>{items.length}</p> : <p>99+</p>}
                </div>
            );
        }
        return null;
    }
    
    return (
        <div className="cart">
            { displayCartQuantity() }
            <i className="fas fa-shopping-cart cart-icon"></i>
        </div>
    );
}

export default Cart;