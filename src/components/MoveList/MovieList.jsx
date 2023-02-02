import React from 'react';
import movieData from './../../data/movieData.json'
import './movieList.css'

const MovieList = () => {
    const movies = movieData;
    return (
        <div>
            <ul className='movie-list'>
               {
                    movies.map(movie =>{
                        const gradeValue = movie.grade;
                        const gradeColor = {
                            '12':'gradeinfo on12',
                            '15':'gradeinfo on15',
                            '전체':'gradeinfo onall',
                        }
                        return (
                            <li key={movie.id} >
                                <div className='imgbox'>
                                    <img src={movie.poster} alt={movie.title}/>
                                    <span className={gradeColor[gradeValue]}>{movie.grade}</span>
                                </div>
                                <div calsssName='textbox'>
                                    <div className='title'>{movie.title}</div>
                                    <div className='info'>
                                     <span>예매율 <strong className='rateinfo'>{movie.rateinfo}</strong>%</span>
                                     <span className='star'>별 <strong className='starinfo'>{movie.starinfo}</strong></span>
                                    </div>
                                    
                                </div>
                            </li>
                        )
                    })
               }
            </ul>
        </div>

    );
};

export default MovieList;   