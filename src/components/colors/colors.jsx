import React from 'react';
import ColorBox from '../colorBox/colorBox';
import "./colors.css";

function Colors({ handleColorChoosen, listOfColors }) {



    return (
        <div className='colors_outer_container'>
            <div className='colors_inner_container'>
                {
                    listOfColors.map((color, index) => {
                        return <ColorBox key={index + 1000} color={color} handleColorChoosen={handleColorChoosen} />
                    })
                }
            </div>
        </div>

    )
}

export default Colors