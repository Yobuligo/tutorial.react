import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = (props: any) => {
  const dataPointsValues = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
