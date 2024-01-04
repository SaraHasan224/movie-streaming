import { HOME_CONSTANTS } from '../actiontypes'


const initialState = {
  recommended: [],
}

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
    case HOME_CONSTANTS.HOMEPAGE.REQUEST:
      return state
    case HOME_CONSTANTS.HOMEPAGE.SUCCESS:
      return {
        ...state,
        recommended: action?.response?.recommended,
      }
    case HOME_CONSTANTS.HOMEPAGE.FAILURE:
      return state
		default:
			return state
	}
}
export default homeReducer