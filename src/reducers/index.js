import { combineReducers } from 'redux'

import { user, tweet, tweets, stats, subSet } from './twit'

export default combineReducers({
  user: user,
  tweet: tweet,
  tweets: tweets,
  stats: stats,
  subSet: subSet
})
