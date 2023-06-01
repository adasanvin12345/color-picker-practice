import React, { useState, useEffect } from 'react';
import "./feature.css";

function Feature({ colorChoosen, listOfColors, boxColors, setBoxColors, movesUndo, movesRedo, setMovesUndo, setMovesRedo, fillColor, setFillColor, setReset }) {

    const [featureButtonStyles, setFeatureButtonStyles] = useState({});

    const handleReset = () => {
        setMovesUndo([]);
        setMovesRedo([]);
        setReset(true);
        setBoxColors(Array(400).fill(-1));
        setFillColor([]);
    }


    const handleRedo = () => {
        if (movesRedo.length === 0) return;
        let lastElement = movesRedo[movesRedo.length - 1];
        let tempUndo = movesRedo;
        tempUndo.pop();
        setMovesRedo(tempUndo);
        setMovesUndo([...movesUndo, lastElement]);
        let arr = [...boxColors];
        arr[lastElement[0]] = lastElement[2];
        setBoxColors(arr);
        setFillColor([lastElement[0], lastElement[2]]);
    }
    const handleUndo = () => {
        if (movesUndo.length === 0) return;
        let lastElement = movesUndo[movesUndo.length - 1];
        let tempUndo = movesUndo;
        tempUndo.pop();
        setMovesUndo(tempUndo);
        setMovesRedo([...movesRedo, lastElement]);
        let arr = [...boxColors];
        arr[lastElement[0]] = lastElement[1];
        console.log(movesUndo)
        console.log(lastElement);
        setBoxColors(arr);
        setFillColor([lastElement[0], lastElement[1]]);
    }

    useEffect(() => {
        if (colorChoosen !== "white") setFeatureButtonStyles({ '--button-color': colorChoosen })
    }, [colorChoosen]);

    return (
        <div className='features_container'>
            <button onClick={handleUndo} className='features_button' style={featureButtonStyles}>Undo</button>
            <button onClick={handleRedo} className='features_button' style={featureButtonStyles}>Redo</button>
            <button onClick={handleReset} className='features_button' style={featureButtonStyles}>Reset</button>
        </div>
    )
}

export default Feature