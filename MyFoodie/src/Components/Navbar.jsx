import React from 'react'
import { useDispatch } from "react-redux";
import { setSearch } from '../Redux/slices/SearchSlice';
function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className="pl-4 mt-1 pb-4">
            <h1 className='font-bold'>Swigato</h1>
          </div>

          <div>
            <input
              type='search'
              name='search'
              id=''
              placeholder='Search for reastaurants and food'
              autoComplete='off'
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className='p-3 m-3 w-64 lg:w-96 border border-gray-400 text-sm rounded-lg outline-none'
            />
          </div>
          
          <div className="hidden md:block pr-4 items-center mr-2 space-x-5 ">
              <a href="#" className="bg-gray-200 px-2 py-2  hover:text-white hover:bg-violet-600
           rounded font-bold cursor-pointer">Login</a>
              <a href="#" className="bg-gray-200 px-2 py-2 hover:text-white hover:bg-violet-600
           rounded font-bold cursor-pointer">Sign Up</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar