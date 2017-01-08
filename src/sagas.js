import regeneratorRuntime from 'regenerator-runtime'
import { takeEvery } from 'redux-saga'
import { call, put, select, take } from 'redux-saga/effects'

import { fetchSearch, analyze } from './actions/twitActions'

function* fetchData(action) {
  const userData = yield call(fetchSearch, `user/?screen_name=${action.payload}`)
  if (userData.status >= 400) console.error
    else yield put({ type: 'FETCH_USER_SUCCESS', payload: userData.data })

  const twitterFeed = yield call(fetchSearch, `statuses/?include_rts=false&trim_user=true&count=100&screen_name=${action.payload}`)
  if (twitterFeed.status >= 400) console.error
    else yield put({ type: 'FETCH_TWEETS_SUCCESS', payload: twitterFeed.data })

  if (twitterFeed.data !== null || twitterFeed.data !== undefined) {
    const analytics = yield call(analyze, twitterFeed.data)
    yield put({ type: 'ANALYZE', payload: analytics })
  }
}

function* isolateTweet(action) {
  const singleTweet = action.payload
  yield put({ type: 'ISOLATE_TWEET', payload: singleTweet })
}

function* watchTwitterSearch() {
  yield takeEvery('SEARCH', fetchData)
}

function* watchTweetSelect() {
  yield takeEvery('ISOLATE', isolateTweet)
}

// ROOT SAGA
export default function* rootSaga() {
  yield [
    watchTwitterSearch(),
    watchTweetSelect()
  ]
}
