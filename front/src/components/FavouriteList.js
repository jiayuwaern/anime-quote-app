import React from 'react';
import FavouriteItem from './FavouriteItem';

const FavouriteList = props => {
  const list = props.favouriteList;

  return (
    <div>
      <ul className="favourite__list">
        {list ? list.map((listItem, index) =>
          <FavouriteItem  key={index} listId={listItem.id} listAnime={listItem.anime} listCharacter={listItem.character} listQuote={listItem.quote} favouriteList={props.favouriteList} setFavouriteList={props.setFavouriteList}/>
        ) : ''}
      </ul>
      <div className="search__list__container__buttom"></div>
    </div>);
}

export default FavouriteList;