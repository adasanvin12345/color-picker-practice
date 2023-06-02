import React, { useState, useEffect } from 'react';
import "./gridBox.css";

function GridBox({ id, colorChoosen, listOfColors, boxColors, setBoxColors, movesUndo, movesRedo, setMovesUndo, setMovesRedo, fillColor, setFillColor }) {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [gridBoxStyle, setGridBoxStyle] = useState({});

    useEffect(() => {
        setGridBoxStyle({ backgroundColor: fillColor[0] !== -1 && fillColor[0] === id ? listOfColors[boxColors[id]] : (boxColors[id] !== -1) ? gridBoxStyle : "white" });
    }, [boxColors])

    useEffect(() => {
        setGridBoxStyle({ backgroundColor: isHovered ? colorChoosen : (boxColors[id] !== -1 ? listOfColors[boxColors[id]] : "white") });
    }, [isHovered, isClicked])


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        let curRow = Math.floor(id / 20), curCol = Math.floor(id % 20);
        let curColor = boxColors[id];
        let indexOfChoosenColor = listOfColors.indexOf(colorChoosen);
        console.log(id, colorChoosen, curRow, curCol, indexOfChoosenColor);
        setMovesUndo([...movesUndo, [id, curColor, indexOfChoosenColor]]);
        setMovesRedo([]);
        let arr = [...boxColors];
        arr[id] = indexOfChoosenColor;
        setBoxColors(arr);
        setIsClicked(true);
    };


    return (
        <div style={gridBoxStyle} className='gridBox' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        </div>
    )
}

export default GridBox