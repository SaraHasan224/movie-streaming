import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HELPER } from "../../utils/index";
import { ALERT_ACTIONS } from "../../store/actions/index";

type AlertProps = {};
type AlertState = {
  toast: {
    message: string;
    type: string;
  };
};

export const AlertComponent: React.FC<AlertProps> = () => {
  let dispatch = useDispatch();

  const { message, type } = useSelector((state: AlertState) => state.toast);

  const clearAlert = () => {
    dispatch(ALERT_ACTIONS.clear());
  };

  useEffect(() => {
    return () => {
      if (!HELPER.isEmpty(message)) {
        dispatch(ALERT_ACTIONS.clear());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className={`col-12 alert_classes `}>
        <div className={`alertCustom ${type}`} role="alert">
          <div className={`alertAction  ${type}`}>
            <span className={`icomoon-check`} onClick={clearAlert}></span>
          </div>
          <div className="alertMsg">{message}</div>
        </div>
      </div>
    </div>
  );
};
