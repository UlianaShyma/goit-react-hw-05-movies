import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, ListItem, Wrapper, StyledLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <Wrapper>
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
