import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const { placeholder } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour effectuer une recherche avec le terme "searchTerm"
    console.log('Recherche effectuée avec le terme :', searchTerm);
  };

  useEffect(() => {
    inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
  }, [placeholder]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          ref={inputRef}
          className="custom-search-bar"
        />
      </div>
    </form>
  );
};

export default SearchBar;
