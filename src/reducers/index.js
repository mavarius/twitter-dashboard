import { combineReducers } from 'redux'

import { user, tweet, tweets } from './twit'

export default combineReducers({
  user: user,
  tweet: tweet,
  tweets: tweets
})
