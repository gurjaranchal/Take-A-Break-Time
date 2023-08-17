// src/components/Page.js

import React from 'react';

const Page = () => {
  const handleClick=(time)=>{
    const iconsDiv = document.getElementById('icons');
    iconsDiv.scrollIntoView({ behavior: 'smooth' });
  } 
  return (
    <center>
    <div className="container mt-4">
      <div className="row mb-3">
      <h1>Take A Break Time</h1>
      </div>
      <div className='row mb-5'><h3>Select a time for Break</h3></div>
      
      <div className="row">
        <div className="col-md-15">
         <div className="mb-4 d-flex justify-content-center">
            <button className="btn btn-primary mx-2 col-sm-1" onClick={()=>{handleClick(300)}}>5 Min</button>
            <button className="btn btn-secondary mx-2 col-sm-1">10 Min</button>
            <button className="btn btn-success mx-2 col-sm-1">15 Min</button>
            <button className="btn btn-danger mx-2 col-sm-1">Custom</button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for website..." />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
    </div>
    </center>
  );
}

export default Page;
