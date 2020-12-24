import { useState, useEffect } from 'react';

import { getMovieReviews } from '../../components/utils/requestMovies';

function Reviews(props) {
  const [movieReviews, setMovieReviews] = useState([]);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    getMovieReviews(movieId).then(res => {
      setMovieReviews(res.data.results);
    });
  }, [movieId]);

  return (
    (!!movieReviews.length && (
      <ul>
        {movieReviews.map(review => {
          const { id, author, content, url } = review;
          return (
            <li key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </li>
          );
        })}
      </ul>
    )) || <p>no reviews</p>
  );
}

export default Reviews;
