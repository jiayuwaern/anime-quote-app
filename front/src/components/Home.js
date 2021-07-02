import React, { useState } from 'react';
import axios from 'axios';
import logo from '../logo.png';

const Quote = props => {
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    axios.get('/quote').then(response => {
      setQuote({
        anime: response.data.anime,
        character: response.data.character,
        quote: response.data.quote,
        id: Math.floor(Math.random() * 1000)
      });
    }).catch(err => {
      console.log(err);
    });
  };

  const handleAddFavourite = () => {
    props.setFavouriteList(favouriteList => [...favouriteList, quote]);
  }

  return (
    <div className="home">
      <img src={logo} className="App__logo" alt="logo" />
      <button onClick={fetchQuote} className="home__button__fetch">GET A QUOTE</button>
      <div className={`${quote.anime ? "home__quote" : "home__quote--hidden"}`}>
        <div className="home__container">
        <span>ANIME</span>
        <hr></hr>
        <h1>{quote.anime}</h1>
        <span>CHARACTER</span>
        <hr></hr>
        <h1>{quote.character}</h1>
        <span>QUOTE</span>
        <hr></hr>
        <q>{quote.quote}</q>
        <button onClick={handleAddFavourite} className="home__button__add-favourite">ADD TO FAVOURITE</button>
        </div>
      </div>
      </div>
  )
}

export default Quote;
