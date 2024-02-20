import React, { useEffect, useState } from 'react';
import { CurrentlyPlaying, ComingSoon } from '../../../utils/json/movieData'
import MoviePlaceholder from './box';
import { CONSTANTS } from '../../../utils/index';

type LState = any
type tProps = {
    listKey: string;
    title: string
}
type MovieProps = {
    "id": number;
    "thumb": string;
    "name": string,
    "date": string,
    "viewing": string,
    "lang": any,
    "delay": number
}

const MovieList:React.FC<tProps>  = (props) => {
    const { listKey, title } = props
    const [list, setList] = useState<LState>([])
  
    useEffect(() => {
        if(listKey === CONSTANTS.MOVIE_LIST_TYPE.CURRENTLY_PLAYED) {
            setList(CurrentlyPlaying)
        }else if(listKey === CONSTANTS.MOVIE_LIST_TYPE.COMING_SOON) {
            setList(ComingSoon)
        }
    }, [listKey])

    

    return (
        <>
            <section className={`movie-section-two bgs-cover pt-20 rpt-95 pb-10 rpb-70`}>
                <div className="container">
                    <div className="section-title text-left mb-55">
                        <span className="sub-title">{title}</span>
                        <span className="sub-title text-light-black see-more">See more</span>
                    </div>
                    <div className="row">
                        {list.map((movie:MovieProps) =>
                            <div className="col-lg-3 col-sm-6" key={movie.id}>
                                <MoviePlaceholder movie={movie} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MovieList;