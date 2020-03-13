import { put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import * as repoActions from 'app/actions/repoActions';
// import * as navigationActions from 'app/actions/navigationActions';
import * as commonActions from 'app/actions/commonActions';
import getRepos from '../api/methods/getRepos';

export default function* getReposSaga() {
  const response = yield call(getRepos);
  // yield put(commonActions.enableLoader());
  window.console.log('response1', response);
  if (response && !response.message) {
    // yield put(commonActions.disableLoader());
    window.console.log('response2', response);
    yield put(repoActions.getReposSuccess(response));
    // yield call(navigationActions.navigateToRepo);
  } else {
    // yield put(commonActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Getting Repos', response.message);
    }, 100);
  }
}
