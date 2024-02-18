import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie</h1>
                <div className="btn-container">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <p className='description'>sjdflagnasdfasfa asdfasfd sfdsdfs  fawefsdcasd</p>
            </div>
            <div className='gradient-div'></div>
        </div>
    )
}

export default Banner