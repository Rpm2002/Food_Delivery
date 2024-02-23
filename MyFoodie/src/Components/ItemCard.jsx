import React from 'react'
import { GoPlus } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { LuMinus } from "react-icons/lu";

function ItemCard() {
  return (
    <div className='flex gap-2 rounded-lg p-2 shadow-md mb-3'>
      <AiOutlineDelete  className='absolute right-7 hover:text-red-500'/>
      <img 
        src='https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5'
        alt='' 
        className='w-[50px] h-[50px]'
      />

      <div>
        <h2 className='font-bold text-gray-800'>Onion Pizza</h2>
        <div className='flex justify-between'>
        <span className='text-violet-600 font-bold'>₹120</span>
          <div className='flex justify-center items-center gap-2 absolute right-7'>
            <GoPlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-violet-600 hover:border-none rounded-md p-1 text-xl trasnition-all ease-linear cursor-pointer'/>
            <span>1</span>
            <LuMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-violet-600 hover:border-none rounded-md p-1 text-xl trasnition-all ease-linear cursor-pointer'/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ItemCard