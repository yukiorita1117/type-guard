import React from "react";
import "./App.css";
import HogeContent from "./HogeComponent";

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
  console.log("sampleDataは？ : ", sampleData);

  return (
    <div className="App">
      <header className="App-header">
        {/* {HogeData && (
          <HogeContent description={sampleData?.description ?? ""} />
        )} */}
      </header>
    </div>
  );
}

export default App;
