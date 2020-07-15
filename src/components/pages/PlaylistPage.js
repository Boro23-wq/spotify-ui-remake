import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistPage = () => {
  let { id } = useParams();
  return (
    <div className='playlistPage'>
      <div className='mainInner'>
        <div className='playlistPageInfo'>
          <div className='playlistPageImage'>
            <img
              src='https://images.unsplash.com/photo-1571153751717-3e8ff51939ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
              alt='cover'
            />
          </div>
          <h1>Title</h1>
          <p>Spotify</p>
          <button>Play</button>
          <div className='icons'>
            <div className='iconsHeart'></div>
            <div className='iconsDots'></div>
          </div>
          <p>Minimalism, electronica and modern classical to concentrate to.</p>
        </div>
        <div className='playlistPageSongs'>
          <ul>
            <li>Song One</li>
            <li>Song Two</li>
            <li>Song Three</li>
            <li>Song Four</li>
            <li>Song Five</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
