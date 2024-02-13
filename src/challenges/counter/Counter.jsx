import React, { useState } from "react";
import './counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    } 

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0)
    }

    return(
        <div className="counter-app">
            <h1>Counter App</h1>   
            <div className="show-counter">
                { counter }
            </div> 
            <div className="counter-buttons">
                <button 
                    className="decrement"
                    onClick={decrement}
                >
                    -
                </button>
                <button 
                    className="increment"
                    onClick={increment}
                >
                    +
                </button>
            </div>
            <div className="reset-btn">
                <button 
                    className="reset"
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter;