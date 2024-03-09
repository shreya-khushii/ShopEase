import { useCallback, useEffect, useState } from "react";
import useGetData from "../ShoppingStore/hooks/useGetData";

const useGetStateData = () => {
    const { data: products, loading } = useGetData();
    const [cartItem, setCartItem] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filters, setFilters] = useState({
        gender: "",
        color: "",
        priceRange: "",
        type: "",
        searchText: "",
    });

    const totalCartItem = cartItem.reduce(
        (acc, item) => (acc = acc + item.quantity),
        0
    );
    const applyFilters = useCallback(() => {
        let filtered = [...products];

        if (filters.gender) {
            filtered = filtered.filter(
                (product) => product.gender === filters.gender
            );
        }

        if (filters.color) {
            filtered = filtered.filter(
                (product) => product.color === filters.color
            );
        }

        if (filters.priceRange) {
            const range = filters.priceRange.trim().split("-");
            const [min, max] = range;
            filtered = filtered.filter(
                (product) =>
                    product.price >= min && product.price <= parseFloat(max)
            );
        }

        if (filters.type) {
            filtered = filtered.filter(
                (product) => product.type === filters.type
            );
        }

        if (filters.searchText.trim() !== "") {
            filtered = filtered.filter(
                (product) =>
                    product.name
                        .toLowerCase()
                        .includes(filters.searchText.toLowerCase()) ||
                    product.color
                        .toLowerCase()
                        .includes(filters.searchText.toLowerCase()) ||
                    product.type
                        .toLowerCase()
                        .includes(filters.searchText.toLowerCase()) ||
                    product.gender
                        .toLowerCase()
                        .includes(filters.searchText.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [filters, products]);

    const handleClearFilters = () => {
        setFilters({
            gender: "",
            color: "",
            priceRange: "",
            type: "",
            searchText: "",
        });
    };
    const appliedFilter =
        filters.color.length > 0 ||
        filters.gender.length > 0 ||
        filters.type.length > 0 ||
        filters.priceRange.length > 0;

    useEffect(() => {
        applyFilters();
    }, [applyFilters, filters, products]);

    return {
        cartItem,
        setCartItem,
        filteredProducts,
        filters,
        setFilters,
        totalCartItem,
        handleClearFilters,
        appliedFilter,
        loading,
    };
};

export default useGetStateData;
