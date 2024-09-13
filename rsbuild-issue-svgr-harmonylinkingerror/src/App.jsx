import "./App.css";
import { ReactComponent as PlayIcon } from "./assets/play.svg";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div
        style={{
          width: 50,
          height: 50,
          background: "white",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PlayIcon />
      </div>
    </div>
  );
};

export default App;
