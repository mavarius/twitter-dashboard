// import twitState from '../initialState/twitState'

export default function twit (state = {}, action) {
  switch (action.type) {
    case 'CHANGE_DEFAULT':
      return action.payload
    default:
      return state
  }
}
