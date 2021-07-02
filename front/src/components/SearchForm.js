import React, { useState } from 'react';
import SearchList from './SearchList';
import axios from 'axios';

const SearchForm = props => {
  const [searchQuery,setSearchQuery] = useState('');
  const [quotes, setQuotes] = useState('');

  const fetchQuotes = e => {
    e.preventDefault();
    axios.get(`/quotes/?search=${searchQuery}`).then(response => {
      let arr = Array.from(response.data);
      arr.forEach(obj => obj.id = Math.floor(Math.random() * 1000));
      setQuotes(arr);
    }).catch(err => console.log(err));
  };

  const inputHandler = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form className="search__form">
        <input onChange={inputHandler} type="text" name="title" placeholder="Enter an anime title" value={searchQuery}/>
        <button onClick={fetchQuotes}>SEARCH</button>
      </form>
      <div className="search__list__container"></div>
      <ul className="search__list">
        {quotes ? quotes.map((listItem, index) =>
          <SearchList quote={listItem} key={index} listId={listItem.id} listAnime={listItem.anime} listCharacter={listItem.character} listQuote={listItem.quote} favouriteList={props.favouriteList} setFavouriteList={props.setFavouriteList}/>
        ) : ''}
      </ul>
      <div className="search__list__container__buttom"></div>
    </div>
  )
}

export default SearchForm;