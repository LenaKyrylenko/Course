import logo from './logo.svg';
import './App.css';
import Page from './Page';
import {url, fetchData} from './helpers/index'

const data = fetchData(url)
console.log('data ', data)
function App() {
  return (
    <div className="App">
      {data["courses"]?.map(({title, launchDate,status})=> <Page 
      title={title} launchDate={launchDate} status={status}
      />)
     }
    </div>
  );
}

export default App;
