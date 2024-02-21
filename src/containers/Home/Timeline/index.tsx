import React, { useState, useEffect } from "react";
import { TimelineData } from "../../../utils/json/timelineData";
import { HELPER } from "../../../utils";

type TimelineProps = {};
type ContentDataType = {
  heading?: string;
  subheading?: string;
  content?: string;
  mainImg?: string;
  thumbImg?: string;
};

type ContentType = {
  [key: string]: ContentDataType;
};
type TimelineState = {
  id?: number;
  title?: string;
  data?: ContentType[];
};

export const Timeline: React.FC<TimelineProps> = () => {
  const [timelineData, setTimelineData] = useState<TimelineState>({});
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [focusedIndexContent, setFocusedIndexContent] = useState<ContentType>(
    {}
  );

  useEffect(() => {
    const myData = TimelineData.filter((_t) => _t.id === focusedIndex);
    setTimelineData(myData[0] as TimelineState);
  }, []);

  useEffect(() => {
    if (HELPER.isNotEmpty(timelineData)) {
      setFocusedIndex(timelineData.id!);
      setFocusedIndexContent(timelineData.data as any);
    }
  }, [timelineData]);

  return (
    <>
      <div className="timeline">
        <div className="events">
          <ol>
            <ul>
              {TimelineData.map((timeline: any, key: number) => {
                return (
                  <li key={`timeline-${key}`}>
                    <a
                      href={`#${timeline.id as number}`}
                      onClick={() => {
                        setTimelineData(timeline);
                      }}
                      className={`${focusedIndex === timeline?.id ? "selected" : ""}`}
                    >
                      {timeline?.title as string}
                    </a>
                  </li>
                );
              })}
            </ul>
          </ol>
        </div>
      </div>

      <div className="events-content">
        <ol>
          <li id={`${focusedIndex}`} className={"selected"}>
            <section className="about-section style-five py-30 rpy-100">
              <div className="container">
                {focusedIndexContent instanceof Array
                  ? focusedIndexContent!.map((content: any, key1: any) => {
                      return (
                        <div className="row align-items-center justify-content-center">
                          {(key1 + 1) % 2 === 1 ? (
                            <div className="col-xl-5 col-lg-6">
                              <div className="about-fiver-image rel rmb-60">
                                <img src={content?.mainImg} alt="About" />
                                <img
                                  className="about-bg-circle"
                                  src={content?.thumbImg}
                                  alt="About"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="col-xl-5 col-lg-6">
                              <div className="about-content rpl-0">
                                <div className="feature-item">
                                  <div className="feature-content">
                                    <h6>{content?.title}</h6>
                                    <h5>{content?.heading}</h5>
                                    <p>{content?.content}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {(key1 + 1) % 2 === 1 ? (
                            <div className="col-xl-5 col-lg-6">
                              <div className="about-content rpl-0">
                                <div className="feature-item">
                                  <div className="feature-content">
                                    <h6>{content?.title}</h6>
                                    <h5>{content?.heading}</h5>
                                    <p>{content?.content}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="col-xl-5 col-lg-6">
                              <div className="about-fiver-image rel rmb-60">
                                <img src={content?.mainImg} alt="About" />
                                <img
                                  className="about-bg-circle"
                                  src={content?.thumbImg}
                                  alt="About"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })
                  : ""}
              </div>
            </section>
          </li>
        </ol>
      </div>
    </>
  );
};
