import { useState } from "react";
import "./App.css";

//:(
function App() {
  const [circles, setCircles] = useState([]);

  const colors = ["red", "blue", "green", "yellow", "black"];


  console.log(circles)
  const addCircle = () => {
    const id = Math.floor(Math.random() * colors.length);
    const posX = Math.floor(Math.random() * 1024);
    const posY = Math.floor(Math.random() * 766);
    const color = colors[id];

    setCircles((prev) => [...prev, { id, posX, posY, color }]);
  };

  const deleteCircle = () => {
    setCircles(null);
  };

  return (
    <div className="App">
      <button onClick={() => addCircle()}>REDO</button>
      <button onClick={() => deleteCircle()}>UNDO</button>
    </div>
  );
}

export default App;
