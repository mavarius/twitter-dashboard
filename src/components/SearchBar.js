import React from 'react'

const handleSearch = (e, search) => {
  e.preventDefault()
  const { searchInput } = e.target

  let query = ''

  if (searchInput.value[0] === '@') {
    query = `user/?screen_name=${searchInput.value.slice(1)}`
  } else {
    query = `user/?screen_name=${searchInput.value}`
  }

  // search(searchEntry, searchRating)
  console.log('query: ', query)
}

const renderSearchBar = (search) => (
  <div className="searchBar">
    <form onSubmit={e => handleSearch(e, search)}>
      <div className="searchBlock">
        <input id="searchInput" type="text" placeholder="@username" required />
        <button className="searchBtn"><i className="fa fa-search" aria-hidden="true" /></button>
      </div>
    </form>
  </div>
)

const SearchBar = search => (
  renderSearchBar(search.search)
)

export default SearchBar
