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
    GET_GROUPS,
    GET_GROUPS_REQUESTED,
    CREATE_GROUP,
    CREATE_GROUP_REQUESTED,
    ADD_USER,
    ADD_USER_REQUESTED,
    ADD_CHART,
    ADD_CHART_REQUESTED
} from '../actions'

import { 
    createChart,
    getAllCharts,
    modifyChart,
    deleteChart,
    getAllGroups,
    createGroup,
    addUser,
    addChart
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

 function* getGroupsSaga() {
    yield put({type: SET_LOADING})

    const data = yield call(getAllGroups)
    yield put({type: GET_GROUPS, payload: data})
 }

 function* createGroupSaga({payload}) {
    yield put({type: SET_LOADING})

    const data = yield call(createGroup, payload)
    yield put({type: CREATE_GROUP, payload: data})
 }

 function* addUserSaga({payload}) {
    yield put({type: SET_LOADING})

    const data = yield call(addUser, payload)
    yield put({type: ADD_USER, payload: data})
 }

 function* addChartSaga({payload}) {
   yield put({type: SET_LOADING})

   const data = yield call(addChart, payload)
   yield put({type: ADD_CHART, payload: data})
}

 export default function* watcherSaga() {
     yield takeEvery(GET_CHARTS_REQUESTED, getChartsSaga)
     yield takeLatest(CREATE_CHARTS_REQUESTED, createChartSaga)
     yield takeEvery(MODIFY_CHART_REQUESTED, modifyChartSaga)
     yield takeEvery(DELETE_CHART_REQUESTED, deleteChartSaga)
     yield takeEvery(GET_GROUPS_REQUESTED, getGroupsSaga)
     yield takeEvery(CREATE_GROUP_REQUESTED, createGroupSaga)
     yield takeEvery(ADD_USER_REQUESTED, addUserSaga)
     yield takeEvery(ADD_CHART_REQUESTED, addChartSaga)
 }