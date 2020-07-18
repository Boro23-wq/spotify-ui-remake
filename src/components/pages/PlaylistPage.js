import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../../svgs/play.svg';
import { ReactComponent as HeartIcon } from '../../svgs/heart.svg';
import { ReactComponent as NoteIcon } from '../../svgs/note.svg';

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
          <div className='playlistButtons'>
            <span className='playIcon'>
              <PlayIcon />
            </span>
            <div className='icons'>
              <div className='icon iconsHeart'>
                <HeartIcon />
              </div>
              <div className='icon iconsDots'></div>
            </div>
          </div>
          <ul className='songList'>
            <li>
              <div className='songIcon'>
                <NoteIcon className='noteI' />
                <PlayIcon className='playI' />
              </div>
              <div className='songDetails'>
                <h3>Crooked Smile</h3>
                <span className='smallText'>J Cole</span>
              </div>
              <div className='songTime'>
                <span>3:05</span>
              </div>
            </li>
            <li>
              <div className='songIcon'>
                <NoteIcon className='noteI' />
                <PlayIcon className='playI' />
              </div>
              <div className='songDetails'>
                <h3>Middlechild</h3>
                <span>J Cole</span>
              </div>
              <div className='songTime'>
                <span>5:05</span>
              </div>
            </li>
            <li>
              <div className='songIcon'>
                <NoteIcon className='noteI' />
                <PlayIcon className='playI' />
              </div>
              <div className='songDetails'>
                <h3>Love Yourz</h3>
                <span>J Cole</span>
              </div>
              <div className='songTime'>
                <span>2:19</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
