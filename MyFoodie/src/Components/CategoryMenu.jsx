import React from 'react'

function CategoryMenu() {
  return (
    <div className='ml-5'>
      <h1 className='text-xl font-semibold lg:text-left text-center'>Find the Best Food</h1>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg
        hover:bg-violet-600 hover:text-white'>
          All</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg
        hover:bg-violet-600 hover:text-white'>
          Breakfast</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg
        hover:bg-violet-600 hover:text-white'>
          Lunch</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg
        hover:bg-violet-600 hover:text-white'>
          Snacks</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg
        hover:bg-violet-600 hover:text-white'>
          Dinner</button>
      </div>
    </div>
  )
}

export default CategoryMenu