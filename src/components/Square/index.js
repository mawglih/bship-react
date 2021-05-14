import { useState } from 'react';
import './square.css';

const Square = ({
    value,
    onclick,
    squareId,
}) => {
    return (
        <div className="square" onClick={onclick} id={squareId}>
            {value}
        </div>
    )
}
export default Square;