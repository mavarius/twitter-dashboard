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
    const { search, user } = this.props

    let headerclass = "headerSearch"
    if (user) headerclass = "headerSearch collapse"

    return (
      <div className="container">
        <div className={headerclass}>
          <div className='skew'>
            <div className='unskew'>
              <h1 className="appTitle">Jitter Dash</h1>
              <SearchBar search={search} />
              <p>search for a twitter screen name to begin</p>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
