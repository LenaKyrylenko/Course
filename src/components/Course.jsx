import { useEffect, useState } from 'react'
import CardCourse from './CardCourse'
import {fetchCourse} from '../helpers'
import { Row, Col, Space, Spin } from 'antd'
import Pagination from './Pagination'
import Error from '../helpers/Error'
import Loading from '../helpers/Loading'
import VideoPlayer from './VideoPlayer'

const Course = ({ course } ) => {
    return (
      <>
        
         <Row
            gutter={[14, 14]}
            style={{ alignItems: 'stretch' }}
        >
            <Col span={14} xs={24} sm={12} md={8} lg={14}>
         <div key={course?.id}>
          <div className="course-page-info">
            <h2> {course?.title}</h2>
                {console.log("id = ", course?.id)}
               
                  <VideoPlayer previewImageLink={course?.previewImageLink + '/cover.webp'}
                    courseId={course?.id}
                    id="video-player-course"
                    url={course?.meta?.courseVideoPreview?.link} />
               
         <p> {course?.description}</p>
            
            
          </div>
            </div>
          </Col>
          <Col span={8}>
            <div className='scrollable'>
            
            <h3> {course?.lessons.length} lessons </h3>
            
            {course?.lessons?.map((el) =>
              
              <div className='course-card-lessons'>
                <h5> {el?.title}</h5>
                {console.log('el ', el?.previewImageLink )}
               
                <VideoPlayer
              previewImageLink={`${el?.previewImageLink}/lesson-${el?.order}.webp`}
                  courseId={course?.id}
                  lessonsId={el?.id}
                  id={"video-player-course-" + `${el?.id}`}
                  url={el?.link}
                  /> 
               </div>
              )}
            </div>
          </Col>
        </Row>
        </>
    )
  }
          {/* </div> */}
            {/* <div
                style={{
                    display: 'flex', alignItems: 'stretch',
                    flexWrap: 'wrap'
                }}
        >
          <Row
            gutter={[14, 14]}
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
    


export default Course
