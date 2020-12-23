import { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';

import queryString from 'query-string';
import { getMoviesList } from '../../components/utils/requestMovies';
import styles from './Movies.module.css';
import Loader from 'react-loader-spinner';
import PageHeading from '../../components/PageHeading/PageHeading';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// const MovieDetailsPage = lazy(() =>
//   import("../MovieDetailsPage/MovieDetailsPage")
// );

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const changeHandler = e => {
    const inputQuery = e.target.value;
    setQuery(inputQuery);
  };

  const submitHandler = async e => {
    e.preventDefault();
    history.push({ ...location, search: `?query=${query}` });
  };

  useEffect(() => {
    const movie = queryString.parse(location.search).query;
    if (!movie) {
      setMovies([]);
      setQuery('');
    }

    if (location.search) {
      getMoviesList(movie).then(res => setMovies(res.data.results));
      setQuery(movie);
    }
  }, [location.search]);

  return (
    <Suspense fallback={<Loader type="TailSpin" color="#red" />}>
      <Switch>
        {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
        <Route
          exact
          path="/movies"
          render={() => (
            <>
              <PageHeading text={'Search'} />
              <form onSubmit={submitHandler} className={styles.searchForm}>
                <input
                  placeholder="enter movie"
                  value={query}
                  onChange={changeHandler}
                />
                <button>Search</button>
              </form>

              <ul className={styles.list}>
                {movies.map(movie => (
                  <Link
                    key={movie.id}
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: {
                        from: location,
                      },
                    }}
                    className={styles.link}
                  >
                    <li>{movie.title || movie.name}</li>
                  </Link>
                ))}
              </ul>
            </>
          )}
        />
      </Switch>
    </Suspense>
  );
}

export default Movies;
