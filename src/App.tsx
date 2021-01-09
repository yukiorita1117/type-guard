import React from "react";
import "./App.css";
import HogeComponent from "./HogeComponent";
import { HogeData } from "./hogeData";

// 本来は外部から渡される想定
const id = "first";

function App() {
  const descriptionData = HogeData[id];
  return (
    <div className="App">
      <header className="App-header">
        {descriptionData && (
          <HogeComponent description={descriptionData.description} />
        )}
      </header>
    </div>
  );
}

export default App;
