
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS
import Stopwatch from './stopwatch';
import Page from './page';
import SocialIcons from './socialIcons';

function Navbar(){
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href='/'>Break Time</a>
      
        <div className="navbar navbar-expand-lg" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Use ms-auto to push items to the right */}
            <li className="nav-item">
              <button  className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleTabClick('home')}
           >
                <i className="bi bi-house-door"></i> Home
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => handleTabClick('profile')}
           >
                <i className="bi bi-person"></i> Profile
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'timer' ? 'active' : ''}`}
            onClick={() => handleTabClick('timer')}
          >
                <i className="bi bi-person"></i> Timer
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'home' ? 'active' : ''}`} id="home">
        <Page/>
      <SocialIcons/>
        </div>
        <div className={`tab-pane ${activeTab === 'profile' ? 'active' : ''}`} id="profile">
          profile
        </div>
        <div className={`tab-pane ${activeTab === 'timer' ? 'active' : ''}`} id="timer">
          <Stopwatch/>
        </div>
        {/* Add more tab content as needed */}
      </div>
    </>
  );
}

export default Navbar;



