import React from "react";
import { PropTypes } from "prop-types";
import Bar from "../components/ActiveBar/ActiveBar";
import "./BarWrapper.css";

const BarWrapper = ({ barValues, changeActiveBar, activeBarIndex }) => (
  <div className="BarWrapper">
    {barValues.map((barValue, i) => (
      <Bar
        key={i} // the key must be the index since there could be two identical values
        pos={i}
        value={barValue}
        changeActiveBar={changeActiveBar}
        active={i === activeBarIndex}
      />
    ))}
  </div>
);

BarWrapper.propTypes = {
  activeBarIndex: PropTypes.number.isRequired,
  barValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeActiveBar: PropTypes.func.isRequired,
};

export default BarWrapper;
