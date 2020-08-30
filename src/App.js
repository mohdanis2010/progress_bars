import React, { useState, useEffect } from "react";
import "./App.css";
import ActiveBarSelector from "./components/ActiveBarSelector";
import BarWrapper from "./BarWrapper";
import ProgressBar from "./components/ProgressBar";
import { getAppDataService } from "./api";

const App = () => {
  const [buttonValues, setbuttonValues] = useState([]);
  const [barValues, setbarValues] = useState([]);
  const [activeBarIndex, setactiveBarIndex] = useState(0);

  useEffect(() => {
    getAppDataService().then(({ buttonValues, barValues }) => {
      setbuttonValues(buttonValues);
      setbarValues(barValues);
    });
  }, []);

  const changeCurrentBarValue = (amount) => {
    const newBarValues = barValues.slice();
    newBarValues[activeBarIndex] = Math.max(
      0,
      newBarValues[activeBarIndex] + amount
    );
    setbarValues(newBarValues);
  };

  const changeActiveBar = (activeBarIndex) => {
    setactiveBarIndex(activeBarIndex);
  };
  console.log('Load', buttonValues)
  return (
    <>
    <header className="App__header">
        <div className="App__title">Progress Bars</div>
    </header>
    <div className="App">
         {buttonValues.length === 0 && 
        <div className="App__loader">
        LOADING....
        </div>
      }
      
      {buttonValues.length !== 0 && 
      <>
      
      <BarWrapper
        barValues={barValues}
        activeBarIndex={activeBarIndex}
        changeActiveBar={changeActiveBar}
      />

      <ActiveBarSelector
        activeBarIndex={activeBarIndex}
        barValues={barValues}
        changeActiveBar={changeActiveBar}
      />

      <ProgressBar
        buttonValues={buttonValues}
        changeCurrentBarValue={changeCurrentBarValue}
      />
      </>
      }
    </div>
    </>
  );
};

export default App;
