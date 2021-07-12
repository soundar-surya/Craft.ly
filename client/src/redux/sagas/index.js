import { spawn } from 'redux-saga/effects'

import sagas from './saga'

export default function* rootSaga() {
    yield spawn(sagas)
}