import streams from '../apis/streams';
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	DELETE_STREAM,
	EDIT_STREAM,
} from './types';
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

// Create Record
export const createStream = (formValues) => {
	return async (dispatch) => {
		const response = await streams.post('/streams', formValues);

		dispatch({ type: CREATE_STREAM, payload: response.data });
	};
};

// Retrieve all Streams
export const fetchStreams = () => {
	return async (dispatch) => {
		const response = await streams.get('/streams');

		dispatch({ type: FETCH_STREAMS, payload: response.data });
	};
};

// Retrieve a Stream
export const fetchStream = (id) => {
	return async (dispatch) => {
		const response = await streams.get(`/streams/${id}`);

		dispatch({ type: FETCH_STREAM, payload: response.data });
	};
};

// Delete a Stream
export const deleteStream = (id) => {
	return async (dispatch) => {
		await streams.delete(`/streams/${id}`);

		dispatch({ type: DELETE_STREAM, payload: id });
	};
};

// Edit a stream
export const editStream = (id, formValues) => {
	return async (dispatch) => {
		const response = await streams.put(`/streams/${id}`, formValues);

		dispatch({ type: EDIT_STREAM, payload: response.data });
	};
};
