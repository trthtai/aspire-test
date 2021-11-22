import { combineReducers } from 'redux';

import { ApplicationState } from 'src/types';

import balanceReducer from './balanceReducer';

export default combineReducers<ApplicationState>({
	balance: balanceReducer,
});
