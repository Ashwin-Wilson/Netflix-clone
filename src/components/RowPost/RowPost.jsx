import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube';
import { API_KEY } from '../../constants/constants';
function RowPost(props) {
  let [movies, setMovies] = useState([])
  let [movieURL, setMovieURL] = useState();

  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    }).catch((err) => {
      alert('Network Error')
    })

  },[]);

  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <img onClick={() => {
              axios.get(`/movie/${obj.id}/videos?api_key=${API_KEY}&language=en-U`).then((response) => {
                if (response.data.results.length !== 0) {
                  setMovieURL(response.data.results[0])
                } else {
                  console.log("No data")
                }
              }).catch((err) => {
                alert('video not found')
              })

            }}
              className={props.isLarge ? 'poster-large' : 'posters-small'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
          )
        })}

      </div>
      {movieURL && <YouTube className='videoViewer' opts={opts} videoId={movieURL.key} />}
    </div>
  )
}

export default RowPost