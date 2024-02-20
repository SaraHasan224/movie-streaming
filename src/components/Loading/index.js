import { useSelector } from "react-redux";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingSpinner() {
  const { isLoading } = useSelector(state => state.payment);

  return (<Backdrop
    data-testid="progressbar"
    sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
    open={(isLoading) || false}
  >
    <CircularProgress color="inherit" />
  </Backdrop>);
}
export default LoadingSpinner;

