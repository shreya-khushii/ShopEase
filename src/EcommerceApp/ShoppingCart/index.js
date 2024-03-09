import React, { useContext } from "react";
import "./shoppingCart.css";
import { cartContext } from "..";
const ShoppingCart = () => {
    const cartState = useContext(cartContext);
    const { cartItem = [], setCartItem = () => {} } = cartState || {};

    const removeFromCart = (productId) => {
        const updateCart = cartItem.filter(
            (product) => product.id !== productId
        );
        setCartItem(updateCart);
    };

    const totalPrice = () => {
        return cartItem.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        );
    };

    const updateCartQuantity = (productId, quantity) => {
        const updatedCart = cartItem.map((item) =>
            item.id === productId ? { ...item, quantity } : item
        );
        setCartItem(updatedCart);
    };

    return (
        <div className="shoping-cart-container">
            {cartItem.map((product) => {
                const { id, totalQuantity, name, imageURL, price, quantity } =
                    product || {};
                return (
                    <div key={id} className="shoping-card">
                        <img
                            src={imageURL}
                            alt={name}
                            className="cart-item-image"
                        />
                        <div className="name-price">
                            <strong> {name}</strong>
                            <div>Rs {price}</div>
                        </div>
                        Quantity:
                        <select
                            value={quantity}
                            onChange={(e) =>
                                updateCartQuantity(id, parseInt(e.target.value))
                            }
                        >
                            {Array.from(
                                { length: totalQuantity },
                                (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                    </option>
                                )
                            )}
                        </select>
                        <button
                            onClick={() => removeFromCart(id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
            <hr />
            <strong className="total-price">
                Total amount: Rs. {totalPrice()}
            </strong>
        </div>
    );
};

export default ShoppingCart;
