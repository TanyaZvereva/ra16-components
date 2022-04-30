import './style.css'
import PropTypes from 'prop-types'

const ShopItemFunc = ({ item }) => {
    const { brand, title, description, descriptionFull, price, currency } = item
    return (
        <div class="main-content">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="description">
                {descriptionFull}
            </div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{currency}{price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}
ShopItemFunc.propTypes = {
    item: PropTypes.exact({
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string
    })
}
export default ShopItemFunc