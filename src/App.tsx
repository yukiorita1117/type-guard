import React from "react";
import "./App.css";
import HogeComponent from "./HogeComponent";

const HogeData: {
  [key: string]: {
    description: string;
  };
} = {
  first: {
    description: "ほげほげほげ",
  },
};

function App() {
  const id = "first";
  const sampleData = HogeData[id];
  console.log("sampleDataは？ : ", sampleData.description);

  return (
    <div className="App">
      <header className="App-header">
        {HogeData && (
          <HogeComponent description={sampleData?.description ?? ""} />
        )}
      </header>
    </div>
  );
}

export default App;
