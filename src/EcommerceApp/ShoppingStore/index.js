import "./styles.css";
import ProductList from "./ProductList";
import Filter from "./Filter";
const ShoppingStore = () => {
    return (
        <div className="product-list-filter">
            <div className="filter">
                <Filter />
            </div>
            <ProductList />
        </div>
    );
};
export default ShoppingStore;
