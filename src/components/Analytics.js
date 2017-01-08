import React, { Component } from 'react'
import { connect } from 'react-redux'

import User from './User'
import TweetList from './TweetList'
import TweetStats from './TweetStats'
import { Defaults, Bar, Line } from 'react-chartjs-2';

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
    this.renderHashtags = this.renderHashtags.bind(this)
  }

  renderChart(data, total, chartLabel) {
    const chartData = {
        labels: this.props.stats.timestamp,
        datasets: [{
            label: chartLabel,
            data: data,
            backgroundColor: 'rgba(0, 25, 41, .1)',
            borderColor: 'rgba(22, 147, 224, 1)',
            borderWidth: 0,
            pointRadius: 0
        }]
    }

    return (
      <div className="analyticsChart">
        <h2>{total} {chartLabel}</h2>
        <Line
          ref='chart'
          data={chartData}
          // width={100}
          // height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }

  renderHashtags() {
    const { hashtags } = this.props.stats
    let tags = Object.keys(hashtags)

    let maximum = tags.reduce((acc, tag) => (Math.max(hashtags[tag], acc)), 0)

    return tags.map((tag, i) => (
      <span key={`hastag${i}`} style={{fontSize: `${((hashtags[tag]/maximum * 5) + 2.5)}vmin`}}>{tag}</span>
    ))
  }

  render () {
    const { isolate } = this.props
    const { user, tweets, tweet, stats } = this.props

    return (
        <div className="content">
          {stats ?
            <div className="skew">
              <div className="unskew">
                <User user={user} />
              </div>
            </div>
          : null}

          {stats ?
            <div className="hashtagBlock">
              <h2>Analysis of last {tweets.length} tweets</h2>
              <div className="hashtags">
                {this.renderHashtags()}
              </div>
            </div>
          : null}

          {stats ?
          <div className="chartBlock">
            {stats ? this.renderChart(stats.retweeted, stats.totalRetweeted, 'Retweets') : null }
            {stats ? this.renderChart(stats.favorited, stats.totalFavorited, 'Favorites') : null }
          </div>
           : null}

          {/* <TweetStats tweet={tweet} /> */}
          {/* <TweetList tweets={tweets} isolate={isolate} /> */}
        </div>
    )
  }
}
