import React from "react";
import { PropTypes } from "prop-types";
import "./ActiveBar.css";

const ActiveBar = ({ active, changeActiveBar, pos, value }) => {
  const barWidth = Math.min(value, 100);
  return (
    <div
      role="button"
      tabIndex="0"
      className={`Bar ${active ? "Bar--active" : ""}`}
      onClick={() => changeActiveBar(pos)}
      onKeyDown={(e) => {
        // for accessibility, select this item when Enter is pressed
        if (e.keyCode === 13) changeActiveBar(pos);
      }}
    >
      <span>{`${value} %`}</span>
      <div
        style={{ width: `${barWidth}%` }}
        className={`Bar__fill ${value > 100 ? "Bar__fill--over-warning" : ""}`}
      />
    </div>
  );
};

ActiveBar.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActiveBar: PropTypes.func.isRequired,
  pos: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default ActiveBar;
