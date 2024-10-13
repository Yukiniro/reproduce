import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const setup = () => {
  const offscreenCanvas = new OffscreenCanvas(100, 100);
  const gl = offscreenCanvas.getContext("webgl2");

  // 创建着色器程序
  const program = gl.createProgram();
  gl.linkProgram(program);
  gl.useProgram(program);
};

const worker = new Worker(URL.createObjectURL(new Blob([`(${setup})()`])));
console.log(worker);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Rspack and React logos to learn more</p>
    </div>
  );
}

export default App;
