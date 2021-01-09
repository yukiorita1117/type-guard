import React from "react";
import "./App.css";
import HogeComponent from "./HogeComponent";
import { HogeData } from "./hogeData";

const id = "";

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
