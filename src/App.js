import React from 'react'
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage';
import VideoStream from './VideoStream';


function App() {

  return (
    <div className="app">
      <Header />

      <div className='app__page'>

        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <RecommendedVideos heading="Recommended" />
          </Route>

          <Route path='/search/:searchTerm' >
            <SearchPage />
          </Route>
          <Route path='/videostream/:id' >
            <VideoStream />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
