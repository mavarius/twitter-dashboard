import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'

@connect(state => ({
  twit: state.twit
}), dispatch => ({
  search(query) {
    dispatch({type: 'SEARCH', payload: query})
  }
}))
export default class SearchView extends Component {
  render () {
    const { search } = this.props

    return (
      <div className="container">
        <h1 className="appTitle">Search</h1>
        <SearchBar search={search} />
      </div>
    )
  }
}
