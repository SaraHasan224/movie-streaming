import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Slider from "react-slick";

import { HomePageBanner } from '../../../utils/json/movieData'

import Banner1 from "../../../assets/images/banner/banner-1.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    focusOnSelect: true,
    pauseOnHover: true
};

interface IState {}
interface Iprops {}
type IFState = any;
interface IFMBState {
    
}

const Banner:React.FC<Iprops> = () => {

    const [isFocused, setIsFocused] = useState<IState>(false);
    const [focusedMovie, setIsFocusedMovie] = useState<IFState>([]);
    const [focusedMovieBanner, setIsFocusedMovieBanner] = useState<IFMBState>(HomePageBanner[0]?.expandedView);


    const focusSliderObject = (state, object) => {
        setIsFocused(state);
        setIsFocusedMovie(object);
        setIsFocusedMovieBanner(object?.expandedView)
    }

    return (
        <>
            <section className="hero-section">
                <img src={Banner1} className='parentBanner' alt={'parent-banner'}/>
                {/* <img src={focusedMovieBanner ?? Banner1} className='parentBanner' alt={'parent-banner'}/> */}
                <div className="container">
                    <div className="row bannerSlider">
                        <div className="col-lg-8">
                            <div className="hero-content text-white pt-100 pb-200 rpt-40 rpb-100">
                                <span className="sub-title">Today</span>
                                <span className="sub-title d-block wow fadeInUp delay-0-2s">Show</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <Slider {...settings}>
                                {HomePageBanner.map((banner, index) => {
                                    return <div
                                        className={ focusedMovie?.reference === banner?.reference && isFocused ? "highlightedHomeBanner" : "homeBanner"}
                                        onMouseEnter={() => focusSliderObject(true, banner)}
                                        onMouseLeave={() => focusSliderObject(false, banner)}
                                    >
                                        <Fade className="fadeInUp" delay={banner?.delay}>
                                            <div className={ focusedMovie?.reference === banner?.reference && isFocused ? "m-banner-focused" : "m-banner"}>
                                                <div className="icon">
                                                    <img src={banner?.titleImg} alt={banner?.name}/>
                                                    <h6 className={ focusedMovie?.reference === banner?.reference && isFocused ? "" : "d-none"}>
                                                        <a href="/service-details#">{banner?.name}</a>
                                                    </h6>
                                                    <Fade className={`fadeInUp delay-0-6s ${focusedMovie?.reference === banner?.reference && isFocused ? "" : "d-none"}`}>
                                                        <div className={`hero-btn hero-slider-btn ml-25 rml-25 mt-10 ${focusedMovie?.reference === banner?.reference && isFocused ? "" : "d-none"}`}>
                                                            <a href="/contact#" className='theme-btn'>Book Now</a>
                                                        </div>
                                                    </Fade>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;