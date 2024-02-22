import React from 'react'
import { MdOutlineClose } from "react-icons/md";
function Cart() {
  return (
    <>
        <div className='fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white p-4'>
          <div className='flex justify-between items-center my-3'>
            <span className='text-xl text-gray-800 font-bold'>My Order</span>
            <MdOutlineClose className='border-2 border-gray-600 font-bold rounded-lg
            p-1 text-xl hover:text-red-300 cursor-pointer hover:border-red-300' />
          </div>

          <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800 ml-1'>Items : </h3>
            <h3 className='font-semibold text-gray-800 ml-1'>Total Amount : </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button className='bg-violet-600 font-bold px-3 text-white 
            py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-3 hover:bg-violet-500'>Checkout</button>
          </div>
        
        </div>
    </>
    
  )
}

export default Cart