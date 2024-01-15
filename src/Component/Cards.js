import React from 'react'
const Cards = ({icon,heading,about }) => {
  return (
    <div className="flex flex-col justify-center w-full mx-auto rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-emerald-700 transition-all space-y-2 p-4 h-full">
      <div className="text-center hover:text-orange-500 transition-all duration-90">
        <i className={`text-4xl ${icon}`}></i>
      </div>
      <div className="text-center">
        <h1 className='text-bold text-green-800'>{heading}</h1>
        <p className='font-slogan1'>{about}</p>
      </div>
    </div>
  )
}
export default Cards;