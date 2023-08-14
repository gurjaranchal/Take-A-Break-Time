// src/components/Page.js

import React from 'react';

const Page = () => {
  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <textarea className="form-control mb-3" rows="5" placeholder="Enter text here"></textarea>
          <div className="mb-3">
            <button className="btn btn-primary mr-2">5 Min</button>
            <button className="btn btn-secondary mr-2">10 Min</button>
            <button className="btn btn-success mr-2">15 Min</button>
            <button className="btn btn-danger ">Custom</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
