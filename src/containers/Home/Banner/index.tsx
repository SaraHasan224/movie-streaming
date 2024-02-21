import React, { useState } from "react";
import Slider from "react-slick";
const Fade = require("react-reveal/Fade");

import { HomePageBanner } from "../../../utils/json/movieData";

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
  pauseOnHover: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

type HomeBannerProps = {};
type BMovieProps = {
  name?: string;
  titleImg?: string;
  expandedView?: string;
  reference?: string;
  delay?: number;
};

export const Banner: React.FC<HomeBannerProps> = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [focusedMovie, setIsFocusedMovie] = useState<BMovieProps>({});

  const focusSliderObject = (state: boolean, object: any) => {
    setIsFocused(state);
    setIsFocusedMovie(object);
  };

  return (
    <>
      <section className="hero-section">
        <img src={Banner1} className="parentBanner" alt={"parent-banner"} />
        <img
          src={focusedMovie ? focusedMovie?.expandedView : Banner1}
          className="parentBanner"
          alt={"parent-banner"}
        />
        <div className="container">
          <div className="row bannerSlider">
            <div className="col-lg-8">
              <div className="hero-content text-white pt-100 pb-200 rpt-40 rpb-100">
                <span className="sub-title">Today</span>
                <span className="sub-title d-block wow fadeInUp delay-0-2s">
                  Show
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div>
              <Slider {...settings}>
                {HomePageBanner.map((banner, key) => {
                  return (
                    <div
                      className={
                        focusedMovie?.reference === banner?.reference &&
                        isFocused
                          ? "highlightedHomeBanner"
                          : "homeBanner"
                      }
                      key={`banner-${key}`}
                      onMouseEnter={() => focusSliderObject(true, banner)}
                      onMouseLeave={() => focusSliderObject(false, banner)}
                    >
                      <Fade className="fadeInUp" delay={banner?.delay}>
                        <div
                          className={
                            focusedMovie?.reference === banner?.reference &&
                            isFocused
                              ? "m-banner-focused"
                              : "m-banner"
                          }
                        >
                          <div className="icon">
                            <img src={banner?.titleImg} alt={banner?.name} />
                            <h6
                              className={
                                focusedMovie?.reference === banner?.reference &&
                                isFocused
                                  ? ""
                                  : "d-none"
                              }
                            >
                              <a href="/service-details#">{banner?.name}</a>
                            </h6>
                            <Fade
                              className={`fadeInUp delay-0-6s ${focusedMovie?.reference === banner?.reference && isFocused ? "" : "d-none"}`}
                            >
                              <div
                                className={`hero-btn hero-slider-btn ml-25 rml-25 mt-10 ${focusedMovie?.reference === banner?.reference && isFocused ? "" : "d-none"}`}
                              >
                                <a href="/contact#" className="theme-btn">
                                  Book Now
                                </a>
                              </div>
                            </Fade>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
