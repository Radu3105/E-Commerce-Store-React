function Checkout({ cartItems }) {
    return (
        <div>
            <p>Cart items:</p>
            {cartItems.map((item) => <p>{item.title} - {item.price}$</p>)}
        </div>
    );
}

export default Checkout;    