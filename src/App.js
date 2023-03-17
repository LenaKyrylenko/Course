import logo from './logo.svg'
import './App.scss'
import { url, fetchData } from './helpers/index'
import { useEffect, useState } from 'react'
import PageDataCourses from './PageDataCourses'
import { createBrowserHistory } from 'history'
// import { Router, Route, Link, Redirect, Routes } from 'react-router-dom'
import { fetchCourse } from './helpers/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const history = createBrowserHistory()
const Course = () => {
  return <> курс </>
}
const NotFoundPage = ({}) => (
  <>
    <h1> 404 </h1>
    <h2> Oops, no such page found </h2>
    <a> return to the main page</a>
  </>
)
const PageCourse = ({
  match: {
    params: { _id },
  },
  fetchCourse,
}) => {
  useEffect(() => {
    fetchCourse(_id)
  }, [_id])
  return (
    <div className="">
      <Course />
    </div>
  )
}

// const CPageCourse = connect(null, { fetchCourse: fetchCourse })(PageCourse)

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={PageDataCourses} />
      <Route path="/course/:id" component={Course} />
      <Route component={NotFoundPage} />
    </Switch>
  </main>
)
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Main />
      </div>
    </Router>
  )
}

export default App
