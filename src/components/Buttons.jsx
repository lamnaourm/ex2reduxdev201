import React from 'react';
import { useDispatch } from 'react-redux';
import * as ActionsCreators from '../redux/ActionsCreators'

const Buttons = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(ActionsCreators.incrementer(5))}>Incrementer</button>
            <button onClick={() => dispatch(ActionsCreators.decrementer())}>Decrementer</button>
            <button onClick={() => dispatch(ActionsCreators.initialiser())}>initialier</button>
        </div>
    );
}

export default Buttons;
