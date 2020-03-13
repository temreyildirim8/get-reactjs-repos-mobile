// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as repoActions from './repoActions';
import * as commonActions from './commonActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  repoActions,
  commonActions,
);
