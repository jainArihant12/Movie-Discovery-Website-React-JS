import React from 'react'
import { Link } from 'react-router-dom'
import ToggleSlider from './ToggleSlider'

const Navbar = () => {
    return (
        <section className="w-screen dark:border-gray-800 border-b-2 border-color:gray-600">
            <nav className="dark:bg-gray-900  w-screen  h-16 bg-white  flex justify-between items-center ">
                <div className="mx-8">
                    <p className="dark:text-white text-gray-900 font-bold font text-sm md:text-base">Movies</p>
                </div>
                <ul className="flex gap-5 ">
                    <li className="dark:text-white text-gray-900 text-sm md:text-base "><Link to="/">Home</Link></li>
                    <li className="dark:text-white text-gray-900  text-sm md:text-base"><Link to="/favourite">Favourite</Link></li>
                    <li className='mr-8'> 
                        <ToggleSlider/>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar