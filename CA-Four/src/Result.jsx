import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

const ResultComponent = ({ pageNavigation, percentage }) => {
  const confirmQuit = () => {
    pageNavigation(1); // Restart the quiz
  };

  return (
    <div className='result-container'>
      <h2 className='result-heading'>Result</h2>
      <div className='result-box'>
        <h3 className='result-phrase'>Well done! Keep it up!</h3>
        <h2 className='result-score'>Your score is {percentage.toFixed(2)}%</h2>
        <button className='quiz-option quit-btn' onClick={confirmQuit}>Restart</button>
        
      </div>
    </div>
  );
};

ResultComponent.propTypes = {
  pageNavigation: PropTypes.func.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Result;
