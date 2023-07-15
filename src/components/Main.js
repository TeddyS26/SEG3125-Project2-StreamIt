import React, { useState, useEffect } from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import useMovieData from './movieData';
import photo from './images/sm1.jpg';
import titleImage from './images/title.png';
import { useTranslation } from 'react-i18next';
import canadianFlag from './images/flag1.png';
import frenchFlag from './images/flag2.png';

const Main = () => {
    const { t, i18n } = useTranslation();
    const movies = useMovieData();

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [uniqueGenres, setUniqueGenres] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const genres = new Set();
        movies.forEach((movie) => {
            movie.genre.forEach((genre) => genres.add(genre));
        });
        setUniqueGenres(Array.from(genres));
    }, []);

    const handleGenreChange = (event) => {
        if (event.target.checked) {
            setSelectedGenres([...selectedGenres, event.target.value]);
        } else {
            setSelectedGenres(selectedGenres.filter((genre) => genre !== event.target.value));
        }
    };

    const handleLogout = () => {
        console.log('Logging out');
        navigate('/');
    };

    const addToWatchlist = (movie) => {
        if (!isMovieInWatchlist(movie)) {
            setWatchlist([...watchlist, movie]);
        }
    };

    const removeFromWatchlist = (movie) => {
        setWatchlist(watchlist.filter(item => item.id !== movie.id));
    };

    const isMovieInWatchlist = (movie) => {
        return watchlist.some(watchlistMovie => watchlistMovie.id === movie.id);
    };

    const getMoviesByGenre = (genre) => {
        return movies.filter((movie) => movie.genre.includes(genre));
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="main-page">
            <div className="top-bar">
                <div className="flag-container">
                    <img
                        src={i18n.language === 'en' ? canadianFlag : frenchFlag}
                        alt="Flag"
                        onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
                    />
                </div>
                <div className="logout-button" onClick={handleLogout}>
                    {t('logout')}
                </div>
            </div>
            <div className="main-image">
                <img src={photo} alt="Main" />
                <div className="main-image-content">
                    <div className="movie-title-image">
                        <img src={titleImage} alt="Movie Title" />
                    </div>
                    <div className="movie-details">
                        <h2>{t('mostwatched')}</h2>
                        <button className="play-button">{t('play')}</button>
                    </div>
                </div>
            </div>
            <div className="filter-section">
                <h2>{t('filters')}</h2>
                <div className="genres">
                    {uniqueGenres.map((genre) => (
                        <div key={genre}>
                            <label htmlFor={genre}>{genre}</label>
                            <input type="checkbox" id={genre} value={genre} onChange={handleGenreChange} />
                        </div>
                    ))}
                    <div className="watchlist-filter">
                        <label htmlFor="watchlist">{t('watchlist')}</label>
                        <input type="checkbox" id="watchlist" value="watchlist" onChange={handleGenreChange} />
                    </div>
                </div>
            </div>
            <div className="movie-section">
                {selectedGenres.length === 0 || selectedGenres.includes('watchlist') ? (
                    <>
                        {selectedGenres.includes('watchlist') && (
                            <div>
                                <h2>{t('watchlist')}</h2>
                                <div className="movie-row">
                                    {watchlist.map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            isInWatchlist={isMovieInWatchlist(movie)}
                                            onAddToWatchlist={addToWatchlist}
                                            onRemoveFromWatchlist={removeFromWatchlist}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        {!selectedGenres.includes('watchlist') && (
                            <>
                                <h2>{t('mostpopular')}</h2>
                                <div className="movie-row">
                                    {movies.slice(0, 7).map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            isInWatchlist={isMovieInWatchlist(movie)}
                                            onAddToWatchlist={addToWatchlist}
                                            onRemoveFromWatchlist={removeFromWatchlist}
                                        />
                                    ))}
                                </div>
                                <h2>{t('highestrating')}</h2>
                                <div className="movie-row">
                                    {movies.slice(7, 14).map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            isInWatchlist={isMovieInWatchlist(movie)}
                                            onAddToWatchlist={addToWatchlist}
                                            onRemoveFromWatchlist={removeFromWatchlist}
                                        />
                                    ))}
                                </div>
                                <h2>{t('mostwatched')}</h2>
                                <div className="movie-row">
                                    {movies.slice(14, 21).map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            isInWatchlist={isMovieInWatchlist(movie)}
                                            onAddToWatchlist={addToWatchlist}
                                            onRemoveFromWatchlist={removeFromWatchlist}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    selectedGenres.map((genre) => (
                        <div key={genre}>
                            <h2>{genre}</h2>
                            <div className="movie-row">
                                {getMoviesByGenre(genre).map((movie) => (
                                    <MovieCard
                                        key={movie.id}
                                        movie={movie}
                                        isInWatchlist={isMovieInWatchlist(movie)}
                                        onAddToWatchlist={addToWatchlist}
                                        onRemoveFromWatchlist={removeFromWatchlist}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Main;