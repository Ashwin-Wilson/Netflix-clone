import React from 'react'
import './Banner.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useEffect, useState } from 'react'
import axios from '../../axios'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        let randNum = Math.floor(Math.random() * 20);
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data.results[0]);
            // console.log(randNum);
            setMovie(response.data.results[randNum]);
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className="btn-container">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <p className='description'>{movie ? movie.overview : ""}</p>
            </div>
            <div className='gradient-div'></div>
        </div>
    )
}

export default Banner