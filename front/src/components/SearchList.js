import React from 'react';

const SearchList = props => {

  const handleAddFavourite = e => {
    props.setFavouriteList(favouriteList => [...favouriteList, props.quote]);
  }

  return (
    <div>
      <li>
        <span>ANIME</span>
        <hr></hr>
        <p>{props.listAnime}</p>
        <span>CHARACTER</span>
        <hr></hr>
        <p>{props.listCharacter}</p>
        <span>QUOTE</span>
        <hr></hr>
        <p>{props.listQuote}</p>
        <button onClick={handleAddFavourite}>add to favourite</button>
      </li>
    </div>
  );
}

export default SearchList;