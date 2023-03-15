import { getMovieReviews } from '../../utils/TMDB_API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { Wrapper, List, Item, Name } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    const fetchMovieReviews = async () => {
      try {
        const { results } = await getMovieReviews(Number(movieId));
        setReviews(results);
      } catch (error) {
        setError(error);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {!isLoading && reviews && reviews.length === 0 ? (
        <h2>We don't have any reviews for this movie.</h2>
      ) : (
        !isLoading &&
        !error &&
        reviews && (
          <Wrapper>
            <List>
              {reviews.map(({ author, content, id }) => (
                <Item key={id}>
                  <Name>Author: {author}</Name>
                  <p>
                    <b>Review:</b> {content}
                  </p>
                </Item>
              ))}
            </List>
          </Wrapper>
        )
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
