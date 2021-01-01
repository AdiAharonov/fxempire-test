import React, { useState } from 'react';
import { Chart } from './Components/Chart/Chart';
import { Tabs } from './Components/Tabs/Tabs';
import { TimeStamps, Styles } from './Consts';
import './App.scss';

export const App = () => {
  const [currTimeStamp, setCurrTimeStamp] = useState({
    period: 5,
    precision: TimeStamps.MINUETS,
  });

  return (
    <div className={Styles.APP}>
      <Chart currTimeStamp={currTimeStamp} />
      <Tabs setCurrTimeStamp={setCurrTimeStamp} />
    </div>
  );
};
