import { HOME_CONSTANTS } from "../actiontypes";

type actionProps = {
  type?: string;
  response?: {
    recommended?: object;
  };
};
export interface homeState {
  recommended: object;
}
const initialState: homeState = {
  recommended: {},
};

export const homeReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case HOME_CONSTANTS.HOMEPAGE.REQUEST:
      return state;
    case HOME_CONSTANTS.HOMEPAGE.SUCCESS:
      return {
        ...state,
        recommended: action?.response?.recommended,
      };
    case HOME_CONSTANTS.HOMEPAGE.FAILURE:
      return state;
    default:
      return state;
  }
};
