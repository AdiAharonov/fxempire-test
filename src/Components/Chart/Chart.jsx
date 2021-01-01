import React, { useState, useEffect } from 'react';
import {
  getChartData,
  convertToChartData,
  formatTimeStamp,
} from '../../Services/UtilServices';
import { Styles } from '../../Consts';
import './_chart.scss';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

export const Chart = ({ currTimeStamp }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getChartData(currTimeStamp)
      .then((data) => setChartData(convertToChartData(data)))
      .catch((error) => console.log(error));
  }, [currTimeStamp]);

  console.log(chartData);

  return (
    <div className={Styles.CHART}>
      <XYPlot width={window.innerWidth - 20} height={500}>
        <HorizontalGridLines style={{ stroke: '#D6D6D6' }} />
        <VerticalGridLines style={{ stroke: '#D6D6D6' }} />
        <XAxis
          title="Time"
          style={{
            fontSize: '14px',
          }}
          tickFormat={formatTimeStamp}
          tickLabelAngle={-60}
          totalTicks={chartData.length}
          tickSizeOuter={-20}
          tickPadding={20}
        />
        <YAxis title="Value" />
        <LineSeries
          data={chartData.lowArray}
          style={{
            fill: 'none',
            stroke: 'green',
            strokeWidth: '2px',
          }}
        />
        <LineSeries
          data={chartData.highArray}
          style={{
            fill: 'none',
            stroke: 'red',
            strokeWidth: '2px',
          }}
        />
      </XYPlot>
    </div>
  );
};
