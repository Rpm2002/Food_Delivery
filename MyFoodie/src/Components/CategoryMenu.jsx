import React,{useEffect,useState} from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from '../Redux/slices/CategorySlice';

function CategoryMenu() {
  const [categories,setCategories]=useState([])

  const ListUniqueCategories=()=>{
    const uniqueCategories=[
      ...new Set(FoodData.map((food)=>food.category)) 
    ]
    setCategories(uniqueCategories)
    console.log(uniqueCategories);
  }

  useEffect(() => {
    ListUniqueCategories()
  }, [])
  
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className='ml-5'>
      <h1 className='text-xl font-semibold lg:text-left text-center'>Find the Best Food</h1>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
      <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-violet-600 hover:text-white ${
            selectedCategory === "All" && "bg-violet-600 text-white"
          }`}
        >
        All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-violet-600 hover:text-white 
              ${
                selectedCategory === category && "bg-violet-600 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default CategoryMenu