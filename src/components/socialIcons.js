import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SocialIcons = () => {

  return (
    <center>
        <div className="m-5">           

            <h3>Select website of your choice for break</h3> 
        </div>
    <div className="icons">
        <div className="row d-flex justify-content-center">
         <div className="col-md-2 m-0">
             <a href="https://www.instagram.com/" className="image-button" target="_blank" rel="noopener noreferrer">
                <img src="instagram.png" alt="instagram" />

            </a>
         </div>
         <div className="col-md-2 m-0">
            <a href="https://www.facebook.com/" className="image-button" target="_blank" rel="noopener noreferrer">
                <img src="facebook.png" alt="fb"/>
            </a>
         </div>
         <div className="col-md-2 m-0">
            <a href="https://www.youtube.com/" className="image-button" target="_blank" rel="noopener noreferrer">
                <img src="youtube.png" alt="youtube"/>
            </a>
         </div>
         <div className="col-md-2 m-0">
            <a href="https://www.netflix.com/" className="image-button" target="_blank" rel="noopener noreferrer">
                <img src="netflix.png" alt="netflix"/>
            </a>
         </div>
         <div className="col-md-2 m-0">
             <a href="https://www.linkedin.com/feed/" className="image-button" target="_blank" rel="noopener noreferrer">
                <img src="linkedin.png" alt="linkedin"/>
            </a>
         </div>
        </div>
    </div>
    </center>
  );
};

export default SocialIcons;
