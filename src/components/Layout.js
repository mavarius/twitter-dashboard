import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    return (
      <div className="container">
        <h1 className="appTitle">Jitter Dash</h1>
        {this.props.children}
      </div>
    )
  }
}
