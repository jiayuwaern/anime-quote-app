import React from 'react';

const FavouriteItem = props => {
  console.log(props.listId);

  const deleteHandler = (id) => {
    console.log(props);
    props.setFavouriteList(props.favouriteList.filter(item => item.id !== id))
  };

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
        <button onClick={() => deleteHandler(props.listId)}>REMOVE</button>
      </li>
    </div>
  );
}

export default FavouriteItem;