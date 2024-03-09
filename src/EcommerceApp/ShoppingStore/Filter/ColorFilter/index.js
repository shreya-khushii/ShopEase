const ColorFilter = ({ filters = {}, handleFilterChange = () => {} }) => {
    return (
        <div>
            <h4>Color</h4>
            <ul type="none">
                <li>
                    <input
                        type="checkbox"
                        name="color"
                        value="Red"
                        checked={filters.color === "Red"}
                        onChange={handleFilterChange}
                    />
                    Red
                </li>
                <li>
                    <input
                        type="checkbox"
                        name="color"
                        value="Blue"
                        checked={filters.color === "Blue"}
                        onChange={handleFilterChange}
                    />
                    Blue
                </li>
                <li>
                    <input
                        type="checkbox"
                        name="color"
                        value="Green"
                        checked={filters.color === "Green"}
                        onChange={handleFilterChange}
                    />
                    Green
                </li>
            </ul>
        </div>
    );
};
export default ColorFilter;
