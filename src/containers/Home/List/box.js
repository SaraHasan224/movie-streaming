import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const MoviePlaceholder = ({ movie }) => {
    const { thumb, name, viewing, date, delay, lang } = movie;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="movie-container style-two">
                    <div className="image">
                        <img src={`${thumb}`} alt={`Movie ${name}`} />
                    </div>
                    <div className="movie-detail text-white text-left">
                        <h5><Link to="/movie-profile#">{name}</Link></h5>
                        <span>{date}</span>
                        <p>{viewing} </p>
                        {lang.map(lan =>
                            <Link to="/#" className="lang-btn mr-5">{lan}</Link>
                        )}
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default MoviePlaceholder;