import Axios from 'axios';

export const getChartData = ({ precision, period }) => {
  return Axios.get(
    `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`
  ).then(({ data }) => data);
};

export const convertToChartData = (dataArray) => {
  const lowArray = [];
  const highArray = [];
  for (const { Date: date, High: high, Low: low } of dataArray) {
    const timeStamp = new Date(date).getTime();
    lowArray.push({ x: timeStamp, y: low });
    highArray.push({ x: timeStamp, y: high });
  }

  return {
    lowArray,
    highArray,
  };
};

export const formatTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp);
  return date.toISOString().substr(11, 5);
};
