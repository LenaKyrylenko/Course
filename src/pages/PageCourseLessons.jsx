import { useEffect, useState } from 'react'
import { fetchCourse } from '../helpers'
import Error from '../helpers/Error'
import Loading from '../helpers/Loading'
import Course from '../components/CourseLessons'

const PageCourseLessons = ({
    match: {
      params: { id },
    },
  }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
      fetchCourse(id).then(
        (result) => {
          setIsLoaded(true)
          setData(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
    }, [id])
    if (error) {
      return <Error error={error} />
    } else if (!isLoaded) {
      return <Loading />
    } else {
      return (
        <div className="">
          <Course course={data} />
        </div>
      )
    }
  }
  
  export default PageCourseLessons