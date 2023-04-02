import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header class="body-font bg-violet-500 text-white">
                <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <NavLink class="flex title-font font-medium items-center mb-4 md:mb-0" to="/"><span class="ml-3 text-2xl text-white hover:cursor-pointer">Weather</span></NavLink>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ul className='flex'>
                            <li >
                                <NavLink className="mr-5 text-xl font-medium hover:underline cursor-pointer" to="/">Home</NavLink>
                            </li>

                            <li>
                                <NavLink className="mr-5 text-xl font-medium hover:underline cursor-pointer" to="/weather">Weather</NavLink>
                            </li>

                            <li>
                                <NavLink className="mr-5 text-xl font-medium hover:underline cursor-pointer" to="/about">About</NavLink>
                            </li>

                            <li>
                                <NavLink className="mr-5 text-xl font-medium hover:underline cursor-pointer" to="/contact">Contact us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar