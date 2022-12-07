import DonutChart from "react-donut-chart";
import COLORS from "./colors";

const reactDonutChartdata = [
  {
    label: "React",
    value: 150,
    color: COLORS.white
  },
  {
    label: "JavaScript",
    value: 150,
    color:  COLORS.secondary_dark
  },
  {
    label: "Kotlin",
    value: 100,
    color: COLORS.secondary_dark
  },
  {
    label: "Swift",
    value: 100,
    color: COLORS.secondary_dark
  },
  {
    label: "Java",
    value: 50,
    color: COLORS.secondary_dark
  }
];
const reactDonutChartBackgroundColor = [
  COLORS.pieColorOne,
  COLORS.pieColorTwo,
  COLORS.pieColorThree,
  COLORS.pieColorFour,
  COLORS.pieColorFive
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = COLORS.black;
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

function MyDonutChart() {
  return (
      <DonutChart
        width={500}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
  );
}
export default MyDonutChart