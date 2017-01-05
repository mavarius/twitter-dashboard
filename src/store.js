import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

let middleware = [
  sagaMiddleware,
  logger()
]

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)
))

sagaMiddleware.run(rootSaga)

export default store
