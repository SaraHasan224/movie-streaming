import React from 'react';
import { Helmet } from 'react-helmet';
import {
    Header,
    ScrollUpBtn,
    Footer
} from "../../components"
import Banner from './Banner';
import MovieList from './List';
import { CONSTANTS } from '../../utils';
import Timeline from './Timeline';
import Testomonial from './Testimonial';

function App() {
    return (
        <div>
            <Helmet>
                <title>Intigral</title>
                <link rel="shortcut icon" href="favicon.ico"></link>
            </Helmet>
                {/* <div className={rtl ? "direction-rtl" : ""}> */}
            <div> 
            <div>
                <Header />
                <Banner />
            </div>
            <MovieList
                title="Currently Playing"
                pageLink=""
                listKey={CONSTANTS.MOVIE_LIST_TYPE.CURRENTLY_PLAYED}
            />
            <MovieList
                title="Coming Soon"
                pageLink=""
                listKey={CONSTANTS.MOVIE_LIST_TYPE.COMING_SOON}
            />
            <Timeline/>
            <Testomonial />
            <Footer widgetSpace="pb-20" />
            </div>
            <ScrollUpBtn />
        </div>
    );
}

export default App;
