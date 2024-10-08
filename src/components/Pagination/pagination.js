import './pagination.scss';
import { useState } from 'react';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';

function Pagination(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(props.items.length / props.perPage);
    const paginationPages  = [];
    
    const handlePaginateClick = (paginateForward) => {
        if (
            ( paginateForward && currentPage >= totalPages)
            || (!paginateForward && currentPage <= 1)
        ) {
            return;
        }
        
        props.onChange(paginateForward ? currentPage + 1 : currentPage - 1);
        setCurrentPage(paginateForward ? currentPage + 1 : currentPage - 1);
    }

    const createPagesArray = () => {
        if (totalPages < 5) {
            for (let i = 1; i <= totalPages; i++) {
                paginationPages.push(i);
            }

            return;
        }

        if (currentPage >= totalPages - 3) {
            paginationPages.pop();

            for (let i = totalPages - 3; i <= totalPages; i++) {

                if (i <= totalPages) {
                    paginationPages.push(i);
                }
            }

            return;
        }

        for (let i = currentPage; i <= currentPage + 2; i++) {
            paginationPages.push(i);
        }

        paginationPages.push('...');

        paginationPages.push(totalPages);

    }

    createPagesArray();

    return (
        <div className='pagination-container d-flex m-r-5'>
            <div className='prev-container' style={{ opacity: `${currentPage === 1 ? '0.5' : ''}`}}>
                <img src={chevronLeft} alt='prev-arrow' onClick={() => { handlePaginateClick(false);  }}/>
            </div>
            { paginationPages.map((page, index) => {
                return (
                    <div className={`pagination-page-container ${currentPage === page ? 'active' : ''}`} onClick={() => { 
                        if (typeof page !== 'number') {
                            return;
                        }

                        props.onChange(page);
                        setCurrentPage(page);

                    }} key={index}>
                        <div className='pagination-page'>
                            {page}
                        </div>
                    </div>
                )
            })}
            <div className='next-container' style={{ opacity: `${currentPage === totalPages ? '0.5' : ''}`}}>
                <img src={chevronRight} alt='next-arrow' onClick={() => { handlePaginateClick(true) }} />
            </div>
        </div>
    )
}

export default Pagination;