import { combineReducers } from 'redux';
import { loading, data } from './quote';

export default combineReducers({
  loading,
  data
});
