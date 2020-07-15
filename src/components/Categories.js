import React from 'react';
import Playlists from './Playlists';

const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: 'HipHop',
      tagline: 'Roll up, pour up, its time to chill with the hiphop vibes.',
    },
    {
      id: 2,
      name: 'Rap Lits',
      tagline: 'Get litty with the bars and hooks spitted.',
    },
    {
      id: 3,
      name: 'R&B',
      tagline: "Move like jaggers with Chris Brown's mixtape.",
    },
    {
      id: 4,
      name: 'Alternative Rock',
      tagline: 'The only alternative rock music you will ever need. ',
    },
  ];

  return (
    <div className='mainInner'>
      {dataCategories.map((category, id) => (
        <div className='cardsWrap' key={id}>
          <h2>{category.name}</h2>
          {/* <span className='seeAll'> See All</span> */}
          <p className='subText'>{category.tagline}</p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
