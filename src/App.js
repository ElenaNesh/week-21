import './App.css';
import { Chart } from "react-google-charts";

function App() {
    const data = [
      ["Задача", "Кол-во часов в день"],
      ["Работа", 11],
      ["Еда", 2],
      ["Общение", 2],
      ["Просмотр ТВ", 2],
      ["Сон", 7],
    ];

    const options = {
      pieHole: 0.4, 
      is3D: true, 
      pieStartAngle: 100, 
      sliceVisibilityThreshold: 0.02, 
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: "#233238",
          fontSize: 14,
        },
      },
      colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
    };
    return (
    <div className="chart-container">
      <h2 className="chart-title">Ежедневная активность</h2>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
