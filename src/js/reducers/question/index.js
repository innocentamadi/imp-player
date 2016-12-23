import {combineReducers} from 'redux';
import all from './questionReducer';
import current from './navReducer';

const rootReducer = combineReducers({
  all,
  current
});

export default rootReducer;
