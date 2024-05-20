import React, { useState } from 'react';
import {
  MovieContainer,
  MovieContainerHover,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieRating,
  MovieDescription,
  MovieDescriptionTitle,
} from './Movie.style';

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

const Movie = ({ title, poster_path, vote_average, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <MovieContainerHover onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}>
      <MovieImage src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieRating>{vote_average}</MovieRating>
      </MovieInfo>
      {showDescription && (
        <MovieDescription>
          <MovieDescriptionTitle>{title}</MovieDescriptionTitle>
          <p>{description}</p>
        </MovieDescription>
      )}
    </MovieContainerHover>
  )
}

export default Movie;
