import { getTrendingMovies } from '../utils/TMDB_API';
import { useEffect, useState } from 'react';
import { MovieList } from '../components/MoviesList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState('');

  const errorMesage = message => {
    toast.error(`Oops, something went wrong: ${message}`);
  };

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(error);
        errorMesage(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today:</h1>
      {trendingMovies && !error && <MovieList movies={trendingMovies} />}
      <ToastContainer autoClose={2500}></ToastContainer>
    </>
  );
};
export default Home;
