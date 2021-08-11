import React from "react";


export const ColorPicker = ({onSelected}) => {
    const colors = ['#A8E0FF', '#70CAD1', '#3E517A', '#B08EA2'];
    return (
        <div className="color-list-wrapper">
        <ul className='colors-list'>
            {
                colors.map((color, index) => {
                    return (
                        <li
                            key={index}
                            className="color-list-item"
                            style={{backgroundColor: color}}
                            onClick={() => onSelected(color)}
                        >
                            <span
                            className="color-title"
                            >
                                {color}
                            </span>
                        </li>
                    )
                })
            }
        </ul>
        </div>
    );
}