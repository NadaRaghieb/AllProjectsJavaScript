import React from 'react'
import { Row} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
const PagesNumbers = ({getPage, pageCount}) => {
  const handlePageClick=(data)=>{
    getPage(data.selected + 1)
  }
  
  return (
    <Row className='mt-5'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي "
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel=" السابق"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </Row>
  )
}

export default PagesNumbers
