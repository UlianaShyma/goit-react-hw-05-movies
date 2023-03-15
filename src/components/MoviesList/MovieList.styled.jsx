import styled from 'styled-components';
import filmIcon from '../../images/film_item_icon.png';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 30px 0 40px;
`;

export const List = styled.ul`
  font-size: 25px;
  color: black;
`;

export const ListItem = styled.li`
  margin-top: 20px;
  position: relative;

  &::before {
    content: '';
    background-image: url(${filmIcon});
    background-size: cover;
    position: absolute;
    width: 25px;
    height: 25px;
    left: -32px;
  }

  &:hover,
  &:focus {
   linear-gradient(45deg, #553c9a, #ee4b2b);
  }

    &:first-child {
    margin-top: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  color: black;
 
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #ee4b2b;
    }
  }
`;

export const Error = styled.p`
  font-size: 22px;
  text-align: center;
  margin-top: 25px;
  font-weight: bold;
`;
