import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Increament = () => {

    const { counter, setCounter } = useContext(CounterContext);

    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }

    return (
        <div>
            <button onClick={handleIncrement} className='btn btn-md btn-primary'>+</button>
        </div>
    );
};

export default Increament;