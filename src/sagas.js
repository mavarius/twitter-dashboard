import regeneratorRuntime from 'regenerator-runtime'

function* watchTwitterSearch() {
  console.log('watching');
}

// ROOT SAGA
export default function* rootSaga() {
  yield [
    watchTwitterSearch()
  ]
}
