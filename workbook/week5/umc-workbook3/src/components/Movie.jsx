import React, { useState } from 'react';

export const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

function Movie(props) {
    const [showDescription, setShowDescription] = useState(false);


    return (
      <div className="movie-container"  onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}>
        <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터"/>
        <div className="movie-info">
            <h4>{props.title}</h4>
            <span>{props.vote_average}</span>
        </div>
        {showDescription && (
        <div className="movie-description">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
      )}
      </div>
    )
  }
  
  export default Movie