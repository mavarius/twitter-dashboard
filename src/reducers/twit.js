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

export function stats (state = null, action) {
  switch (action.type) {
    case 'ANALYZE':
      return action.payload
    case 'PERSIST':
      return action.payload
    default:
      return state
  }
}

export function subSet (state = null, action) {
  switch (action.type) {
    case 'MAKE_SUBSET':
      return action.payload
    case 'CLEAR_SUBSET':
      return null
    default:
      return state
  }
}
