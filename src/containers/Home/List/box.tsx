import React from "react";

type MoviePlaceholderProps = {
  movie: {
    id: number;
    thumb: string;
    name: string;
    date: string;
    viewing: string;
    lang: any;
    delay: number;
  };
};

export const MoviePlaceholder: React.FC<MoviePlaceholderProps> = (props) => {
  const { thumb, name, viewing, date, lang } = props?.movie;

  return (
    <>
      <div className="movie-container style-two" key={`moviep-${name}`}>
        <div className="image">
          <img src={`${thumb}`} alt={`Movie ${name}`} />
        </div>
        <div className="movie-detail text-white text-left">
          <h5>
            <a href="/movie-profile#">{name}</a>
          </h5>
          <span>{date}</span>
          <p>{viewing} </p>
          {lang.map((lan: string, key: number) => (
            <a href="/#" className="lang-btn mr-5" key={`moviep-lng-${key}`}>
              {lan}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
