import {GET_TEMP_DATA, TEMP_DATA_LOADING, ERROR_IN_DATA_LOADING} from './actions'
import dayToString from '../utils/dateToString'
const intialState = {
    isLoading: true,
    isError: false,
    data: {}
}

const climateReducers = (state= intialState, action) => {
    switch(action.type) {
        case GET_TEMP_DATA:  return {
            isLoading: false,
            isError: false,
            data: {
                currentTemp: action.data.current.temp,
                next7dayData: action.data.daily.map((data, index)=> ({day: dayToString(new Date(new Date(0).setUTCSeconds(data.dt)).getDay()), temp: data.temp.min, id: index}) )
            }
        }
        case TEMP_DATA_LOADING : return {
            isLoading: true,
            isError: false,
            data : {}
        }
        case ERROR_IN_DATA_LOADING: return {
            isLoading: false,
            isError: true,
            data : {}

        }
        default: return intialState
    }
}

export default climateReducers;