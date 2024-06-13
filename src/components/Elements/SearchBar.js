import React, { useState } from 'react';
import Button from './Button'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEnterSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="c-search-bar">
        <form onSubmit={handleEnterSubmit} className="c-search-bar__container">
        <input
            type="search"
            placeholder="Trade name"
            value={searchTerm}
            onChange={handleChange}
            className="c-search-bar__input"
        />
        <div className="c-search-bar__button-container">
            <Button title='Search' style='primary_search' icon='SearchWhite' animation='move-left' iconStyle='large' customStyle='small' onClick={handleSubmit}/>
        </div>
        </form>
    </div>
  );
};

export default SearchBar;
