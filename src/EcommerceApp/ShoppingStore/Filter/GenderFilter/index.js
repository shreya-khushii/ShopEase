const GenderFilter = ({ filters = {}, handleFilterChange = () => {} }) => {
    return (
        <div>
            <h4>Gender</h4>
            <ul type="none">
                <li>
                    <input
                        type="checkbox"
                        name="gender"
                        value="Men"
                        checked={filters.gender === "Men"}
                        onChange={handleFilterChange}
                    />
                    Men
                </li>
                <li>
                    <input
                        type="checkbox"
                        name="gender"
                        value="Women"
                        checked={filters.gender === "Women"}
                        onChange={handleFilterChange}
                    />
                    Women
                </li>
            </ul>
        </div>
    );
};
export default GenderFilter;
