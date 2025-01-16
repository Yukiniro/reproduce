import "./App.css";
import { Chart } from "@antv/g2";
import { Renderer as SVGRenderer } from "@antv/g-svg";
import { useEffect } from "react";

const renderer = new SVGRenderer();

const App = () => {
  useEffect(() => {
    const chart = new Chart({
      container: "container",
      width: 600,
      height: 400,
      renderer,
    });

    // 声明可视化
    chart.options({
      type: "view", // 视图节点
      data: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
      encode: {
        x: "year",
        y: "value",
      },
      children: [
        { type: "line" }, // Line 标记
        { type: "point" }, // Point 标记
      ],
    });

    // 渲染可视化
    chart.render();
  }, []);

  return (
    <div className="content">
      <div id="container"></div>
    </div>
  );
};

export default App;
