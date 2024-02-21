import { ALERT_CONSTANTS } from "../actiontypes";
import { CONSTANTS } from "../../utils/index";

type actionProps = {
  type?: string;
  message?: string;
  hide?: boolean;
  clearAll?: boolean;
  group?: string;
  autoDismiss?: string;
};

interface alertReducerTypes {
  type: string;
  message: string;
  hide: boolean;
  group: string;
  autoDismiss: boolean;
  clearAll: boolean;
}

const initState: alertReducerTypes = {
  type: "",
  message: "",
  hide: true,
  group: CONSTANTS.ERROR_TYPE.TOAST,
  autoDismiss: false,
  clearAll: false,
};

export const alertReducer = (state = initState, action: actionProps) => {
  switch (action.type) {
    case ALERT_CONSTANTS.SUCCESS:
      return {
        ...state,
        type: "success",
        message: action.message,
        hide: true,
        group: action.group,
        autoDismiss: action.autoDismiss,
        clearAll: false,
      };
    case ALERT_CONSTANTS.ERROR:
      return {
        ...state,
        type: "error",
        message: action.message,
        hide: action.hide,
        group: action.group,
        autoDismiss: action.autoDismiss,
        clearAll: false,
      };
    case ALERT_CONSTANTS.WARNING:
      return {
        ...state,
        type: "warning",
        message: action.message,
        hide: true,
        group: action.group,
        autoDismiss: action.autoDismiss,
        clearAll: false,
      };
    case ALERT_CONSTANTS.CLEAR:
      return {
        ...initState,
        clearAll: true,
      };
    default:
      return state;
  }
};
