import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBarIncrement.css';

const ProgressBarIncrement = (props) => (
  <button
    className="ProgressBarIncrement"
    onClick={() => props.changeCurrentBarValue(props.value)}
  >
    {props.value}
  </button>
);

ProgressBarIncrement.propTypes = {
  changeCurrentBarValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProgressBarIncrement;
