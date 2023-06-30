import React, { useState, useEffect } from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import movieData from './movieData';
import photo from './images/sm1.jpg';
import titleImage from './images/title.png';

const Main = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [uniqueGenres, setUniqueGenres] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Extract genres from movie data and create a set of unique genres
        const genres = new Set();
        movieData.forEach((movie) => {
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
        if (!watchlist.includes(movie)) {
            setWatchlist([...watchlist, movie]);
        }
    };

    const removeFromWatchlist = (movie) => {
        setWatchlist(watchlist.filter((item) => item !== movie));
    };

    const isMovieInWatchlist = (movie) => {
        return watchlist.includes(movie);
    };

    const getMoviesByGenre = (genre) => {
        return movieData.filter((movie) => movie.genre.includes(genre));
    };

    return (
        <div className="main-page">
            <div className="logout-button" onClick={handleLogout}>
                Log Out
            </div>
            <div className="main-image">
                <img src={photo} alt="Main" />
                <div className="main-image-content">
                    <div className="movie-title-image">
                        <img src={titleImage} alt="Movie Title" />
                    </div>
                    <div className="movie-details">
                        <h2>Most Watched</h2>
                        <button className="play-button">Play</button>
                    </div>
                </div>
            </div>
            <div className="filter-section">
                <h2>Available Filters:</h2>
                <div className="genres">
                    {uniqueGenres.map((genre) => (
                        <div key={genre}>
                            <label htmlFor={genre}>{genre}</label>
                            <input type="checkbox" id={genre} value={genre} onChange={handleGenreChange} />
                        </div>
                    ))}
                    <div className="watchlist-filter">
                        <label htmlFor="watchlist">Watchlist</label>
                        <input type="checkbox" id="watchlist" value="watchlist" onChange={handleGenreChange} />
                    </div>
                </div>
            </div>
            <div className="movie-section">
                {selectedGenres.length === 0 || selectedGenres.includes('watchlist') ? (
                    <>
                        {selectedGenres.includes('watchlist') && (
                            <div>
                                <h2>Watchlist</h2>
                                <div className="movie-row">
                                    {watchlist.map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            onWatchlist={isMovieInWatchlist(movie)}
                                            onAddToWatchlist={addToWatchlist}
                                            onRemoveFromWatchlist={removeFromWatchlist}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        {!selectedGenres.includes('watchlist') && (
                            <>
                                <h2>Most Popular</h2>
                                <div className="movie-row">
                                    {movieData.slice(0, 7).map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            onWatchlist={isMovieInWatchlist(movie)}
                                            onAddToWatchlist={addToWatchlist}
                                            onRemoveFromWatchlist={removeFromWatchlist}
                                        />
                                    ))}
                                </div>
                                <h2>Highest Ratings</h2>
                                <div className="movie-row">
                                    {movieData.slice(7, 14).map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            onWatchlist={isMovieInWatchlist(movie)}
                                            onAddToWatchlist={addToWatchlist}
                                            onRemoveFromWatchlist={removeFromWatchlist}
                                        />
                                    ))}
                                </div>
                                <h2>Most Watched</h2>
                                <div className="movie-row">
                                    {movieData.slice(14, 21).map((movie) => (
                                        <MovieCard
                                            key={movie.id}
                                            movie={movie}
                                            onWatchlist={isMovieInWatchlist(movie)}
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
                                        onWatchlist={isMovieInWatchlist(movie)}
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