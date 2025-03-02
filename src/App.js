import logo from "./logo.svg";
import "./App.css";

function App() {
  const style = {backgroundColor:'blue'}
  return (
      <div class="parent">
        <div style={style} class="div1">1</div>
        <div style={style} class="div2">2</div>
        <div style={style} class="div4">4</div>
        <div style={style} class="div5">5</div>
        <div style={style} class="div6">6</div>
      </div>
  );
}

export default App;
