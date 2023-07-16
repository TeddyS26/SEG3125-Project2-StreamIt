import React from 'react';
import './MoviesShows.css';
import { useTranslation } from 'react-i18next';

const MoviesShows = () => {
  const { t } = useTranslation();

  const moviesShowsImages = [
    require('./images/a.jpeg'), require('./images/ae.jpg'), require('./images/bd.jpg'), require('./images/f.jpeg'), require('./images/got.jpeg'), 
    require('./images/t.jpeg'), require('./images/tdk.jpg'), require('./images/tg.jpg'), require('./images/ts.jpg'), require('./images/fg.jpg')
  ];  

  return (
    <div className='movies-shows-page'>
      <div className="explanation">
          <div className="variety">
            <p>{t('offers')}</p>
          </div>
          <div className="favorites">
            <p>{t('favorite')}</p>
          </div>
      </div>
      <div className="carousel1">
        {moviesShowsImages.slice(0, 5).concat(moviesShowsImages.slice(0, 5)).map((image, index) => (
          <img key={index} src={image} alt="movie/show" className="carousel-image" />
        ))}
      </div>
      <div className="carousel2">
        {moviesShowsImages.slice(5).concat(moviesShowsImages.slice(5)).map((image, index) => (
          <img key={index} src={image} alt="movie/show" className="carousel-image" />
        ))}
      </div>
    </div>
  );
}

export default MoviesShows;
