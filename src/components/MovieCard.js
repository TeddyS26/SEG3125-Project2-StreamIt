import React, { useState } from 'react';
import './MovieCard.css';
import { useTranslation } from 'react-i18next';

const MovieCard = ({ movie, isInWatchlist, onAddToWatchlist, onRemoveFromWatchlist }) => {
    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (event) => {
        if (event.target === event.currentTarget) {
            setShowModal(false);
        }
    };

    const handleWatchlistButton = (event) => {
        event.stopPropagation();
        if (isInWatchlist) {
            onRemoveFromWatchlist(movie);
        } else {
            onAddToWatchlist(movie);
        }
    };

    return (
        <div className="movie-card" onClick={() => setShowModal(true)}>
            <img src={movie.image} alt={movie.title} />
            {showModal && (
                <div className="movie-modal-background" onClick={handleCloseModal}>
                    <div className="movie-modal">
                        <button className="close-button" onClick={(event) => { event.stopPropagation(); handleCloseModal(event); }}>
                            X
                        </button>
                        <div className="modal-left">
                            <img className="modal-image" src={movie.image} alt={movie.title} />
                            <div className="details">
                                <p>{movie.duration}</p>
                                <p>{movie.rating}</p>
                                <div className="reviews-wrapper">
                                    <p className="reviews">{movie.reviews} {t('stars')}</p>
                                    <div className="hover-data">
                                        <p><span className="label">{t('ratio')}</span> {movie.ratio}</p>
                                        <p><span className="label">{t('watched')}</span> {movie.watched}</p>
                                        <p><span className="label">{t('rewatched')}</span> {movie.rewatched}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cast-description">
                                <p>{t('cast')} {movie.cast.join(', ')}</p>
                            </div>
                        </div>
                        <div className="modal-right">
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                        </div>
                        <button className="play-button">{t('play')}</button>
                        <button className="watchlist-button" onClick={handleWatchlistButton}>
                            {isInWatchlist ? t('remove') : t('add')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieCard;