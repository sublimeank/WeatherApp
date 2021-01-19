import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import climateReducer from './reducers'

const intialState = {
    isLoading: true,
    isError: false,
    data: {}
}


const store = createStore(climateReducer,intialState, applyMiddleware(thunk))

export default store;