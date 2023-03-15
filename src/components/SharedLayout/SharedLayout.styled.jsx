import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 25px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Header = styled.header`
  padding: 5px 25px;
  background-image: linear-gradient(45deg, #553c9a, #ee4b2b);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
    align-items: center;
    margin-left: 20px;

    height: 60px;
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 25px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ee4b2b;
  }

  &.active {
    border-bottom: 3px solid #ee4b2b;
  }
`;
