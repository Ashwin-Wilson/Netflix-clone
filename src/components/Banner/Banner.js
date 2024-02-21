import React from 'react'
import './Banner.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube';
function Banner() {
    const [movie, setMovie] = useState();
    const [movieURL, setMovieURL] = useState();
    useEffect(() => {
        let randNum = Math.floor(Math.random() * 20);
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data.results[0]);
            // console.log(randNum);
            setMovie(response.data.results[randNum]);
        })
    }, [])
    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    return (
        <div>
            <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
                className='banner'>
                <div className='content'>
                    <h1 className='title'>{movie ? movie.title : ""}</h1>
                    <div className="btn-container">
                        <button onClick={

                            () => {
                                // console.log(movie);
                                axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-U`).then((response) => {
                                    // console.log(response.data)
                                    if (response.data.results.length !== 0) {
                                        setMovieURL(response.data.results[0])
                                        // console.log(movieURL);
                                    } else {
                                        alert("Requested movie info not available");
                                    }
                                }).catch((err) => {
                                    alert('video not found')
                                })

                            }

                        } className="btn">Play</button>
                        <button className="btn">My List</button>
                    </div>
                    <p className='description'>{movie ? movie.overview : ""}</p>
                </div>
                <div className='gradient-div'></div>

            </div>
            {movieURL && <YouTube className='videoViewer' opts={opts} videoId={movieURL.key} />}
        </div>
    )
}

export default Banner