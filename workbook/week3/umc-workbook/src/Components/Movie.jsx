import React, { useState } from 'react';

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

function Movie({title, poster_path, vote_average, description}) {
    const [showDescription, setShowDescription] = useState(false);

    return (
      <div className="movie-container" onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}>
        <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
        <div className="movie-info">
            <h4>{title}</h4>
            <span>{vote_average}</span>
        </div>
        {showDescription && (
        <div className="movie-description">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
      )}
      </div>
    )
  }
  
  export default Movie