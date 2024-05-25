import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Reset = () => {

    const { counter, setCounter } = useContext(CounterContext);

    const handleReset = () => {
        setCounter(0);
    }


    return (
        <div>
            <button onClick={handleReset} className='btn btn-md btn-info'>Reset</button>
        </div>
    );
};

export default Reset;