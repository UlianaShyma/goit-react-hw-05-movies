import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { posterMovie } from '../../utils/TMDB_API';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  CardMovie,
  WrapperSkeleton,
  Poster,
  Wrapper,
  UserScore,
  Title,
  Header,
  Text,
  List,
  AddInfo,
  BtnList,
  Button,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const [isLoadImg, setIsLoadImg] = useState(false);

  const getFullYear = () => {
    const data = movie.release_date;
    if (!data) return;
    const getYear = data.substring(0, 4);
    return '(' + getYear + ')';
  };

  console.log(movie.poster_path);

  const userScore = movie.vote_average && Math.floor(movie.vote_average * 10);
  const srcPoster = posterMovie(movie.poster_path);

  return (
    <>
      {movie && (
        <>
          <CardMovie>
            <WrapperSkeleton>
              <SkeletonTheme
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                {!isLoadImg && <Skeleton width={300} height={450} />}
              </SkeletonTheme>
            </WrapperSkeleton>

            <Poster
              style={isLoadImg ? {} : { display: 'none' }}
              src={srcPoster}
              alt={movie.title}
              width={300}
              onLoad={() => setIsLoadImg(true)}
              height={isLoadImg ? 450 : 0}
            />

            <Wrapper>
              <Title>
                {movie.title} {getFullYear()}
              </Title>
              <UserScore>User Score: {userScore}%</UserScore>

              <Header>Overview</Header>
              <Text>{movie.overview}</Text>

              <Header>Genres</Header>
              <List>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <Text key={genre.id}>{genre.name}</Text>
                  ))}
              </List>
            </Wrapper>
          </CardMovie>
          <AddInfo>
            <h3>Additional information</h3>
            <BtnList>
              <Link to="cast">
                <Button label="Cast">Cast</Button>
              </Link>

              <Link to="reviews">
                <Button label="Reviews">Reviews</Button>
              </Link>
            </BtnList>
          </AddInfo>
        </>
      )}
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
