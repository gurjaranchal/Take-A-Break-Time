// Stopwatch.js
import React, { useState} from 'react';
const websites = [
    { name: 'example', url: 'https://www.example.com' },
    { name: 'W3School', url:  'https://www.w3schools.com/' },
    { name: 'youtube', url:  'https://www.youtube.com/' },
    { name: 'linkedin', url:  ' https://linkedin.com/' },
    { name: 'facebook', url:  ' https://facebook.com/' },
    // Add more websites as needed
  ];


const Custom = () => {
 
  
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
        <center>
            <div className="container mt-5 pt-5">
       {/* tab brust */}

       <div className="buttons-container ">
        {websites.map(website => (
          <button
            key={website.url}
            className="p-5"
            onClick={() => setSelectedWebsite(website.url)}
          >
            <img src={`${website.name.toLowerCase()}.png`} alt={website.name} width='40px' height='45px'/>
          </button>
        ))}
      </div>

      <div className="duration-input px-5 mt-4">
        <input
          type="number"
          value={duration / 1000}
          onChange={e => setDuration(e.target.value * 1000)}
          min="1"
          step="1"
        />
        <span>seconds</span>
      </div>
      <button className="btn btn-primary mt-5" onClick={handleButtonClick}>
        Open Selected Website for {duration / 1000} seconds
      </button>
    </div>
        </center>
    );
};
export default Custom;
