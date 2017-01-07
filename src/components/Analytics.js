import React, { Component } from 'react'
import { connect } from 'react-redux'

import User from './User'
import TweetList from './TweetList'
import TweetStats from './TweetStats'
import { Defaults, Line } from 'react-chartjs-2';

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
export default class Analytics extends Component {
  constructor(props) {
    super(props)

    this.renderChart = this.renderChart.bind(this)
  }

  renderChart(data, chartLabel) {
    const chartData = {
        labels: this.props.stats.timestamp,
        datasets: [{
            label: chartLabel,
            data: data,
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    }

    return (
      <Line
        ref='chart'
        data={chartData}
        width={80}
        height={50}
        // options={{
            // maintainAspectRatio: false
        // }}
      />
    )
  }

  render () {
    const { isolate } = this.props
    const { user, tweets, tweet, stats } = this.props

    return (
      <div className="content">
        <User user={user} />

        {stats ? this.renderChart(stats.retweeted, 'Retweets') : null }

        {/* <TweetStats tweet={tweet} /> */}
        {/* <TweetList tweets={tweets} isolate={isolate} /> */}
      </div>
    )
  }
}
