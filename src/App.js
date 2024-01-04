// import 'react-toastify/dist/ReactToastify.css';
// import 'react-modal-video/css/modal-video.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'photoswipe/dist/photoswipe.css'
// import '@fortawesome/fontawesome-free/css/all.css';
// import 'swiper/css/bundle';
// import './assets/css/flaticon.css'
// import './assets/css/animate.css'
// import './assets/css/style.css'
import React  from 'react';
import { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import {
  ErrorBoundary,
  PreLoader,
  ScrollUpBtn
} from './components';

import './App.css';
import {
  HISTORY,
  ROUTING_CONFIG
} from './utils';

function App() {
  //  Preloader 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  return (
    <Router history={HISTORY}>
      <ErrorBoundary>
        {isLoading ? <PreLoader /> :
          <div>
            <Helmet>
              <title>Restly - IT Solutions & Technology React Template</title>
              <link rel="shortcut icon" href="favicon.ico"></link>
            </Helmet>
            <Routes>
              {ROUTING_CONFIG.map((route, index) => {
                return <Route key={index} {...route} />;
              })}
            </Routes>
            <ScrollUpBtn />
          </div>
        }
      </ErrorBoundary>
    </Router>
  );
}

export default App;