import React from "react";
import { Header, ScrollUpBtn, Footer } from "../../components/index";

import { Banner } from "./Banner";
import { MovieList } from "./List";
import { Timeline } from "./Timeline";
import { Testomonial } from "./Testimonial";

import { CONSTANTS } from "../../utils/index";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <Header />
          <Banner />
        </div>
        <MovieList
          title="Currently Playing"
          listKey={CONSTANTS.MOVIE_LIST_TYPE.CURRENTLY_PLAYED}
        />
        <MovieList
          title="Coming Soon"
          listKey={CONSTANTS.MOVIE_LIST_TYPE.COMING_SOON}
        />
        <Timeline />
        <Testomonial />
        <Footer widgetSpace="pb-20" />
      </div>
      <ScrollUpBtn />
    </React.Fragment>
  );
};
