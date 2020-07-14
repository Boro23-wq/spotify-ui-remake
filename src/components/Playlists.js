import React from 'react';
import { ReactComponent as PlayIcon } from '../svgs/play.svg';

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Hot R&B's I",
      img:
        'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2180&q=80',
      desc: "Move like jaggers with Chris Brown's mixtape.",
    },
    {
      id: 102,
      category_id: 4,
      name: 'Alternative Rock I',
      img:
        'https://images.unsplash.com/photo-1495651779359-881fde1808a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      desc: 'Alternative rock music hits...',
    },
    {
      id: 103,
      category_id: 4,
      name: 'Alternative Rock II',
      img:
        'https://images.unsplash.com/photo-1582068019586-fd236dbad5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      desc: 'Roll up, its time to chill with the rock vibes.',
    },
    {
      id: 104,
      category_id: 4,
      name: 'Alternative Rock III',
      img:
        'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      desc: 'Alternative rock music hits...',
    },
    {
      id: 105,
      category_id: 1,
      name: 'Hiphop Bars Playlist I',
      img:
        'https://images.unsplash.com/photo-1571153751717-3e8ff51939ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      desc: 'Roll up, its time to chill with hiphop vibes...',
    },
    {
      id: 106,
      category_id: 1,
      name: 'Hiphop Bars Playlist II',
      img:
        'https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80',
      desc: 'Roll up, its time to chill with hiphop vibes...',
    },
    {
      id: 107,
      category_id: 1,
      name: 'Hiphop Bars Playlist III',
      img:
        'https://images.unsplash.com/photo-1540430954598-91a1e2ad96c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      desc: 'Roll up, its time to chill with hiphop vibes...',
    },
    {
      id: 108,
      category_id: 1,
      name: 'Hiphop Bars Playlist IV',
      img:
        'https://images.unsplash.com/photo-1461783436728-0a9217714694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      desc: 'Roll up, its time to chill with hiphop vibes...',
    },

    {
      id: 109,
      category_id: 2,
      name: 'Spit the bars',
      img:
        'https://images.unsplash.com/photo-1547812374-17741c8f6365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      desc: 'Get litty with the bars and hooks spitted...',
    },
    {
      id: 110,
      category_id: 2,
      name: 'Spit the bars II',
      img:
        'https://images.unsplash.com/photo-1541413807941-677a5eea6694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      desc: 'Get litty with the bars and hooks spitted...',
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_id
  );
  return (
    <div className='cardsWrapInner'>
      {matchedPlaylists.map((playlist) => (
        <div className='card'>
          <div className='cardImage'>
            <img src={playlist.img} alt='Image 1' />
          </div>
          <div className='cardContent'>
            {' '}
            <h3>{playlist.name}</h3> <span>{playlist.desc}</span>
          </div>
          <span className='playIcon'>
            <PlayIcon />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
