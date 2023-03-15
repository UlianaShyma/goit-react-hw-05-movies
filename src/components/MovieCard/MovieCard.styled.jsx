import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  font-size: 15px;
  min-width: 115px;
  height: 38px;
  border: none;
  color: white;
  border: 1px solid #ee725a;
  border-radius: 4px;
  font-size: 16px;
  background-image: linear-gradient(150deg, #ee725a, #553c9a);
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    cursor: pointer;
    border: 2px solid #553c9a;
`;

export const CardMovie = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 769px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

export const WrapperSkeleton = styled.div`
  align-self: flex-start;
  @media screen and (max-width: 769px) {
    align-self: center;
  }
`;

export const Poster = styled.img`
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  align-self: flex-start;

  @media screen and (max-width: 769px) {
    align-self: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const UserScore = styled.p`
  margin-bottom: 20px;
  font-size: 19px;
`;

export const Header = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 1.5em;
`;

export const List = styled.ul`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  gap 5px;
  list-style: none;
`;

export const AddInfo = styled.div`
  font-size: 17px;
  margin-bottom: 20px;
  @media screen and (min-width: 769px) {
    margin-top: 20px;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;
