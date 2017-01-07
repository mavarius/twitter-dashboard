import axios from 'axios'
import moment from 'moment'

export function fetchSearch(query) {
  return axios.get(`/api/twitter/${query}`)
}

export function analyze(feed) {
  let analytics = {
    hashtags: {},
    timestamp: [],
    retweeted: [],
    favorited: [],
    totalRetweeted: 0,
    totalFavorited: 0
  }

  feed.forEach(tweet => {
    tweet.entities.hashtags.forEach(tag => {
      if (analytics.hashtags[`#${tag.text}`]) {
        analytics.hashtags[`#${tag.text}`] += 1
      } else {
        analytics.hashtags[`#${tag.text}`] = 1
      }
    })

    analytics.timestamp.push(moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').format('DD MMM YY'))
    analytics.retweeted.push(tweet.retweet_count)
    analytics.favorited.push(tweet.favorite_count)

    analytics.totalRetweeted += tweet.retweet_count
    analytics.totalFavorited += tweet.favorite_count
  })

  return analytics
}
