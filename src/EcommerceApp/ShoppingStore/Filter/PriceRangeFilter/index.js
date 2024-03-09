const PriceRangeFilter = ({ filters = {}, handleFilterChange = () => {} }) => {
    return (
        <div>
            <h4>Price</h4>
            <ul type="none">
                <li>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="0-250"
                        checked={filters.priceRange === "0-250"}
                        onChange={handleFilterChange}
                    />
                    0 - Rs250
                </li>
                <li>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="251-450"
                        checked={filters.priceRange === "251-450"}
                        onChange={handleFilterChange}
                    />
                    Rs251 - Rs450
                </li>
                <li>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="451-Infinity"
                        checked={filters.priceRange === "451-Infinity"}
                        onChange={handleFilterChange}
                    />
                    Over Rs451
                </li>
            </ul>
        </div>
    );
};

export default PriceRangeFilter;
