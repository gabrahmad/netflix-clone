import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'

function Row({title,fetchUrl,isLargeRow}) {
    const base_url = 'https://image.tmdb.org/t/p/original'
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
      
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)
    return (
        <>
            <h2>{title}</h2>
            <div className="row">
                <div className="row__posters">
                    {movies.map( (movie,i) => (
                        <img key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="" className={`row__poster ${isLargeRow && 'row__posterLarge'}` } />
                    ) )}
                 
                </div>
            </div>
        </>
    )
}

export default Row
