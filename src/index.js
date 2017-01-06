import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import SearchView from './components/SearchView'
import Analytics from './components/Analytics'
import store from './store'

render(
  <Provider store={store}>
    <Layout>
      <SearchView/>
      <Analytics/>
    </Layout>
  </Provider>,
  document.getElementById('root')
)
