import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const ScreenShow = () => {

    const { counter } = useContext(CounterContext);

    return (
        <div>
            <h1 className='text-center text-4xl mb-5'>{counter}</h1>

        </div>
    );
};

export default ScreenShow;