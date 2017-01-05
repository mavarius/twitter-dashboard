import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class Layout extends Component {
  render () {
    return (
      <div className="container">
        <h1 className="appTitle">Twitter Dashboard</h1>
        <SearchBar search={this.search} />
        {this.props.children}
      </div>
    )
  }
}
