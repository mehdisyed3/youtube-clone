import React from 'react'
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import {Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCqMyROln9xn38eQ7eVpnhrMXc6uhgPbos 
// 3.20
function App() {


  return (
    <div className="app">
      <Header />
     
      <div className='app__page'>

        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <RecommendedVideos />
            </Route>

          <Route path='/search/:searchTerm' >
            <SearchPage />
            </Route>

        </Switch>
      </div>

     

    </div>
  );
}

export default App;
