/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  repos: {},
};

export const reposReducer = createReducer(initialState, {
  [types.GET_ALL_REPOS](state) {
    return {
      ...state,
    };
  },
  [types.GET_ALL_REPOS_SUCCESS](state, action) {
    return {
      ...state,
      repos: action.response,
    };
  },
});
