import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const websites = [
  { name: 'Example', url: 'https://www.example.com' },
  { name: 'Google', url: 'https://www.google.com' },
  // Add more websites as needed
];

function AppTest() {
  const [tabs, setTabs] = useState([]);
  const [selectedWebsite, setSelectedWebsite] = useState(websites[0].url);
  const [duration, setDuration] = useState(5000); // Default duration is 5 seconds

  const handleButtonClick = () => {
    const tab = window.open(selectedWebsite, '_blank');
    const closeTime = new Date().getTime() + duration;

    setTabs([...tabs, { tab, closeTime }]);
  };

  const burstTabs = () => {
    const currentTime = new Date().getTime();
    const updatedTabs = tabs.filter(tabInfo => {
      if (tabInfo.closeTime <= currentTime) {
        tabInfo.tab.close();
        return false;
      }
      return true;
    });

    setTabs(updatedTabs);
  };

  setInterval(burstTabs, 1000);

  return (
    <div className="App">
      <h1>Website Opener</h1>
      <div className="buttons-container">
        {websites.map(website => (
          <button
            key={website.url}
            className="btn btn-primary"
            onClick={() => setSelectedWebsite(website.url)}
          >
            <img src={`icons/${website.name.toLowerCase()}.png`} alt={website.name} />
          </button>
        ))}
      </div>
      <div className="duration-input">
        <input
          type="number"
          value={duration / 1000}
          onChange={e => setDuration(e.target.value * 1000)}
          min="1"
          step="1"
        />
        <span>seconds</span>
      </div>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Open Selected Website for {duration / 1000} seconds
      </button>
    </div>
  );
}

export default AppTest;
