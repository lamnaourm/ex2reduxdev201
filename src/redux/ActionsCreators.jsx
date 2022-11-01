import * as Actionstypes from './ActionsTypes'

export const incrementer = (step) => {
    return {
        type:Actionstypes.INC_ACTION,
        payload : step
    }
}

export const decrementer = () => {
    return {
        type:Actionstypes.DEC_ACTION
    }
}

export const initialiser = () => {
    return {
        type:Actionstypes.INIT_ACTION
    }
}