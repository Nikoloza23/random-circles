import { useState } from "react";
import "./App.css";

//:(
function App() {
  const [circles, setCircles] = useState([]);

  const colors = ["red", "blue", "green", "yellow", "black"];

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
      <div className="container">
        {circles.map((circle) => (
          <div key={cirlce.id}>
            <div
              style={{
                backgroundColor: circle.color,
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                position: "absolute",
                top: circle.posY,
                left: circle.posX,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
