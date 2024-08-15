import React from 'react'
import { useFetch } from '../Hook/useFetch'
import { Link } from 'react-router-dom'

function Products() {
  const {data} = useFetch("https://fakestoreapi.com/products")
  document.title = "Products"
  
  return (
    <div className='bg-violet-700'>
      <ul className='w-[1500px] mx-auto flex flex-wrap pt-[20px] space-x-[10px] space-y-[15px] pb-[50px]'>
      {data.map(item => (
        <li className='w-[350px] h-[400px] mt-[15px] shadow ml-[10px] p-[10px] bg-white rounded-lg flex flex-col justify-between'>
          <h3 className='text-center'>{item.title}</h3>
          <img src={item.image} alt="img" width={150} height={130} className='m-auto' />
          
          <Link to={`/about/${item.id}`}><button className='w-full border-[1px] border-violet-700 py-[7px] rounded-lg text-violet-700'> About </button></Link>
          
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Products

