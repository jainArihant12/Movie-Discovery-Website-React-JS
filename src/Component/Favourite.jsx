import React, { useContext } from "react";
import { FavoritesContext } from "./FavoritesProvider"; // ✅ Correct import
import MovieCards from "./MovieCards"; // ✅ Import MovieCards

const Favourite = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2 className="text-xl font-bold text-center mt-4">❤️ Favorite Movies</h2>
      <div className="flex flex-wrap">
        {favorites.length > 0 ? (
          favorites.map((movie) => <MovieCards key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="text-center">No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favourite;
