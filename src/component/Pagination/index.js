import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import EachCard from '../EachCard';
import { ResourcesContainer } from '../../styledcomponent';
import "./index.css"

export default function PaginatedItems(props) {
    const {data} = props;
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 6
    console.log(pageCount)
 
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
    <ResourcesContainer>
        {currentItems.map(eachitem => (<EachCard cardDetails={eachitem} key={eachitem.id}/>))}
    </ResourcesContainer>
    <div className='pagination-container'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
      </div>
    </>
  );
}
