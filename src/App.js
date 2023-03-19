import logo from './logo.svg'
import './App.scss'
import { url, fetchData } from './helpers/index'
import { useEffect, useState } from 'react'
import PageDataCourses from './components/PageDataCourses'
import { createBrowserHistory } from 'history'
// import { Router, Route, Link, Redirect, Routes } from 'react-router-dom'
import { fetchCourse } from './helpers/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page404 from './helpers/Page404'
import { connect } from 'react-redux'
import Course from './components/Course'
import Error from './helpers/Error'
import Loading from './helpers/Loading'
import Header from './components/Header'
const history = createBrowserHistory()

const PageCourse = ({
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
      },)
  }, [id])
  if (error) {
    return <Error error={error} />
  } else if (!isLoaded) {
    return <Loading />
  } else {
    return (
      <div className="">
        {console.log('data = ', data)}
        <Course course={data} />
      </div>
    )
  }
}

// const CPageCourse = connect(null, { fetchCourse: fetchCourse })(PageCourse)

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={PageDataCourses} />
      <Route path="/course/:id" component={PageCourse} />
      <Route component={Page404} />
    </Switch>
  </main>
)
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header/>
        <Main />
      </div>
    </Router>
  )
}

export default App
