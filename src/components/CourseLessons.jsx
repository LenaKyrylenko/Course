import { useEffect, useState } from 'react'
import CardCourse from './CardCourse'
import { fetchCourse } from '../helpers'
import { Row, Col, Space, Spin } from 'antd'
import Pagination from './Pagination'
import Error from '../helpers/Error'
import Loading from '../helpers/Loading'
import VideoPlayer from './VideoPlayer'
import blocked_video from '../materials/default-locked-video.jpg'
import DefaultInfoCourse from './DefaultInfoCourse'
const Course = ({ course }) => {
  console.log('data ' , course)
  return (
    <>
      <Row gutter={[14, 14]} style={{ alignItems: 'stretch' }}>
        <Col
          span={14}
          xs={{ offset: 2, span: 20 }}
          sm={{ offset: 1, span: 20 }}
          md={{ offset: 4, span: 20 }}
          lg={{ offset: 1, span: 11 }}
        >
          <div key={course?.id}>
            <div className="course-page-info">
              <h1> {course?.title}</h1>

              <VideoPlayer
                previewImageLink={course?.previewImageLink + '/cover.webp'}
                courseId={course?.id}
                id="video-player-course"
                url={course?.meta?.courseVideoPreview?.link}
              />
      <DefaultInfoCourse course={course} />
            </div>
          </div>
        </Col>
        <Col lg={{ offset: 1, span: 9 }} md={{ offset: 3, span: 16 }}>
          <h2 className="course-card-count"> {course?.lessons.length} lessons </h2>
          <div className="scrollable">
            {course?.lessons?.map((el) => (
              <div className="course-card-lessons">
                <h3> {el?.title}</h3>

                {el?.type == 'video' ? (
                  <VideoPlayer
                    previewImageLink={`${el?.previewImageLink}/lesson-${el?.order}.webp`}
                    courseId={course?.id}
                    lessonsId={el?.id}
                    id={'video-player-course-' + `${el?.id}`}
                    url={el?.link}
                  />
                ) : (
                  <>
                    <p>This video is locked</p>
                    <img src={blocked_video} height={'50%'} width={'50%'} />
                  </>
                )}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Course
