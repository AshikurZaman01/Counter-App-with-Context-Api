import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Decrement = () => {

    const { counter, setCounter } = useContext(CounterContext);

    const handleDec = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    return (
        <div>
            <button onClick={handleDec} className='btn btn-md btn-error'>-</button>
        </div>
    );
};

export default Decrement;