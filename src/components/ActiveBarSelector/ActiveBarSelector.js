import React from "react";
import { PropTypes } from "prop-types";
import "./ActiveBarSelector.css";

const ActiveBarSelector = ({ activeBarIndex, changeActiveBar, barValues }) => (
  <label className="ActiveBarSelector">
    <div className="ProgressBar_label">Select a progress bar</div>
    <select
      className="ActiveBarSelector__select"
      value={activeBarIndex}
      onChange={(e) => {
        changeActiveBar(Number(e.target.value));
      }}
    >
      {barValues.map((bar, i) => (
        <option key={i} value={i}>
          {`Progress bar #${i + 1}`}
        </option>
      ))}
    </select>
  </label>
);

ActiveBarSelector.propTypes = {
  barValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeBarIndex: PropTypes.number.isRequired,
  changeActiveBar: PropTypes.func.isRequired,
};

export default ActiveBarSelector;
