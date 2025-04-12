
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Component/Home'
import Favourite from './Component/Favourite'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieCards from './Component/MovieCards'
import {FavoritesProvider} from './Component/FavoritesProvider';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(<><Navbar/> <Home/></>)
    },
    {
      path:"/favourite",
      element:(<>
      <Navbar/>
      <Favourite/>
      </>)
    }
  ]);
  return (
    <>
     <FavoritesProvider>
      <RouterProvider router={router}/>
      </FavoritesProvider>
      
    </>
  )
}

export default App
