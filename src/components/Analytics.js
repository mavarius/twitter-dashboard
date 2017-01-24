import React, { Component } from 'react'
import { connect } from 'react-redux'

import User from './User'
import TweetList from './TweetList'
import TweetStats from './TweetStats'
import { Defaults, Bar, Line, defaults } from 'react-chartjs-2';

@connect(state => ({
  user: state.user,
  tweet: state.tweet,
  tweets: state.tweets,
  stats: state.stats,
  subSet: state.subSet
}), dispatch => ({
  search(query) {
    dispatch({type: 'SEARCH', payload: query})
  },
  isolate(singleTweet) {
    dispatch({type: 'ISOLATE', payload: singleTweet})
  },
  drill(drillSet) {
    dispatch({type: 'DRILL', payload: drillSet})
  },
  clearSubSet() {
    dispatch({type: 'CLEAR_SUBSET'})
  },
  persist(persistData) {
    dispatch({type: 'PERSIST', payload: persistData})
  }
}))
export default class Analytics extends Component {
  constructor(props) {
    super(props)

    this.renderChart = this.renderChart.bind(this)
    this.renderHashtags = this.renderHashtags.bind(this)
  }

  renderChart(data, total, chartLabel) {
    const { subSet, stats, drill, persist } = this.props

    const chartData = {
        labels: subSet ? subSet.timestamp : stats.timestamp,
        datasets: [{
            label: chartLabel,
            data: data,
            backgroundColor: 'rgba(0, 25, 41, .1)',
            borderColor: 'rgba(22, 147, 224, 1)',
            borderWidth: 0,
            pointRadius: 0
        }]
    }

    defaults.global.elements.point.hitRadius = 10

    const persistData = JSON.parse(JSON.stringify(stats))

    return (
      <div className="analyticsChart">
        <h2>{total} {chartLabel}</h2>
        <Line
          ref='chart'
          data={chartData}
          getElementAtEvent={(ele) => {
            const { tweets } = this.props
            let sliceMin = ele[0]._index - 5
            let sliceMax = ele[0]._index + 5

            if (sliceMin < 0) {
              sliceMax += Math.abs(sliceMin)
              sliceMin = 0
            } else if (sliceMax > (tweets.length - 1)) {
              sliceMin -= sliceMax - (tweets.length - 1)
              sliceMax = tweets.length - 1
            }

            let drillSet = JSON.parse(JSON.stringify(tweets))
            drillSet = drillSet.splice(sliceMin, 10)

            drill(drillSet)
            persist(persistData)
          }}
          options={{
            maintainAspectRatio: false,
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
    const { isolate, drill, persist, clearSubSet } = this.props
    const { user, tweets, tweet, stats, subSet } = this.props

    var retweetedData
    var favoritedData
    var retweetedTotal
    var favoritedTotal

    if (subSet) {
      retweetedData = subSet.retweeted
      favoritedData = subSet.favorited
      retweetedTotal = subSet.totalRetweeted
      favoritedTotal = subSet.totalFavorited
    } else if (stats) {
      retweetedData = stats.retweeted
      favoritedData = stats.favorited
      retweetedTotal = stats.totalRetweeted
      favoritedTotal = stats.totalFavorited
    }

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
              <div className="hashtags">
                {this.renderHashtags()}
              </div>
              <h2>Analysis of last {tweets.length} tweets</h2>
              {subSet ?
                <h3>
                  (Subset of {subSet.retweeted.length} tweets)<br/>
                  <button className='filterBtn' onClick={() => clearSubSet()}>return to full set</button>
                </h3>
               : <h3><br/><br/></h3>}
            </div>
          : null}

          {stats ?
          <div className="chartBlock">
            {stats ? this.renderChart(retweetedData, retweetedTotal, 'Retweets') : null }
            {stats ? this.renderChart(favoritedData, favoritedTotal, 'Favorites') : null }
          </div>
           : null}

          {/* <TweetStats tweet={tweet} /> */}
          {/* <TweetList tweets={tweets} isolate={isolate} /> */}
        </div>
    )
  }
}
