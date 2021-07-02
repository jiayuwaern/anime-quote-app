import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import { Route, Switch } from "react-router-dom";
import FavouriteList from './components/FavouriteList';

function App() {
  const [favouriteList, setFavouriteList] = useState('');

  return (
    <div>
      <Nav />
      <div className="App">
        <Switch>
          <Route path='/search'>
            <SearchForm favouriteList={favouriteList} setFavouriteList={setFavouriteList}/>
          </Route>
         <Route path='/favourite-list'>
            <FavouriteList favouriteList={favouriteList} setFavouriteList={setFavouriteList}/>
          </Route>
          <Route path='/'>
            <Home favouriteList={favouriteList} setFavouriteList={setFavouriteList}/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App;
