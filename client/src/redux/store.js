import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import reducers from './reducers'
import initialState from './initialState'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    {chartReducer: initialState},
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store