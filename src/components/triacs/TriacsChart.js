import React, { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { useResizeObserver } from "../../hooks";
import { getPercentForPower } from "../../utils/triacs";
import {
  LIGHT_RED_2,
  LIGHT_GREEN_2,
  LIGHT_GREEN_1,
  LIGHT_RED_1,
  RED,
  GREEN
} from "../../constants";

const generateChartData = ({ tickCount, powerPositions }) => {
  const chartData = [];
  let position = 0;

  while (position < tickCount) {
    chartData.push({
      position,
      [LIGHT_RED_2]: getPercentForPower(powerPositions.red2[position]),
      [LIGHT_GREEN_2]: getPercentForPower(powerPositions.green2[position]),
      [LIGHT_GREEN_1]: getPercentForPower(powerPositions.green1[position]),
      [LIGHT_RED_1]: getPercentForPower(powerPositions.red1[position])
    });
    position++;
  }
  return chartData;
};

// http://recharts.org/en-US/examples/SimpleLineChart
const TriacsChart = ({ tickCount, powerPositions }) => {
  const chartRrf = useRef(null);
  const { width: chartWidth } = useResizeObserver({ ref: chartRrf });
  const commonLineProps = { type: "monotone", dot: false };

  return (
    <div ref={chartRrf} style={{ height: "200px" }}>
      <LineChart
        width={chartWidth}
        height={300}
        data={generateChartData({ tickCount, powerPositions })}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="position" />
        <YAxis />
        <Tooltip />
        <Line dataKey={LIGHT_RED_2} stroke={RED} {...commonLineProps} />
        <Line dataKey={LIGHT_GREEN_2} stroke={GREEN} {...commonLineProps} />
        <Line dataKey={LIGHT_GREEN_1} stroke={GREEN} {...commonLineProps} />
        <Line dataKey={LIGHT_RED_1} stroke={RED} {...commonLineProps} />
      </LineChart>
    </div>
  );
};

export default TriacsChart;
