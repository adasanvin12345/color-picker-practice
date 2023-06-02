import React, { useState } from 'react';
import Colors from './components/colors/colors';
import Grid from './components/grid/grid';
import './App.css';

function App() {

  const COLORS = ['blue', 'green', 'gold', 'red', 'pink', 'cyan'];

  const [colorChoosen, setColorChoosen] = useState("white");

  const handleColorChoosen = (color) => {
    setColorChoosen(color);
  }

  console.log(colorChoosen)
  return (
    <div className="app">
      <h1>Color-Picker</h1>
      <h4>Please select a color and start filling the cells...</h4>
      <div>
        <Colors handleColorChoosen={handleColorChoosen} listOfColors={COLORS} />
        {/* <Colors setColorChoosen={setColorChoosen} /> */}

        <Grid colorChoosen={colorChoosen} listOfColors={COLORS} />
      </div>
      <h4>Also check by reloading...</h4>
    </div>
  );
}

export default App;
