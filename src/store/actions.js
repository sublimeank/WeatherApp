import {api as ClimateEndPoint, climateKey} from '../remote/climateApi'

const GET_TEMP_DATA = 'GET_TEMP_DATA'
const TEMP_DATA_LOADING = 'TEMP_DATA_LOADING'
const ERROR_IN_DATA_LOADING = 'ERROR_IN_DATA_LOADING'



const getTempData = (payload) => {
    return {
        type: GET_TEMP_DATA,
        data: payload
    }
} 


const fetchTempData = (lat, long) => {
    return (dispatch) => {
        dispatch({type: TEMP_DATA_LOADING})
        ClimateEndPoint.get(`/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${climateKey}&units=metric`)
        .then(response => { dispatch(getTempData(response.data))})
        .catch(err => dispatch({type: ERROR_IN_DATA_LOADING}))
    }
}

export {fetchTempData, GET_TEMP_DATA, TEMP_DATA_LOADING, ERROR_IN_DATA_LOADING}