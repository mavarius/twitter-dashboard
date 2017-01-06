import regeneratorRuntime from 'regenerator-runtime'
import { takeEvery } from 'redux-saga'
import { call, put, select, take } from 'redux-saga/effects'

import { fetchSearch } from './actions/twitActions'

function* fetchData(action) {
  const response = yield call(fetchSearch, action.payload)
  const twitterData = response.data

  yield put({
    type: 'FETCH_DATA_SUCCESS',
    payload: twitterData
  })
}

function* watchTwitterSearch() {
  yield takeEvery('SEARCH', fetchData)
}

// ROOT SAGA
export default function* rootSaga() {
  yield [
    watchTwitterSearch()
  ]
}
