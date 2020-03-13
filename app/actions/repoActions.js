import * as types from './types';

export function getRepos() {
  return {
    type: types.GET_ALL_REPOS,
  };
}

export function getReposSuccess(response) {
  return {
    type: types.GET_ALL_REPOS_SUCCESS,
    response,
  };
}

export function getPullRequsts(repoName) {
  return {
    type: types.GET_PULL_REQUESTS,
    repoName,
  };
}

export function getIssues(repoName) {
  return {
    type: types.GET_ISSUES,
    repoName,
  };
}
