import { useSelector } from "react-redux";

// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";

interface Iprops {
    
}
interface IState {
    
}
interface IRootState {
    payment: {
      isLoading: boolean
    }
}

const LoadingSpinner:React.FC<Iprops> = (props) => {
  const { isLoading } = useSelector((state:IRootState) => state.payment);

  return (<div
    data-testid="progressbar"
    // sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
    // open={(isLoading) || false}
  >
    {/* <CircularProgress color="inherit" /> */}
  </div>);
}
export default LoadingSpinner;

