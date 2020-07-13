import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';

const App = () => {
  return (
    <div className='outerWrap'>
      <div className='App'>
        <Nav />
        <Main />
      </div>
      <div className='musiccontrols'>Music Controls goes here</div>
    </div>
  );
};

export default App;
