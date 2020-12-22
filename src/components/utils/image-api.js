import KEY from './key';
import axios from 'axios';

const get = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/550?api_key=${KEY}`,
  );
  return data;
};

export default get;

// https://api.themoviedb.org/3/movie/550?api_key=1b548a20e014d0ac89134ac09055bb25
