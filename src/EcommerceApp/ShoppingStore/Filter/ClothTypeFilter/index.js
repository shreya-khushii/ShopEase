const ClothTypeFilter = ({ filters = {}, handleFilterChange = () => {} }) => {
    return (
        <div>
            <h4>Type</h4>
            <ul type="none">
                <li>
                    <input
                        type="checkbox"
                        name="type"
                        value="Polo"
                        checked={filters.type === "Polo"}
                        onChange={handleFilterChange}
                    />
                    Polo
                </li>
                <li>
                    <input
                        type="checkbox"
                        name="type"
                        value="Hoodie"
                        checked={filters.type === "Hoodie"}
                        onChange={handleFilterChange}
                    />
                    Hoodie
                </li>
                <li>
                    <input
                        type="checkbox"
                        name="type"
                        value="Basic"
                        checked={filters.type === "Basic"}
                        onChange={handleFilterChange}
                    />
                    Basic
                </li>
            </ul>
        </div>
    );
};
export default ClothTypeFilter;
