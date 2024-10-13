import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>innerHTML issue</h1>
    <div id="background">
    </div>
    <p id="p1"></p>
    <button id="btn1">Click on me to insert <b>str1</b> into the background div</button>

    <p id="p2"></p>
    <button id="btn2">Click on me to insert <b>str2</b> into the background div</button>
  </div>
`;

const str1 = '<span style="white-space: break-spaces; background: red;">hello    </span>';
document.querySelector("#btn1").addEventListener("click", () => {
  document.querySelector("#background").innerHTML = str1;
});
document.querySelector("#p1").innerText = `str1: ${str1}`;

const str2 = '<span style="white-space: break-spaces; background: red;">hello&nbsp;&nbsp;&nbsp;&nbsp;</span>';
document.querySelector("#btn2").addEventListener("click", () => {
  document.querySelector("#background").innerHTML = str2;
});
document.querySelector("#p2").innerText = `str1: ${str2}`;
