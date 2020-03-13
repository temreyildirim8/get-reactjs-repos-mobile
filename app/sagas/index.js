/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import getReposSaga from './getReposSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.GET_ALL_REPOS, getReposSaga)]);
}
