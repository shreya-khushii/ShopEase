import { useContext } from "react";
import "./filter.css";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import ClothTypeFilter from "./ClothTypeFilter";
import { cartContext } from "../..";
const Filter = ({ setOpenFilterModal = () => {} }) => {
    const filterState = useContext(cartContext);
    const {
        filters = {},
        setFilters = () => {},
        handleClearFilters = () => {},
        appliedFilter = false,
    } = filterState || {};

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFilters({
                ...filters,
                [name]: checked ? value : "",
            });
        } else {
            setFilters({
                ...filters,
                [name]: value,
            });
        }
    };

    return (
        <div className="filter-container">
            {appliedFilter ? (
                <div className="button-container">
                    <button
                        onClick={() => {
                            handleClearFilters();
                            setOpenFilterModal(false);
                        }}
                        className="clear-applied-filter"
                    >
                        Clear all Filters
                    </button>
                    <button
                        onClick={() => setOpenFilterModal(false)}
                        className="clear-applied-filter"
                    >
                        Apply Filters
                    </button>
                </div>
            ) : null}
            <ColorFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <GenderFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <PriceRangeFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <ClothTypeFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
        </div>
    );
};
export default Filter;
