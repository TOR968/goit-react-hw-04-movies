import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, Switch, Route, useLocation, useHistory } from 'react-router-dom';

import { getMovieInfo } from '../../components/utils/requestMovies';
import { posterUrl } from '../../components/utils/requestMovies';
import styles from './MovieDetailsPage.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PageHeading from '../../components/PageHeading/PageHeading';

// const Cast = lazy(() =>
//   import("../../components/Cast/Cast" /* webpackChunkName: "Cast" */)
// );
// const Reviews = lazy(() =>
//   import("../../components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
// );

function MovieDetailsPage(props) {
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(false);

  const movieId = props.match.params.movieId;
  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    getMovieInfo(movieId)
      .then(res => {
        setMovieInfo(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [movieId]);

  const goBackHandler = () => {
    history.push({ ...location.state.from });
  };

  const {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieInfo;

  return (
    <>
      <button onClick={goBackHandler}>&#8592; Go back</button>
      {error && <PageHeading text={'something gone wrong'} />}
      {movieInfo.genres && (
        <>
          <article className={styles.movieCard}>
            <img
              src={`${posterUrl}${poster_path}`}
              alt={title || name}
              className={styles.poster}
            />
            <section className={styles.movieCardInfo}>
              <h3 className={styles.title}>{`${title || name} (${
                release_date.split('-')[0]
              })`}</h3>
              <p className={styles.score}>
                user score - {`${vote_average * 10}%`}
              </p>
              <h4>Overview</h4>
              <p>{overview}</p>
              <h5>Genres</h5>
              <ul className={styles.genreList}>
                {genres.map(el => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ul>
            </section>
          </article>
          <section className={styles.additionalInfo}>
            <p>Additional Information</p>
            {/* <ul className={styles.adInfoList}>
              <li>
                <Link
                  to={{
                    pathname: `/movies/${movieId}/cast`,
                    state: {
                      from: location.state.from,
                    },
                  }}
                  className={styles.link}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `/movies/${movieId}/reviews`,
                    state: {
                      from: location.state.from,
                    },
                  }}
                  className={styles.link}
                >
                  Reviews
                </Link>
              </li>
            </ul> */}
            {/* <Suspense fallback={<Loader type="TailSpin" color="#red" />}>
              <Switch>
                <Route path={`${props.match.path}/cast`} component={Cast} />
                <Route
                  path={`${props.match.path}/reviews`}
                  component={Reviews}
                />
              </Switch>
            </Suspense> */}
          </section>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
