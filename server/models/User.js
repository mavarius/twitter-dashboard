const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

exports.search = (query, cb) => {
  client.get('statuses/user_timeline', query, (err, tweets, response) => {
    if (err) return cb(err)
    cb(null, tweets)
  })
}
