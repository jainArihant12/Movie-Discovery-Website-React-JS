const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchPopularMovies = async () => {
    try {
        const popularTitles = ["The Avengers","Harry Potter", "Avatar","Inception", "The Dark Knight","Avengers: Endgame" ,"Interstellar","Titanic"];

        // Fetch all movies in parallel with proper error handling
        const moviePromises = popularTitles.map(async (title) => {
            try {
                const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${title}`);
                return await response.json(); // Properly await JSON conversion
            } catch (error) {
                console.error(`Error fetching movie: ${title}`, error);
                return null; // Return null so we can filter it out later
            }
        });

        const movies = await Promise.all(moviePromises);

        // Filter out failed API requests
        return movies.filter(movie => movie && movie.Response !== "False");
        
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];  // Return an empty array to prevent UI crashes
    }
};

export const fetchMovies = async (query)=>{
     
     try{
      const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`)
      const data = await response.json();
      console.log(data);
       if (data.Response === "False") {
        return []; 
    }

    return data.Search || [];
     }
     catch(error){
        console.error("Error searching Movies:",error)
        return [];
     }
    
}