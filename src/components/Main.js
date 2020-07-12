import React from 'react';

const Main = () => {
  return (
    <div className='main'>
      <div className='upperNav'></div>
      <div className='mainContent'>
        <h1>Uniquely yours</h1>
        <div className='cardsWrap'>
          <div className='card'>
            <div className='cardImage'>
              <img
                src='https://images.unsplash.com/photo-1519619091416-f5d7e5200702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
                alt='Image 1'
              />
            </div>
            <div className='cardContent'>
              {' '}
              <h3>Liked Songs </h3>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
