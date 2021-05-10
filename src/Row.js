import React, { useEffect, useState } from 'react'
import axios from './axios'

function Row({title,fetchUrl}) {
    const base_url = 'https://image.tmdb.org/t/p/'
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
                        <img src={`${base_url}${movie.poster}`} alt="" className="row__poster" />
                    ) )}
                 
                </div>
            </div>
        </>
    )
}

export default Row
