import counterRducer from "./reducers";

import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    counter:counterRducer
})
export default rootReducer;