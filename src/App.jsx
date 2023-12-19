import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/banner";
import { useState } from "react";
import satData from "./components/satData"

function App() {
  const [sat, setSat] = useState(satData)
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))]

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    // console.log(displaySats) 
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes}
      />
      <Table sat={sat} />
    </div>
  );
}

const filterByType = currentType => {
  const displaySats = satData.filter((newSatDisplay) => {
    return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats);
}

export default App;