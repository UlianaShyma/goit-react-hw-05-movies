import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledLink, Container } from './SharedLayout.styled';
import { Loader } from '../Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
