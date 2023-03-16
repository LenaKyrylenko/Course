import ReactPaginate from 'react-paginate'
// import PageData from './PageData';
import { useEffect, useState } from 'react'
import Page from './Page'
import fetchData from './helpers'
import { Row, Col } from 'antd'
const PageData = ({ url }) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
    const cardCountPage = 10
    
  useEffect(() => {
    fetchData(url).then(
      (result) => {
        setIsLoaded(true)
        setCards(result)
      },

      (error) => {
        setIsLoaded(true)
        setError(error)
      },
    )
  }, [])
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }
  const handleNextPage = () => {
    setCurrentPage(
      (currentPage + 1) % Math.ceil(cards.courses.length / cardCountPage),
    )
  }

  const handlePrevPage = () => {
    setCurrentPage(
      (currentPage - 1 + Math.ceil(cards.courses.length / cardCountPage)) %
        Math.ceil(cards.courses.length / cardCountPage),
    )
  }
  const indexOfLastData = (currentPage + 1) * cardCountPage
  const indexOfFirstData = indexOfLastData - cardCountPage
  const currentData = cards.courses?.slice(indexOfFirstData, indexOfLastData)
  console.log('cards ', cards)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <Row gutter={[16, 16]}>
          {currentData
            .reverse()
            .map(
              ({
                id,
                title,
                description,
                launchDate,
                status,
                previewImageLink,
                duration,
              }) => (
                <Col span={6} key={id}>
                  <Page
                    title={title}
                    launchDate={launchDate}
                    status={status}
                    previewImageLink={previewImageLink}
                    duration={duration}
                    description={description}
                  />
                </Col>
              ),
            )}
        </Row>

        <div className="pagination">
          <button className="btn" onClick={handlePrevPage}>
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

          <button className="btn" onClick={handleNextPage}>
            {'>'}
          </button>
        </div>
      </>
    )
  }
}

export default PageData
