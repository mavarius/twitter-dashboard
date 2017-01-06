import React from 'react'

const renderTweetList = props => (
  props.tweets.map ((tweet, i) => (
    <div key={`tweet${i}`}>
      <button onClick={() => props.isolate(tweet)}>this is a tweet</button>
      <br />
    </div>
  ))

)

const TweetList = props => (
  <div className="tweetList">
    {props.tweets ? renderTweetList(props) : null}
  </div>
)

export default TweetList
