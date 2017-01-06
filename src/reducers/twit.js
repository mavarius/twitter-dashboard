// import twitState from '../initialState/twitState'

export default function twit (state = {}, action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.payload
    default:
      return state
  }
}
