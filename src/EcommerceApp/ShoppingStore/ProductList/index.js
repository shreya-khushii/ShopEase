import { useContext } from "react";
import "./productList.css";
import { cartContext } from "../..";

const ProductList = () => {
    const cartState = useContext(cartContext);
    const {
        cartItem = [],
        setCartItem = () => {},
        filteredProducts = [],
        loading = false,
    } = cartState || {};

    const addToCart = (product) => {
        const totalQuantity = product.quantity;
        const existingProduct = cartItem.find((item) => item.id === product.id);

        if (existingProduct) {
            if (existingProduct.quantity < product.quantity) {
                existingProduct.quantity++;
                setCartItem([...cartItem]);
            } else {
                alert("Maximum quantity reached for this item.");
            }
        } else {
            setCartItem([
                ...cartItem,
                { ...product, quantity: 1, totalQuantity },
            ]);
        }
    };

    if (loading) {
        return (
            <div className="no_data">
                <strong>Loading...</strong>
            </div>
        );
    }

    if (filteredProducts.length === 0) {
        return <div className="no_data">No Results found</div>;
    }

    return (
        <div className="product-card-container">
            {filteredProducts.map((product) => {
                const { id, name, imageURL, gender, price } = product || {};
                return (
                    <div className="card" key={id}>
                        <img
                            src={imageURL}
                            alt={name}
                            className="product-image"
                        />
                        <strong className="title">
                            {gender} | {name}
                        </strong>
                        <div className="bottom">
                            <strong className="title">Rs {price}</strong>
                            <button
                                onClick={() => addToCart(product)}
                                className="add-to-cart-button"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
