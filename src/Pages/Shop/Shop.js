import './shop.scss';
import product from '../../assets/images/who-we-are.png';
import { useState } from 'react';
import Pagination from '../../components/Pagination/pagination';
import search from '../../assets/icons/search.svg';
import chevronDown from '../../assets/icons/chevron-down.svg';
import filter from '../../assets/icons/filter.svg';

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
    
    const handleChange = (currentPage) => {
        setCurrentPage(currentPage);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;

    const productsFrom = (currentPage - 1) * perPage;
    const productsTo = currentPage * perPage;

    return (
        <div className='shop-container'>
            <div className='shop-header'>
                <div className='shop-header-title'>HEADER <br /> EXAMPLE</div>
                <div className='shop-header-filters-container'>
                    <div className='relative shop-search-input'>
                        <img className='absolute center-v-absolute p-l-2' src={search} alt='' />
                        <input className='text-input w-100 placeholder-indent' placeholder='Search'/>
                    </div>
                    <div className='category-select relative'>
                        <select className='text-input category-select w-100'>
                            <option className='category-item'>All</option>
                        </select>
                        <img className='absolute center-v-absolute p-l-2 push-icon-left' src={chevronDown} alt='' />
                    </div>
                    <div className='filter-select relative'>
                        <select className='text-input w-100'>
                            <option className='category-item'>Filter</option>
                        </select>
                        <img className='absolute center-v-absolute p-l-2 push-icon-left' src={filter} alt='' />
                    </ div>
                    <button className='primary-button sm-button'>Search</button>
                </div>
            </div>
            <div className='products-list-container'>
                <div className='products-list-header'>
                    <div className='chosen-category'>All</div>
                    <div className='total-products'>
                        Showing products: {productsFrom + 1} - {productsTo <= products.length ? productsTo : products.length} of {products.length}
                    </div>
                </div>
                <div className='products-list'>
                    { products.slice(productsFrom, productsTo).map((product, index) => {
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
                <Pagination perPage={perPage} items={products} onChange={(currentPage) => { handleChange(currentPage) }} />
            </div>
        </div>
    )
}

export default Shop;