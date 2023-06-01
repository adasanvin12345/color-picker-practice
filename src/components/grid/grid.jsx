import React, { useState, useEffect } from 'react';
import "./grid.css";
import GridBox from '../gridBox/gridBox';
import Feature from '../feature/feature';
import useLocalStorage from '../../hooks/hooks';

function Grid({ colorChoosen, listOfColors }) {
    const [boxes, setBoxes] = useState([]);
    const [movesUndo, setMovesUndo] = useLocalStorage("movesUndo", []);
    const [movesRedo, setMovesRedo] = useLocalStorage("movesRedo", []);
    const [boxColors, setBoxColors] = useLocalStorage("boxColors", Array(400).fill(-1));
    const [fillColor, setFillColor] = useState([-1, -1]);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        setBoxes(Array(400).fill(0));
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("movesUndo", JSON.stringify(movesUndo));
    // }, [movesUndo])
    // useEffect(() => {
    //     localStorage.setItem("movesRedo", JSON.stringify(movesRedo));
    // }, [movesRedo])
    // useEffect(() => {
    //     localStorage.setItem("boxColors", JSON.stringify(boxColors));
    // }, [boxColors])

    return (
        <div className='grid_outer_container'>
            <div className='grid_inner_container'>
                {
                    boxes.map((item, index) => {
                        return <GridBox key={index} id={index} colorChoosen={colorChoosen} listOfColors={listOfColors} boxColors={boxColors} setBoxColors={setBoxColors} movesUndo={movesUndo} setMovesUndo={setMovesUndo} setMovesRedo={setMovesRedo} movesRedo={movesRedo} fillColor={fillColor} setFillColor={setFillColor} reset={reset} />
                    })
                }
            </div>
            <div className='features_outer_container'>
                <Feature colorChoosen={colorChoosen} listOfColors={listOfColors} boxColors={boxColors} setBoxColors={setBoxColors} movesUndo={movesUndo} setMovesUndo={setMovesUndo} setMovesRedo={setMovesRedo} movesRedo={movesRedo} fillColor={fillColor} setFillColor={setFillColor} setReset={setReset} />

            </div>
        </div>
    )
}

export default Grid