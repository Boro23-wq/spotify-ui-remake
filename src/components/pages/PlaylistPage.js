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
          <div className='playlistPageContent'>
            <p className='smallText uppercase bold'>Playlist</p>
            <h1>Hiphop Beats</h1>
            <p className='tagline'>
              Minimalism, electronica and modern classical to concentrate to.
            </p>
            <div className='playlistPageDesc'>
              <p className='spotify'>Spotify</p>
              <span>699,428 likes</span>
              <span>4 hr 35 min</span>
            </div>
          </div>
        </div>
        <div className='playlistPageSongs'>
          <button>Play</button>
          <div className='icons'>
            <div className='iconsHeart'></div>
            <div className='iconsDots'></div>
          </div>
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
