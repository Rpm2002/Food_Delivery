import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import ItemCard from './ItemCard';
import {useSelector} from "react-redux"
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";

function Cart() {
  const [activeCart,setActiveCart]=useState(true)
  const cartItems=useSelector(state=>state.cart)
  const TotalQty=cartItems.reduce((TotalQty,item)=>TotalQty+item.qty,0)
  const Totalprice=cartItems.reduce((total,item)=>total+(item.qty*item.price),0)
  console.log(cartItems);
  return (
    <>
        <div className={`fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white p-4  ${activeCart? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50` }>
          <div className='flex justify-between items-center my-3'>
            <span className='text-xl text-gray-800 font-bold'>My Order</span>
            <MdOutlineClose 
            onClick={()=>{
              setActiveCart(!activeCart)
            }}
            className='border-2 border-gray-600 font-bold rounded-lg
            p-1 text-xl hover:text-red-500 cursor-pointer hover:border-red-500' />
          </div>

          {cartItems.length>0?cartItems.map((food)=>{
            return(
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              qty={food.qty}
              img={food.img}
              price={food.price}
            />
            )
          }) : <h2 className='text-center text-xl font-bold text-gray-800 pt-6'>Nothing in the Cart</h2>}

          <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800 ml-1'>Items : {TotalQty} </h3>
            <h3 className='font-semibold text-gray-800 ml-1'>Total Amount : {Totalprice}</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button className='bg-violet-600 font-bold px-3 text-white 
            py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-3 hover:bg-violet-500'>Checkout</button>
          </div>
        
        </div>
        <FaCartPlus 
        onClick={()=>{
          setActiveCart(!activeCart)
        }}
        className={`fixed text-2xl cursor-pointer hover:text-green-500 right-4 bottom-4 
         ${TotalQty>0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
    
  )
}

export default Cart