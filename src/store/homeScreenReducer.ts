import produce from 'immer'
import {AnyAction, Dispatch} from 'redux'
import {createAction} from './util'
import {getHomeScreenEntry} from '../services/contentfulStore'

const actionTypes = {
	FETCH_HOME_CONTENT_START: 'FETCH_HOME_CONTENT_START',
	FETCH_HOME_CONTENT_SUCCESS: 'FETCH_HOME_CONTENT_SUCCESS',
	FETCH_HOME_CONTENT_FAIL: 'FETCH_HOME_CONTENT_FAIL',
}

const actions = {
	getHomeContentStart: createAction(actionTypes.FETCH_HOME_CONTENT_START),
	getHomeContentSuccess: createAction(actionTypes.FETCH_HOME_CONTENT_SUCCESS),
	getHomeContentFail: createAction(actionTypes.FETCH_HOME_CONTENT_FAIL),
}

const initialState = {
	data: null,
	isLoading: false,
	error: null,
}

export const homeScreenReducer = (state = initialState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_HOME_CONTENT_START:
				draft.error = null
				draft.isLoading = true
				break
			case actionTypes.FETCH_HOME_CONTENT_SUCCESS:
				draft.data = action.payload
				draft.error = null
				draft.isLoading = false
				break
			case actionTypes.FETCH_HOME_CONTENT_FAIL:
				draft.data = action.payload
				draft.error = action.error
				draft.isLoading = false
				break
		}
	})

export const getHomeContent = () => (dispatch: Dispatch) => {
	dispatch(actions.getHomeContentStart())

	getHomeScreenEntry()
		.then(data => {
			dispatch(actions.getHomeContentSuccess(data))
		})
		.catch(error => dispatch(actions.getHomeContentFail(error)))
}
