import React from 'react';
import Categories from './Categories';
import { Switch, Route } from 'react-router-dom';
import PlaylistPage from './pages/PlaylistPage';

const Main = () => {
  return (
    <div className='main'>
      <div className='upperNav'> Upper Nav</div>
      <div className='mainContent'>
        <Switch>
          <Route path='/' exact component={Categories}></Route>
          <Route path='/search'>Search component</Route>
          <Route path='/your-library'>Library component</Route>
          <Route path='/playlist/:id' component={PlaylistPage}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
