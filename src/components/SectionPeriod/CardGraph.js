import Chart from "react-apexcharts";
import { Circle } from "react-feather";
import { Card, CardTitle, Row, Col } from "reactstrap";

const CardGraph = (props) => {
  const options = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: "line",
        dropShadow: {
          enabled: true,
          top: 10,
          left: 2,
          blur: 5,
          opacity: 0.2,
        },
        offsetX: -20,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      grid: {
        borderColor: "#EBE9F1",
        padding: {
          top: -20,
          bottom: 5,
          left: 20,
        },
      },
      legend: {
        show: false,
      },
      colors: ["#DF87F2"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          inverseColors: false,
          gradientToColors: [props.primary],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 0,
        hover: {
          size: 5,
        },
      },
      xaxis: {
        labels: {
          offsetY: 5,
          offsetX: 5,
          style: {
            colors: "#B9B9C3",
            fontSize: "0.857rem",
            fontFamily: "Montserrat",
          },
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "Jan 15",
          "Jan 16",
          "Jan 17",
          "Jan 18",
          "Jan 19",
          "Jan 20",
          "Jan 21",
          "Jan 22",
          "Jan 23",
          "Jan 24",
          "Jan 25",
          "Jan 26",
        ],
        axisBorder: {
          show: false,
        },
        tickPlacement: "on",
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            colors: "#B9B9C3",
            fontSize: "0.857rem",
            fontFamily: "Montserrat",
          },
          formatter(val) {
            return val > 999 ? `${(val / 1000).toFixed(1)}k` : val;
          },
        },
      },
      tooltip: {
        x: { show: false },
      },
    },
    series = [
      {
        name: "Conversion",
        data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295],
      },
    ];
  return (
    <Card style={{ backgroundColor: "white", padding: 15, borderRadius: 10 }}>
      <Row>
        <Col xs={8}>
          <CardTitle className="fw-bold" tag="h6">
            Conversation Over time
          </CardTitle>
        </Col>
        <Col xs={4}>
          <div className="w-100 d-flex justify-content-end">
            <Circle className="px-1 mt-1" color="#B9B9C3" />
            <p
              style={{
                color: "grey",
                fontSize: 12,
                fontWeight: 500,
                marginTop: 7,
              }}
            >
              Conversation(Cumulative)
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-1">
        <Chart options={options} series={series} type="line" height="175" />
      </Row>
    </Card>
  );
};
export default CardGraph;
