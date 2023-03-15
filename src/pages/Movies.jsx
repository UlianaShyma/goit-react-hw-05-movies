import { SearchBox } from '../components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../utils/TMDB_API';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  Wrapper,
  StyledLink,
  Error,
} from '../components/MoviesList/MovieList.styled';
import { Loader } from '../components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;
    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const { results } = await getMovieByQuery(query);
        setMovies(results);
      } catch (error) {
        setError(error);
        errorMesage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie(query);
  }, [query]);

  const errorMesage = message => {
    toast.error(`Oops, something went wrong: ${message}`);
  };

  const getQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <SearchBox onSubmit={getQuery} />

      {query && movies?.length === 0 && !isLoading && !error && (
        <Error>No results</Error>
      )}

      {movies && !isLoading && !error && movies.length > 0 && (
        <Wrapper>
          <List>
            {movies.map(movie => (
              <ListItem key={movie.id}>
                <StyledLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </Wrapper>
      )}
      <ToastContainer autoClose={2500}></ToastContainer>
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
