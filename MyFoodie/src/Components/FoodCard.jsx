import React from 'react'
import { IoIosStar } from "react-icons/io"
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/slices/Cartslice'

function FoodCard({id,img,name,price,desc,category,rating}) {

  const dispatch=useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg 
    hover:scale-95 cursor-grab transition-all duration-150 ease-in-out gap-2'>
        <img 
          src={img}
          alt=""
          className='w-auto h-[130px]'
        />
        <div className='text-sm flex justify-between'>
          <h2>{name}</h2>
          <span className='text-violet-500 '>₹{price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
        <div className='flex justify-between'>
          <span className='flex justify-center items-center'>
          <IoIosStar className='mr-1 text-yellow-400'/>{rating}
          </span>
          <button className='p-2 text-white bg-violet-600 hover:bg-violet-400 rounded-lg text-sm'
          onClick={()=>{
            dispatch(addToCart({id,name,price,rating,qty:1}))
          }}>
            Add to Cart
          </button>
        </div>

    </div>
  )
}

export default FoodCard