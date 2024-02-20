import React, { useState, useEffect } from 'react';
import aboutThumb5 from '../../../assets/images/timeline/about-five.jpg'
import aboutCircle from '../../../assets/images/timeline/about-circle-dots.png'
import {
  TimelineData
} from "../../../utils/json/timelineData";
import { HELPER } from '../../../utils/index';

type tProps = {}
type fICState = {
   heading?: string;
   subheading?: string;
   content?: string;
   mainImg?: string;
   thumbImg?: string;
}

const Timeline: React.FC<tProps> = () => {
  const [focusedIndex, setFocusedIndex] = useState<boolean>(0);
  const [focusedIndexContent, setFocusedIndexContent] = useState<fICState>({});


  useEffect(() => {
    const myData = TimelineData.filter((_t) => _t.id === focusedIndex);
    console.log("myData: ", myData)
    // if(HELPER.isNotEmpty(myData?.data)) {
    //   setFocusedIndexContent(myData?.data)
    // }
  }, [])

  return (
    <>
      <div className="timeline">
        <div className="events">
          <ol>
            <ul>
              {
                TimelineData.map((timeline, key) => {
                  return (
                    <li>
                      <a
                        href={`#${timeline?.id}`}
                        onClick={() => {
                          console.log("timeline: ", timeline)
                          setFocusedIndex(timeline?.id)
                          // setFocusedIndexContent(timeline?.data)
                        }}
                        className={`${focusedIndex === timeline?.id ? 'selected' : ''}`}
                      >{timeline?.title}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </ol>
        </div>
      </div>

      <div className="events-content">
        <ol>
          <li
            id={`${focusedIndex}`}
            className={'selected'}
          >
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
        </ol>
      </div>
    </>
  );
};

export default Timeline;