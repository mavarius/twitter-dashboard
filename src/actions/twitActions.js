import axios from 'axios'

export function fetchSearch(query) {
  return axios.get(`/api/twitter/${query}`)
}
