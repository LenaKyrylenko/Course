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
const history = createBrowserHistory()
const Course = () => {
  return <> курс </>
}

const PageCourse = ({
  match: {
    params: { _id },
  },
  
}) => {
  useEffect(() => {
    fetchCourse(_id)
  }, [_id])
  return (
    <div className="">
      <Course />
      <h1> {_id} </h1>
    </div>
  )
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
        <Main />
      </div>
    </Router>
  )
}

export default App
