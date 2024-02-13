import { useState, useRef } from 'react';
import './counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const timerRef = useRef(null);

    const start = () => {
        timerRef.current = setInterval(() => {
            setCounter((prevCount) => prevCount + 1)
        }, 1000)
    }

    const stop = () => {
        clearInterval(timerRef.current)
    }

    return(
        <div className="counter-app">
            <h1>Counter App</h1>
            <div className="show-counter">
                { counter }
            </div>
            <div className='counter-buttons'>
                <button 
                    className='start'
                    onClick={start}
                >
                    Start
                </button>
                <button 
                    className='stop'
                    onClick={stop}
                >
                    Stop
                </button>
            </div>
        </div> 
    )
}

export default Counter;