import logo from './logo.svg';
import './App.scss';
import Page from './Page';
import {url, fetchData} from './helpers/index'
import { useEffect, useState } from 'react'
import PageData from './Pagination';


function App() {
  return (
    <div className="App">
      <PageData url={url}/>
      {/* {data?.PromiseResult.map(({title, launchDate,status})=> <Page 
      title={title} launchDate={launchDate} status={status}
      />)
     } */}
    </div>
  );
}

export default App;
