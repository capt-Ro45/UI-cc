import React from 'react';
import './UI CC.css';

function UICC() {
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          <h6>Course</h6>
          <h2>JavaScript Fundamentals</h2>
          <a href="#">View all chapters <span className="arrow">></span></a>
        </div>
        <div className="course-info">
          <div className="progress-container">
            <div className="progress"></div>
            <span className="progress-text">
              6/9 Challenges
            </span>
          </div>
          <h6>CHAPTER 4</h6>
          <h2 style={{ color: '#2C2464' }}>Callbacks & Closures</h2>
          <button className="btn">Continue <i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  );
}

export default UICC;
