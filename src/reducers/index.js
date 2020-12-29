import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer,
});

//NOTES TO SELF
// The reducer is the place where you set the name of the state for the redux store.
