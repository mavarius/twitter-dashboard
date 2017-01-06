export function user (state = null, action) {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export function tweets (state = null, action) {
  switch (action.type) {
    case 'FETCH_TWEETS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export function tweet (state = null, action) {
  switch (action.type) {
    case 'ISOLATE_TWEET':
      return action.payload
    default:
      return state
  }
}
