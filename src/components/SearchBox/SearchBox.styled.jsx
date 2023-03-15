import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 500px;
  background-color: #black;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchBoxInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  margin-right: 2px;
  border: none;
  outline: none;
  padding: 4px;

  border-bottom: 1px solid #ee185a;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchBoxButton = styled.button`
  display: inline-block;
  font-size: 15px;
  min-width: 50px;
  height: 38px;
  border: none;
  color: white;
  border: 1px solid #ee725a;
  border-radius: 4px;
  font-size: 16px;

  background-image: linear-gradient(150deg, #ee725a, #553c9a);
  transition: border 350ms cubic-bezier(0.4, 0, 0.2, 1), fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    fill: white;
    cursor: pointer;
    border: 2px solid #553c9a;
`;
