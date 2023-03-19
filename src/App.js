import './App.scss'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router} from 'react-router-dom'
import MainRoute from './route'
import Header from './components/Header'
const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <MainRoute />
      </div>
    </Router>
  )
}

export default App
