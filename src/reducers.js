
import { combineReducers } from 'redux';

import list from './list/services/reducers';
import about from './about/services/reducers';

export default combineReducers({
  list,
  about
});
