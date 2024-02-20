import React, { useState } from 'react';
import Slider from "react-slick";

import { HomePageBanner } from '../../../utils/json/movieData'

import Banner1 from "../../../assets/images/banner/banner-1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    focusOnSelect: true,
    pauseOnHover: true
};

type tProps = {}
type IFState = any;

const Banner:React.FC<tProps> = () => {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [focusedMovie, setIsFocusedMovie] = useState<Object>([]);
    const [focusedMovieBanner, setIsFocusedMovieBanner] = useState<Object>(HomePageBanner[0]?.expandedView);


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
                                            <div className={ focusedMovie?.reference === banner?.reference && isFocused ? "m-banner-focused" : "m-banner"}>
                                                <div className="icon">
                                                    <img src={banner?.titleImg} alt={banner?.name}/>
                                                    <h6 className={ focusedMovie?.reference === banner?.reference && isFocused ? "" : "d-none"}>
                                                        <a href="/service-details#">{banner?.name}</a>
                                                    </h6>
                                                        <div className={`hero-btn hero-slider-btn ml-25 rml-25 mt-10 ${focusedMovie?.reference === banner?.reference && isFocused ? "" : "d-none"}`}>
                                                            <a href="/contact#" className='theme-btn'>Book Now</a>
                                                        </div>
                                                </div>
                                            </div>
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