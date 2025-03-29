import { all } from 'redux-saga/effects';

// Example saga (you can add your own sagas)
function* exampleSaga() {
  // yield takeEvery('EXAMPLE_ACTION', exampleWorker);
}

export default function* rootSaga() {
  yield all([
    // exampleSaga(),
  ]);
}
