import React from 'react';
import aboutThumb5 from '../../../assets/images/timeline/about-five.jpg'
import aboutCircle from '../../../assets/images/timeline/about-circle-dots.png'

const Timeline = () => {
  return (
    <>
      <div class="timeline">
        <div class="events">
          <ol>
            <ul>
              <li>
                <a href="#0" class="selected">Early Life</a>
              </li>
              <li>
                <a href="#1">Career</a>
              </li>
              <li>
                <a href="#2">Philosophy</a>
              </li>
              <li>
                <a href="#3">Legacy</a>
              </li>
            </ul>
          </ol>
        </div>
      </div>

      <div class="events-content">
        <ol>
          <li id="0" class="selected">
            <section className="about-section style-five py-30 rpy-100">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="about-fiver-image rel rmb-60">
                      <img src={aboutThumb5} alt="About" />
                      <img className="about-bg-circle" src={aboutCircle} alt="About" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="about-content rpl-0">
                      <div className="feature-item">
                        <div className="feature-content">
                          <h6>OPERETTA</h6>
                          <h5>Arshin Mal Alan</h5>
                          <p>
                          Arshin Mal Alan is a 4-act operetta composed by Azerbaijani composer Uzeyir Hajibeyov. The libretto of the work was also written by Uzeyir Hajibeyov in 1913 in St. Petersburg. The premiere of the opera was held on October 25, 1913 at the Haji Zeynelabidin Tagiyev Theater in Baku.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="about-content rpl-0">
                      <div className="feature-item">
                        <div className="feature-content">
                          <h5>About us</h5>
                          <h6>2008-2018</h6>
                          <p>
                            According to the State Program for the Development of Azerbaijani Cinema for 2008-2018, Nizami, one of the oldest cinemas in the country, was inaugurated on December 27, 2011 after major reconstruction. In addition to the current repertoire of films, which includes the most interesting new films, presentations of national films...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="about-fiver-image rel rmb-60">
                      <img src={aboutThumb5} alt="About" />
                      <img className="about-bg-circle" src={aboutCircle} alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </li>
          <li id="1">
            <h2>Career</h2>
            <p>new york times</p>
          </li>
          <li id="2">
            <h2>Philosophy</h2>
            <p>here</p>
          </li>
          <li id="3">
            <h2>Legacy</h2>
            <p>after</p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Timeline;