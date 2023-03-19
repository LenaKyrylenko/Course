import { fetchData } from '../helpers'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
const Page404 = () => (
  <>
    <div className="not-found">
      <h1> 404 </h1>
      <h2> Oops, no such page found </h2>
      <p>Return to the main page</p>
      <Link to="/" onClick={() => fetchData()}>
        <Button type="primary">Main page </Button>
      </Link>
    </div>
  </>
)
export default Page404
