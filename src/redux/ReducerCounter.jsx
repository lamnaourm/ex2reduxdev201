import * as Actionstypes from './ActionsTypes'

const initial_state = {
    counter:20,
}
function ReducerCounter(state=initial_state, action){
    let newState = {...state};

    switch(action.type){
        case Actionstypes.INC_ACTION: newState.counter += action.payload;  break;
        case Actionstypes.DEC_ACTION: newState.counter -= 1; break;
        case Actionstypes.INIT_ACTION: newState.counter = 0 ;break;
    }
    return newState;
}

export default ReducerCounter;