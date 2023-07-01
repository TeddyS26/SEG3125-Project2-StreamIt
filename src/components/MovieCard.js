import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onWatchlist, onAddToWatchlist, onRemoveFromWatchlist }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (event) => {
        if (event.target === event.currentTarget) {
            setShowModal(false);
        }
    };

    const handleWatchlistButton = () => {
        if (onWatchlist) {
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
                                    <p className="reviews">{movie.reviews} Stars</p>
                                    <div className="hover-data">
                                        <p><span className="label">Ratio:</span> {movie.ratio}</p>
                                        <p><span className="label">Watched:</span> {movie.watched}</p>
                                        <p><span className="label">Re-watched:</span> {movie.rewatched}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cast-description">
                                <p>Cast: {movie.cast.join(', ')}</p>
                            </div>
                        </div>
                        <div className="modal-right">
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                        </div>
                        <button className="play-button">Play</button>
                        <button className="watchlist-button" onClick={handleWatchlistButton}>
                            {onWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieCard;