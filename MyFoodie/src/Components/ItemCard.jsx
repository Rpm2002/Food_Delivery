import React from 'react'
import { GoPlus } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { LuMinus } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/slices/Cartslice';
import { IncrementQty,DecrementQty } from '../Redux/slices/Cartslice';

const ItemCard=({id,name,qty,price,img})=>{
  const dispatch=useDispatch()
  {
    return (
      <div className='flex gap-2 rounded-lg p-2 shadow-md mb-3'>
        <AiOutlineDelete  onClick={()=>dispatch(removeFromCart({id,img,name,price,qty}))} className='absolute right-7 hover:text-red-500'/>
        <img 
          src={img}
          alt='' 
          className='w-[50px] h-[50px]'
        />
  
        <div className='leading-5'>
          <h2 className='font-bold text-gray-800'>{name}</h2>
          <div className='flex justify-between'>
          <span className='text-violet-600 font-bold'>₹{price}</span>
            <div className='flex justify-center items-center gap-2 absolute right-7'>
              <GoPlus onClick={()=>qty>=1?dispatch(IncrementQty({id})):qty=0} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-violet-600 hover:border-none rounded-md p-1 text-xl trasnition-all ease-linear cursor-pointer'/>
              <span>{qty}</span>
              <LuMinus onClick={()=>qty>=1?dispatch(DecrementQty({id})):qty=0} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-violet-600 hover:border-none rounded-md p-1 text-xl trasnition-all ease-linear cursor-pointer'/>
            </div>
            
          </div>
        </div>
      </div>
    )
} 
}

export default ItemCard