import {
    SET_LOADING,
    GET_CHARTS,
    CREATE_CHART,
    MODIFY_CHART,
    DELETE_CHART,
    CREATE_GROUP,
    ADD_USER,
    GET_GROUPS,
    ADD_CHART,
    GET_USERS
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
        case CREATE_GROUP:
                return {...state, groups: payload,  loading: false}
        case ADD_USER:
                return {...state, groups: payload,  loading: false}
        case ADD_CHART:
                return {...state, groups: payload,  loading: false}
        case GET_GROUPS:
                return {...state, groups: payload,  loading: false}
        case GET_USERS: 
                return {...state, users: payload, loading: false}
        default:
            return state
    }
}