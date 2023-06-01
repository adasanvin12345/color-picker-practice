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
      <div>
        <Colors handleColorChoosen={handleColorChoosen} listOfColors={COLORS} />
        {/* <Colors setColorChoosen={setColorChoosen} /> */}

        <Grid colorChoosen={colorChoosen} listOfColors={COLORS} />
      </div>

    </div>
  );
}

export default App;
