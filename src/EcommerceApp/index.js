import "./ecommerce.css";
import { createContext } from "react";
import useGetStateData from "./utils/useGetStateData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ShoppingStore/Header";
import ShoppingStore from "./ShoppingStore";
import ShoppingCart from "./ShoppingCart";

export const cartContext = createContext();

const EcommerceApp = () => {
    const {
        cartItem = [],
        setCartItem = () => {},
        filteredProducts = [],
        filters = {},
        setFilters = () => {},
        totalCartItem = 0,
        handleClearFilters = () => {},
        appliedFilter = false,
        loading = false,
    } = useGetStateData();

    return (
        <cartContext.Provider
            value={{
                cartItem,
                setCartItem,
                filteredProducts,
                filters,
                setFilters,
                handleClearFilters,
                appliedFilter,
                loading,
            }}
        >
            <BrowserRouter>
                <div className="header-container">
                    <Header
                        cartLength={totalCartItem}
                        appliedFilter={appliedFilter}
                    />
                    <Routes>
                        <Route path="/" element={<ShoppingStore />} />
                        <Route
                            path="/shoppingCart"
                            element={<ShoppingCart />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </cartContext.Provider>
    );
};

export default EcommerceApp;
