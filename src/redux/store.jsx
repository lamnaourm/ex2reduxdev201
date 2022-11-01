import ReducerCounter from './ReducerCounter'

const { createStore } = require("redux");

const store = createStore(ReducerCounter);


export default store;