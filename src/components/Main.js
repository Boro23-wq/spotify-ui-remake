import React from 'react';
import { ReactComponent as PlayIcon } from '../svgs/play.svg';

const Main = () => {
  return (
    <div className='main'>
      <div className='upperNav'></div>
      <div className='mainContent'>
        <div className='cardsWrap'>
          <h1>Uniquely yours</h1>
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
            <span className='playIcon'>
              <PlayIcon />
            </span>
          </div>
        </div>
        <div className='cardsWrap'>
          <h2>HipHop</h2>
          <span className='seeAll'> See All</span>
          <p className='subText'>Featuring the best rap artists.</p>
          <div className='cardsWrapInner'>
            <div className='card'>
              <div className='cardImage'>
                <img
                  src='https://images.unsplash.com/photo-1519619091416-f5d7e5200702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
                  alt='Image 1'
                />
              </div>
              <div className='cardContent'>
                {' '}
                <h3>Greatest Raps </h3>{' '}
                <span>Featuring JCole, Travis Scott, YBN Cordae ...</span>
              </div>
              <span className='playIcon'>
                <PlayIcon />
              </span>
            </div>
            <div className='card'>
              <div className='cardImage'>
                <img
                  src='https://images.unsplash.com/photo-1519619091416-f5d7e5200702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
                  alt='Image 1'
                />
              </div>
              <div className='cardContent'>
                {' '}
                <h3>Greatest Raps </h3>{' '}
                <span>Featuring JCole, Travis Scott, YBN Cordae ...</span>
              </div>
              <span className='playIcon'>
                <PlayIcon />
              </span>
            </div>
            <div className='card'>
              <div className='cardImage'>
                <img
                  src='https://images.unsplash.com/photo-1519619091416-f5d7e5200702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
                  alt='Image 1'
                />
              </div>
              <div className='cardContent'>
                {' '}
                <h3>Greatest Raps </h3>{' '}
                <span>Featuring JCole, Travis Scott, YBN Cordae ...</span>
              </div>
              <span className='playIcon'>
                <PlayIcon />
              </span>
            </div>
            <div className='card'>
              <div className='cardImage'>
                <img
                  src='https://images.unsplash.com/photo-1519619091416-f5d7e5200702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
                  alt='Image 1'
                />
              </div>
              <div className='cardContent'>
                {' '}
                <h3>Greatest Raps </h3>{' '}
                <span>Featuring JCole, Travis Scott, YBN Cordae ...</span>
              </div>
              <span className='playIcon'>
                <PlayIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
