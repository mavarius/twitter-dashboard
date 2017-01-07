import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'

@connect(state => ({
  user: state.user,
  tweet: state.tweet,
  tweets: state.tweets,
  stats: state.stats
}), dispatch => ({
  search(query) {
    dispatch({type: 'SEARCH', payload: query})
  },
  isolate(singleTweet) {
    dispatch({type: 'ISOLATE', payload: singleTweet})
  }
}))
export default class Layout extends Component {
  render () {
    const { search } = this.props

    return (
      <div className="container">
        <div className="headerSearch">
          <h1 className="appTitle">Jitter Dash</h1>
          <SearchBar search={search} />
          <p>search for a twitter screen name to begin</p>
        </div>
        {this.props.children}
      </div>
    )
  }
}
