import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesProvider';
import WatchNowButton from './WatchNowButton'; // ✅ Import the WatchNowButton

const MovieCards = ({ movie }) => {
    const { favorites = [], toggleFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    const placeholderPoster = "https://via.placeholder.com/200x300?text=No+Image";

    return (
        <div className="dark:shadow-lg dark:shadow-gray-950/50 border-2 border-gray-300 bg-gray-100 dark:bg-gray-800 border-black hover:scale-105 transition-transform duration-300 flex flex-col w-full h-[480px] rounded-lg overflow-hidden p-4">

            {/* Poster with Fixed Size */}
            <div className="w-full h-[300px] flex justify-center items-center">
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : placeholderPoster}
                    alt={movie.Title}
                    className="h-full w-auto object-cover"
                />
            </div>

            {/* Movie Details */}
            <div className="p-3 flex-1 flex flex-col justify-between text-center">
                <h3 className="dark:text-gray-100 text-gray-900 text-lg font-semibold text-gray-800 truncate">{movie.Title}</h3>
                <p className="dark:text-gray-400 text-gray-600">{movie.Year}</p>

                {/* Watch Now Button ✅ */}
                <WatchNowButton imdbID={movie.imdbID} />

                {/* Favorites Button */}
                <button
                    className={`px-3 py-1 mt-2 text-white rounded ${isFavorite ? "bg-red-500" : "bg-gray-500"} transition-colors duration-300`}
                    onClick={() => toggleFavorite(movie)}
                >
                    {isFavorite ? "Remove from Favorites ❤️" : "Add to Favorites 🤍"}
                </button>
            </div>
        </div>
    );
};

export default MovieCards;
