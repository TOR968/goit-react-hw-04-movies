import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getDailyTrends } from '../../components/utils/requestMovies';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    getDailyTrends()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      {error && <p>something gone wrong</p>}
      {!!movies.length && (
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
      )}
    </>
  );
}

export default HomePage;
