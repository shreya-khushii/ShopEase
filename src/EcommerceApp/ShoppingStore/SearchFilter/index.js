import { useContext } from "react";
import "./searchBox.css";
import searchIcon from "../Images/search-icon.svg";
import { cartContext } from "../..";
const SearchFilter = ({ appliedFilter = false }) => {
    const cartState = useContext(cartContext);
    const {
        filters = {},
        setFilters = () => {},
        handleClearFilters = () => {},
    } = cartState || {};
    const { searchText = "" } = filters;

    return (
        <div className="search-container">
            <div className="input_field">
                <input
                    name="searchText"
                    value={searchText}
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            [e.target.name]: e.target.value,
                        })
                    }
                    className="input"
                    type="search"
                    placeholder="Search"
                />
                {searchText === "" ? (
                    <div className="suffix">
                        <img
                            src={searchIcon}
                            className="image-suffix"
                            alt="search"
                        />
                    </div>
                ) : null}
            </div>
            {appliedFilter ? (
                <button onClick={handleClearFilters} className="clear-button">
                    Clear all Filters
                </button>
            ) : null}
        </div>
    );
};
export default SearchFilter;
