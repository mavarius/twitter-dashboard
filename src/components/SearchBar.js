import React from 'react'

const handleSearch = (e, search) => {
  e.preventDefault()
  const { searchInput } = e.target

  let query = ''

  if (searchInput.value[0] === '@') {
    query = searchInput.value.slice(1)
  } else {
    query = searchInput.value
  }

  search(query)
}

const renderSearchBar = search => (
  <div className="searchBlock">
    <form onSubmit={e => handleSearch(e, search)}>
      <div className="searchBar">
        <input id="searchInput" type="text" placeholder="@screen_name" required />
        <button className="searchBtn"><i className="fa fa-search" aria-hidden="true" /></button>
      </div>
    </form>
  </div>
)

const SearchBar = props => (
  renderSearchBar(props.search)
)

export default SearchBar
