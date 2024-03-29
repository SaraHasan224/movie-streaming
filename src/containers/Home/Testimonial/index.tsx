import React from "react";

import { HomePageNews } from "../../../utils/json/movieData";

import Team1 from "../../../assets/images/testimonial/image.jpg";

type TestimonialProps = {};
export const Testomonial: React.FC<TestimonialProps> = () => {
  return (
    <div>
      <section className="testimonial-six pt-120 rpt-100 pb-90 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 news-parent">
              {HomePageNews.map((news, key) => (
                <div key={`testimonial-${key}`}>
                  <img src={news?.image} alt="news-banner" />
                  <div className="news">
                    <div className="author-description">
                      <div className="designation pt-140 rpt-140">
                        <h3>{news?.name}</h3>
                        <span>{news?.date}</span>
                      </div>
                    </div>
                    <p className="text-light">{news?.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12  col-xs-12">
              <div className="testimonial-item">
                <div className="row">
                  <div className="testimonial-top col-2">
                    <div className="testimonial-left">
                      <div className="testimonial-img">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="77"
                          height="77"
                          src={Team1}
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-dec col-9">
                    <h6>25.03.2022</h6>
                    <p>
                      An event titled "April battles and victory" dedicated to
                      the Armed Forces Day was held at the Nizami Cinema Center
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="testimonial-top col-2">
                    <div className="testimonial-left">
                      <div className="testimonial-img">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="77"
                          height="77"
                          src={Team1}
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-dec col-9">
                    <h6>25.03.2022</h6>
                    <p>
                      An event titled "April battles and victory" dedicated to
                      the Armed Forces Day was held at the Nizami Cinema Center
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="testimonial-top col-2">
                    <div className="testimonial-left">
                      <div className="testimonial-img">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="77"
                          height="77"
                          src={Team1}
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-dec col-9">
                    <h6>25.03.2022</h6>
                    <p>
                      An event titled "April battles and victory" dedicated to
                      the Armed Forces Day was held at the Nizami Cinema Center
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
