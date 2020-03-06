import React, { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import styled from "styled-components";
import { useResizeObserver } from "../../hooks";
import { getBrightnessForPower } from "../../utils/triacs";
import {
  LIGHT_RED_2,
  LIGHT_GREEN_2,
  LIGHT_GREEN_1,
  LIGHT_RED_1,
  RED,
  GREEN
} from "../../constants";

const CHART_HEIGHT = 300;
/*
  utils
*/
const generateChartData = (tickCount, powerPositions) => {
  const chartData = [];
  let position = 0;

  while (position < tickCount) {
    chartData.push({
      position,
      [LIGHT_RED_2]: getBrightnessForPower(powerPositions.red2[position]),
      [LIGHT_GREEN_2]: getBrightnessForPower(powerPositions.green2[position]),
      [LIGHT_GREEN_1]: getBrightnessForPower(powerPositions.green1[position]),
      [LIGHT_RED_1]: getBrightnessForPower(powerPositions.red1[position])
    });
    position++;
  }
  return chartData;
};

const formatPercent = num => `${parseFloat(num * 100).toFixed(1)}%`;

/*
  component
*/
// https://github.com/recharts/recharts/issues/1664#issuecomment-570227310
const XAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text dy={16} textAnchor="middle" fill="#666">
      {payload.value}
    </text>
  </g>
);

// http://recharts.org/en-US/examples/SimpleLineChart
const TriacsChart = ({ tickCount, powerPositions }) => {
  const chartWrapperRef = useRef(null);
  const { width: chartWidth } = useResizeObserver({ ref: chartWrapperRef });
  const commonLineProps = { type: "monotone", dot: false };

  return (
    <ChartWrapper ref={chartWrapperRef}>
      <LineChart
        width={chartWidth}
        height={CHART_HEIGHT}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 40
        }}
        data={generateChartData(tickCount, powerPositions)}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="position"
          ticks={[
            // 10 second intervals
            0,
            5 * 10 - 1,
            5 * 20 - 1,
            5 * 30 - 1,
            5 * 40 - 1,
            5 * 50 - 1,
            5 * 60 - 1
          ]}
          tick={<XAxisTick />}
        />
        <YAxis tickCount={6} tickFormatter={formatPercent} />
        <Tooltip formatter={formatPercent} />
        <Line dataKey={LIGHT_RED_2} stroke={RED} {...commonLineProps} />
        <Line dataKey={LIGHT_GREEN_2} stroke={GREEN} {...commonLineProps} />
        <Line dataKey={LIGHT_GREEN_1} stroke={GREEN} {...commonLineProps} />
        <Line dataKey={LIGHT_RED_1} stroke={RED} {...commonLineProps} />
      </LineChart>
    </ChartWrapper>
  );
};

/*
 styled
*/
const ChartWrapper = styled.div`
  height: ${CHART_HEIGHT}px;
`;

export default TriacsChart;
