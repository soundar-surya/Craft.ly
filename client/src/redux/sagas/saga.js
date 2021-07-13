import { put, call, takeLatest, takeEvery } from 'redux-saga/effects'

import {
    SET_LOADING,
    CREATE_CHART,
    CREATE_CHARTS_REQUESTED,
    GET_CHARTS,
    GET_CHARTS_REQUESTED,
    MODIFY_CHART,
    MODIFY_CHART_REQUESTED,
    DELETE_CHART,
    DELETE_CHART_REQUESTED,
    UPDATE_STATE,
    UPDATE_STATE_REQUESTED
} from '../actions'

import { 
    createChart,
    getAllCharts,
    modifyChart,
    deleteChart,
    updateState
 } from '../api/chartApi'


 function* getChartsSaga() {
     yield put({type: SET_LOADING})

     const data = yield call(getAllCharts)
     yield put({type: GET_CHARTS, payload: data})
 }

 function* createChartSaga({payload}) {
    yield put({type: SET_LOADING})

    const data = yield call(createChart, payload)
    yield put({type: CREATE_CHART, payload: data})
 }

 function* modifyChartSaga({payload}) {
    yield put({type: SET_LOADING})

    const data = yield call(modifyChart, payload)
    yield put({type: MODIFY_CHART, payload: data})
 }

 function* deleteChartSaga({payload}) {
    yield put({type: SET_LOADING})

    const data = yield call(deleteChart, payload)
    yield put({type: DELETE_CHART, payload: data})
 }

 function* updateStateSaga({payload}) {
    yield put({type: SET_LOADING})

    const data = yield call(updateState, payload)
    yield put({type: UPDATE_STATE, payload: data})
 }

 export default function* watcherSaga() {
     yield takeEvery(GET_CHARTS_REQUESTED, getChartsSaga)
     yield takeLatest(CREATE_CHARTS_REQUESTED, createChartSaga)
     yield takeEvery(MODIFY_CHART_REQUESTED, modifyChartSaga)
     yield takeEvery(DELETE_CHART_REQUESTED, deleteChartSaga)
     yield takeEvery(UPDATE_STATE_REQUESTED, updateStateSaga)
 }