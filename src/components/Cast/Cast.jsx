import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, profilePath } from '../../utils/TMDB_API';
import { Wrapper, List, Item, About, Name } from './Cast.styled';
import img from '../../images/no_image_placeholder.png';
import { Loader } from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    const fetchMovieCast = async () => {
      try {
        const { cast } = await getMovieCast(Number(movieId));
        const minCast = cast.slice(0, 15);
        setCast(minCast);
      } catch (error) {
        errorMesage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast(movieId);
  }, [movieId]);

  const errorMesage = message => {
    toast.error(`Oops, something went wrong: ${message}`);
  };

  return (
    <>
      {!isLoading && cast && cast.length > 0 ? (
        <Wrapper>
          <List>
            {cast.map(({ id, profile_path, name, character }) => (
              <Item key={id}>
                <img
                  src={profile_path !== null ? profilePath(profile_path) : img}
                  alt={name}
                ></img>
                <About>
                  {name ? <Name>{name}</Name> : ''}
                  {character ? <p>Character: {character}</p> : ''}
                </About>
              </Item>
            ))}
          </List>
        </Wrapper>
      ) : (
        !isLoading &&
        cast &&
        cast.length === 0 && <h2>We don't have any cast for this movie.</h2>
      )}
      <ToastContainer autoClose={2500}></ToastContainer>
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
