import { useEffect, useState } from 'react'
import CardCourse from './CardCourse'
import {fetchCourse} from '../helpers'
import { Row, Col, Space, Spin } from 'antd'
import Pagination from './Pagination'
import Error from '../helpers/Error'
import Loading from '../helpers/Loading'
import VideoPlayer from './VideoPlayer'

const Course = ({ course } ) => {
 
//   const [currentPage, setCurrentPage] = useState(0)
//   const cardCountPage = 10

// console.log("course ", course)
    return (
        <>


       <VideoPlayer courseId={course?.id} url={course?.meta?.courseVideoPreview?.link}/>
        {/* <div
                style={{
                    display: 'flex', alignItems: 'stretch',
                    flexWrap: 'wrap'
                }}
        >
          <Row
            gutter={[14, 14]}
            align="stretch"
            style={{ alignItems: 'stretch' }}
          >
            {data.reverse().map((el) => (
              <Col span={8} xs={24} sm={12} md={8} lg={8}>
                <CardCourse course={el} />
              </Col>
            ))}
          </Row>
        </div>
       */}
      </>
    )
  }


export default Course
