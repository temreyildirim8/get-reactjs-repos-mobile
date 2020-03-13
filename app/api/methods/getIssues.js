import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getIssues(repoName) {
  return Api(
    ApiConstants.BASE_URL +
      ApiConstants.REPO_DETAIL +
      repoName +
      ApiConstants.ISSUES,
    null,
    'get',
    null,
  );
}
