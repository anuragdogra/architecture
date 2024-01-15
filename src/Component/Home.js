import React from 'react'
import home from '../Assets/home.jpg'
const Home = () => {
  return (
    <div name="home" className=' relative lg:py-20 h-[430px]  bg-green-800 '>
     <div className='h-[50px] bg-white 
      rounded-[50%] w-full -bottom-7 items-center absolute '></div>   
    <div className='max-w-screen-lg  flex items-center justify-center md:flex-row flex-col mx-auto 
    sm:space-y-0 space-y-10 p-5'>
      <div className='text-white lg:w-1/3 space-y-5 flex flex-col  justify-center mx-auto'>
        {/* text section */} 
        <h1 className='text-2xl w-full mt-10 lg:mt-0 lg:py-0 sm:text-5xl font-slogan'>Architects with a different approach</h1>
        <span className='text-justify mb-[-10px]'>Architecture is the art and technique of designing and building, 
          as distinguished from the skills</span>
      </div>
      <div className=' w-2/3 lg:w-1/2  mx-auto  lg:flex justify-between lg:py-0'>
        <img className='rounded-lg w-[350px] mt-0   lg:w-full  ' alt='abc' src={home}/>
        {/* image section*/}
      </div>
    </div>
    
    
  </div>
  
  )
}
export default Home;