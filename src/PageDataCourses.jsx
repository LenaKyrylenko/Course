
import { useEffect, useState } from 'react'
import CardCourse from './CardCourse'
import fetchData from './helpers'
import { Row, Col,Space,Spin } from 'antd'
import Pagination from './helpers/Pagination'
import Error from './helpers/Error'
import Loading from './helpers/Loading'
const PageDataCourses = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
    const cardCountPage = 10
    
  useEffect(() => {
    fetchData().then(
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
    return <Error error={error }/>
  } else if (!isLoaded) {
    return <Loading/>
  } else {
    return (
      <>
         <div style={{ display: "flex",alignItems: "stretch", flexWrap: "wrap" }}>
        <Row gutter={[14, 14]} align="stretch" style={{ alignItems: "stretch" }}>
         
          {currentData
            .reverse()
            .map(
              (el) => (
                <Col span={8}  xs={24} sm={12} md={8} lg={8}>
                  <CardCourse
                    course={el}
                  />
                </Col>
              ),
            )} 
        </Row>
</div>
        <Pagination handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          cards={cards}
          cardCountPage={cardCountPage}
          handlePageChange={handlePageChange}
          handleNextPage={ handleNextPage} />
      </>
    )
  }
}

export default PageDataCourses
