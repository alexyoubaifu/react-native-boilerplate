import { takeLatest, all } from 'redux-saga/effects';
import { ExampleTypes } from 'App/Stores/Example/Actions';
import { fetchUser } from './ExampleSaga';
import { startup } from './StartupSaga';

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ]);
}
