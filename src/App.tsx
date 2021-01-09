import React from "react";
import "./App.css";
import HogeComponent from "./HogeComponent";
import { HogeData } from "./hogeData";

// TODO eslint / prettier を入れないとerrorが出ないっぽい？
// cosmeと同じルールで縛る必要がある。
const id = "";

function App() {
  // const sampleData = HogeData[id];
  // console.log("sampleDataは？ : ", sampleData.description);
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
