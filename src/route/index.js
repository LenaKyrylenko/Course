import PageCourseLessons from '../pages/PageCourseLessons'
import Page404 from '../pages/Page404'
import PageDataCourses from '../pages/PageDataCourses'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const MainRoute = () => (
    <main>
      <Switch>
        <Route path="/" exact component={PageDataCourses} />
        <Route path="/course/:id" component={PageCourseLessons} />
        <Route component={Page404} />
      </Switch>
    </main>
)
export default MainRoute