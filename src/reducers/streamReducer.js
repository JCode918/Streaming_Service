import {
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	DELETE_STREAM,
	EDIT_STREAM,
} from '../actions/types'

import _ from 'lodash';

// eslint-disable-next-line
export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload); // id doesn't need to be specified because this action's payload is only the id
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
