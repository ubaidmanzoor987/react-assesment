import React, { useState } from "react";
import Draggable from "react-draggable";
import Chart from "react-apexcharts";
import drive from "../../assets/drive.PNG";

import { Card, CardBody, Container } from "reactstrap";
const areaColors = {
  series3: "#B7D6FC",
  series2: "#465D7D",
  series1: "#F6C060",
};
const ApexAreaCharts = ({ direction }) => {
  const [activeDrags, setActiveDrags] = useState(0);
  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      offsetX: -25,
      offsetY: -10,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: "straight",
    },
    legend: {
      position: "top",
      horizontalAlign: "start",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: [areaColors.series3, areaColors.series2, areaColors.series1],
    xaxis: {
      categories: [
        "7/12",
        "8/12",
        "9/12",
        "10/12",
        "11/12",
        "12/12",
        "13/12",
        "14/12",
        "15/12",
        "16/12",
        "17/12",
        "18/12",
        "19/12",
        "20/12",
      ],
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    tooltip: {
      shared: false,
    },
    yaxis: {
      opposite: direction === "rtl",
    },
  };
  // ** Chart Series
  const series = [
    {
      name: "Impression",
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
    },
    {
      name: "Clicks",
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
    },
    {
      name: "Conversion",
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
    },
  ];
  return (
    <Draggable onStart={onStart} onStop={onStop}>
      <Container>
        <Card className="p-3" style={{ borderRadius: 10 }}>
          <div className="d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start">
            <h4>Conversation Over time</h4>
            <div className="d-flex align-items-center mt-md-0 mt-1">
              <img src={drive} width="30" height="30" alt="dollar" />
            </div>
          </div>
          <CardBody>
            <Chart options={options} series={series} type="area" height={350} />
          </CardBody>
        </Card>
      </Container>
    </Draggable>
  );
};
export default ApexAreaCharts;
