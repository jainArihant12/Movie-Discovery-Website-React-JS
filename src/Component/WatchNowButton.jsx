import React from "react";

const WatchNowButton = ({ imdbID }) => {
  if (!imdbID) return null; // Hide button if there's no IMDb ID

  return (
    <a
      href={`https://www.imdb.com/title/${imdbID}/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="px-4 py-2 rounded transition duration-300 
                         bg-blue-500 text-white hover:bg-blue-700
                         dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600">
        🎬 Watch Now
      </button>
    </a>
  );
};

export default WatchNowButton;
