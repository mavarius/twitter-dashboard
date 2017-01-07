import { combineReducers } from 'redux'

import { user, tweet, tweets, stats } from './twit'

export default combineReducers({
  user: user,
  tweet: tweet,
  tweets: tweets,
  stats: stats
})
