// import './App.css'
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
import React from 'react';
import { Helmet } from 'react-helmet';
import {
    ScrollUpBtn
} from "../../components"

function App() {
    return (
        <div>
            <Helmet>
                <title>Intigral</title>
                <link rel="shortcut icon" href="favicon.ico"></link>
            </Helmet>
            <div>
                Sara
                {/* <div className={rtl ? "direction-rtl" : ""}> */}
            </div>
            <ScrollUpBtn />
        </div>
    );
}

export default App;
