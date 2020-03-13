import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getRepos() {
  return Api(ApiConstants.BASE_URL + ApiConstants.REPOS, null, 'get', null);
}
