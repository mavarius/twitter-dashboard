import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import User from './User'
import TweetList from './TweetList'
import TweetStats from './TweetStats'

@connect(state => ({
  user: state.user,
  tweet: state.tweet,
  tweets: state.tweets
}), dispatch => ({
  search(query) {
    dispatch({type: 'SEARCH', payload: query})
  },
  isolate(singleTweet) {
    dispatch({type: 'ISOLATE', payload: singleTweet})
  }
}))
export default class Analytics extends Component {
  render () {
    const { search, isolate } = this.props
    const { user, tweets, tweet } = this.props

    return (
      <div className="container">
        <SearchBar search={search} />
        <User user={user} />
        <TweetStats tweet={tweet} />
        <TweetList tweets={tweets} isolate={isolate} />
      </div>
    )
  }
}
