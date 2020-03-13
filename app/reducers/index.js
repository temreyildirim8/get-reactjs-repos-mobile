/*
 * combines all th existing reducers
 */
import * as commonReducer from './commonReducer';
import * as loginReducer from './loginReducer';
import * as reposReducer from './reposReducer';
export default Object.assign(loginReducer, commonReducer, reposReducer);
