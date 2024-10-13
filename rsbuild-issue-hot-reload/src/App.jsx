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

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
