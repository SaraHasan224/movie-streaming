import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HELPER } from "../../utils/index";
import { ALERT_ACTIONS } from "../../store/actions/index";

let timeoutTime
type tProps = {}
type IRootState = {
  toast: {
    message: string,
    type: string
  }
}

const AlertComponent:React.FC<tProps> = (props) => {
  let dispatch = useDispatch();

  const { message, type } = useSelector((state: IRootState) => state.toast);

  const clearAlert = () => {
      dispatch(ALERT_ACTIONS.clear())
  };

  useEffect(() => {
    return () => {
      if (!HELPER.isEmpty(message)) {
        dispatch(ALERT_ACTIONS.clear())
      }
      clearTimeout(timeoutTime);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  useEffect(() => {
    timeoutTime = setTimeout(() => {
      dispatch(ALERT_ACTIONS.clear())
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

return <div className="row">
  <div className={`col-12 alert_classes `}>
      <div className={`alertCustom ${type}`} role="alert">
        <div className={`alertAction  ${type}`}>
            <span className={`icomoon-check`}
              onClick={clearAlert}></span>
        </div>
        <div className="alertMsg">{message}</div>
      </div>
    </div>
  </div>;
}

export default AlertComponent;
