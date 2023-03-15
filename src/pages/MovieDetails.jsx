import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieDetails } from '../utils/TMDB_API';
import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { Button } from '../components/MovieCard/MovieCard.styled';
import { ToastContainer, toast } from 'react-toastify';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const results = await getMovieDetails(Number(movieId));
        setMovieDetails(results);
      } catch (error) {
        setError(error);
        errorMesage(error.message);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  const errorMesage = message => {
    toast.error(`Oops, something went wrong: ${message}`);
  };

  return (
    <>
      {!error && movieDetails && (
        <Link to={backLinkHref}>{<Button type="button">Go back</Button>}</Link>
      )}

      <MovieCard movie={movieDetails} />

      <Suspense fallback={''}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500}></ToastContainer>
    </>
  );
};

export default MovieDetails;
