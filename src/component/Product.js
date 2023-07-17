import './Product.css';

function Product() {
    return (
        <product className="product">
            <div className="product-img">
                <img src="hambuger.png" alt="hambuger menu" />
            </div>
            <div className="product-info-container">
                <span className="product-name"></span>
                <span className="product-sale"></span>
                <span className="product-price"></span>
            </div>
        </product>
    );
}

export default Product;