import React from 'react';
import { Fade } from 'react-reveal';


type MovieProps = {
   movie: {
    "id": number;
    "thumb": string;
    "name": string,
    "date": string,
    "viewing": string,
    "lang": any,
    "delay": number
   }
}

const MoviePlaceholder:React.FC<MovieProps>  = (props) => {
    const { thumb, name, viewing, date, delay, lang } = props?.movie;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="movie-container style-two">
                    <div className="image">
                        <img src={`${thumb}`} alt={`Movie ${name}`} />
                    </div>
                    <div className="movie-detail text-white text-left">
                        <h5><a href="/movie-profile#">{name}</a></h5>
                        <span>{date}</span>
                        <p>{viewing} </p>
                        {lang.map(lan =>
                            <a href="/#" className="lang-btn mr-5">{lan}</a>
                        )}
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default MoviePlaceholder;