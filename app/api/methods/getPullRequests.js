import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getPullRequests(repoName) {
  return Api(
    ApiConstants.BASE_URL +
      ApiConstants.REPO_DETAIL +
      repoName +
      ApiConstants.PULL_REQUESTS,
    null,
    'get',
    null,
  );
}
