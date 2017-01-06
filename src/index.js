import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import Analytics from './components/Analytics'
import store from './store'

render(
  <Provider store={store}>
    <Layout>
      <Analytics/>
    </Layout>
  </Provider>,
  document.getElementById('root')
)
