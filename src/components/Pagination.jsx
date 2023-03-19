import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePrevPage, currentPage, cards, cardCountPage, handlePageChange, handleNextPage, }) => {
    return(  <div className="pagination">
    <button className="pagination btn" onClick={handlePrevPage}>
      {' '}
      {'<'}
    </button>
    <ReactPaginate
      disableInitialCallback={true}
      pageCount={Math.ceil(cards.courses.length / cardCountPage)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      nextLabel={''}
      previousLabel={''}
      renderOnZeroPageCount={null}
      forcePage={currentPage}
    />

    <button className="pagination btn" onClick={handleNextPage}>
      {'>'}
    </button>
  </div>)

}
export default Pagination