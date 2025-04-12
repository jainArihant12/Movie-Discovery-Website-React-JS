import React, { useState, useEffect, useRef } from 'react';
import MovieCards from './MovieCards';
import { fetchMovies, fetchPopularMovies } from '../api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  let debounceTimer =useRef(null);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const moviesData = await fetchPopularMovies();
      if (moviesData.length === 0) {
        setError("No popular movies available.");
      } else {
        setMovies(moviesData);
        setError(null); // Clear errors
      }
    } catch (error) {
      setError("Failed to load movies.");
    }
    setLoading(false);
  };

  useEffect(() => {
    
    loadMovies();
  }, []);


  const handleChange = (e) => {
    const query = e.target.value.trim();
    setSearchQuery(query);

    // Cancel previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    
    if (query.length === 0) {
      setError(null);
      loadMovies();
      return;
    }

    // Only fetch movies if query has at least 3 characters
    if (query.length < 3) {
      setMovies([]);
      setError("Enter more letters.");
      return;
    }

   

    debounceTimer = setTimeout(async () => {
      setLoading(true);
      try {
        const results = await fetchMovies(query);
        if (results.length === 0) {
          setError('No Movies Found');
          setMovies([]);
        } else {
          setError(null);
          setMovies(results);
        }
      } catch (error) {
        setError('Error fetching movies');
      }
      setLoading(false);
    }, 500); // 500ms delay before making API request
  };

  return (
    <>
      <form className="dark:bg-gray-800 dark:border-gray-700 border-b-2 border-gray-300 bg-gray-300 w-screen h-14 flex justify-center items-center p-4 ">
        <input
          type="search"
          className="dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 w-60 h-7 focus:outline-none text-gray-800 border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 bg-gray-100"
          placeholder="Search A Movie"
          onChange={handleChange}
        />
      </form>

      <div className="dark:bg-gray-950 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
        {loading && <p>Loading movies...</p>}
        {!loading && error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && movies.length > 0 && movies.map((movi) => <MovieCards key={movi.imdbID} movie={movi} />)}
      </div>
    </>
  );
};

export default Home;
