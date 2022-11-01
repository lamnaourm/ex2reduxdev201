import React from 'react';
import { useSelector } from 'react-redux';

const DisplayCounter = () => {
    const val = useSelector(state => state.counter)
    return (
        <div>
            <h1>{val}</h1>
        </div>
    );
}

export default DisplayCounter;
