import React from 'react'

const renderTweetStats = tweet => (
  <div>A Single Tweet's Stats</div>
)

const TweetStats = props => (
  <div className="tweet">
    {props.tweet ? renderTweetStats(props.tweet) : null}
  </div>
)

export default TweetStats
