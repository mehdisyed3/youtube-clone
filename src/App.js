import React from 'react'
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';


// 1.15
function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />

      </div>

    </div>
  );
}

export default App;
