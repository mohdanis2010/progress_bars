import React from 'react';
import { PropTypes } from 'prop-types';
import './ProgressBar.css';
import ProgressBarIncrement from '../ProgressBarIncrement';

const ProgressBar = ({buttonValues, changeCurrentBarValue}) => (
  <div className="ProgressBarIncrementWrapper">
    {buttonValues.map((buttonValue, i) => (
      <ProgressBarIncrement
        key={i}
        value={buttonValue}
        changeCurrentBarValue={changeCurrentBarValue}
      />
    ))}
  </div>
);

ProgressBar.propTypes = {
  buttonValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeCurrentBarValue: PropTypes.func.isRequired,
};

export default ProgressBar;
