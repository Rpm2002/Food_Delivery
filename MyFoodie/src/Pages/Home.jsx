import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItems from '../Components/FoodItems'

function Home() {
  return (
    <>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
    </>
  )
}

export default Home