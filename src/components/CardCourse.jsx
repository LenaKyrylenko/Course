
import { fetchCourse, url } from '../helpers'
import { Link } from 'react-router-dom'
import DefaultInfoCourse from './DefaultInfoCourse'

const CardCourse = ({ course }) => {
  return (
    <>
      <Link to={`/course/` + course?.id}>
        <div key={course?.id} className="course-card">
          <div className="course-card-body">
            <div
              className="course-card-image"
              style={{
                backgroundImage: `url(${
                  course?.previewImageLink + '/cover.webp'
                }) `,
              }}
            >
              {' '}
            </div>
            
            <DefaultInfoCourse course={course} />
          </div>
        </div>
      </Link>
    </>
  )
}
export default CardCourse
