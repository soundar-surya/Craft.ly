import {
    SET_LOADING,
    GET_CHARTS,
    CREATE_CHART,
    MODIFY_CHART,
    DELETE_CHART
    } from '../actions'
import initialState from '../initialState'

export default function chartReducer(state=initialState, {type, payload}) {
    switch(type) {
        case SET_LOADING:
            return {...state, loading: true}
        case GET_CHARTS:
            return {...state, arrayOfChartObjects: payload, loading: false}    
        case CREATE_CHART:
            return {...state, arrayOfChartObjects: payload, loading: false}
        case MODIFY_CHART:
            return {...state, arrayOfChartObjects: payload, loading: false}
        case DELETE_CHART:
                return {...state, arrayOfChartObjects: payload, loading: false}
        default:
            return state
    }
}