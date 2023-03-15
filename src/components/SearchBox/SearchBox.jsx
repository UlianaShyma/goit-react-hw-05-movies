import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/searchIcon.svg';
import {
  SearchForm,
  SearchBoxButton,
  SearchBoxInput,
} from './SearchBox.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBox = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    if (query === '') {
      toast.warning('Please, enter your query!');
      return;
    }
    onSubmit(query);
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchBoxInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Look for a movie..."
          onChange={handleChange}
          name="query"
          value={inputValue}
        />

        <SearchBoxButton type="submit">
          <SearchIcon width="25" height="25" />
        </SearchBoxButton>
      </SearchForm>
      <ToastContainer autoClose={2500}></ToastContainer>
    </>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
