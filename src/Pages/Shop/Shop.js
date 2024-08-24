import './shop.scss';
import product from '../../assets/images/who-we-are.png';

function Shop() {
    const products = [
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        },
        {
            image: product,
            name: 'Lorem Ipsum',
            price: '$239'
        }
    ]

    return (
        <div className='shop-container'>
            <div className='shop-header'>
                <div className='shop-header-title'>HEADER EXAMPLE</div>
                <div className='shop-header-filters-container'>
                    <input className='text-input shop-search-input' placeholder='Search'/>
                    <select className='text-input category-select'>
                        <option className='category-item'>All</option>
                    </select>
                    <select className='text-input filter-select'>
                        <option className='category-item'>Filter</option>
                    </select>
                    <button className='primary-button sm-button'>Search</button>
                </div>
            </div>
            <div className='products-list-container'>
                <div className='products-list-header'>
                    <div className='chosen-category'>All</div>
                    <div className='total-products'>Total products: {products.length}</div>
                </div>
                <div className='products-list'>
                    { products.slice(0, 8).map((product, index) => {
                        return (
                            <div className='product-container' key={index}>
                                <img className='product-image' src={product.image} alt='' />
                                <div className='product-name'>{product.name.toUpperCase()}</div>
                                <div className='product-price'>{product.price}</div>
                                <div className='link-to-details'>View Details</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop;