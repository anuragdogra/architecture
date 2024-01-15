import React from 'react'
import hom4 from '../Assets/hom4.jpg'
 const NewsLetter = () => {
  return (
    <div name="About" className=' relative lg:py-20 items-center flex flex-col justify-center h-[430px] min-h-screen  '>
    <div className='h-[50px] bg-white
     rounded-[50%] w-full -bottom-7 items-center absolute -top-6 '></div>  
     <div className='mid-container flex flex-col items-center md:flex-row w-[79%]'>
       <div className='written-section flex flex-col p-4 m-2 space-y-3'>
         <span className='text-red-700 mt-12'>Our NewsLetter</span>
         <span className='text-2xl lg:text-3xl text-green-800 font-slogan w-[350px] lg:w-[500px]'>Subscribe our daily NewsLetter for Update</span>
         <span>Studying Architecture is demanding and is rated as one of the 
            most challenging courses atthe university.It requires long 
            hours, commitment, and seven-year study period. 
         </span>
         <div className="relative flex items-center pt-8 lg:w-1/2">
          <input type="email" placeholder='enter your email' className="bg-white rounded-full w-1/2 md:px-6 outline-none px-2 h-16"  required/>
          <button className='absolute md:right-2 rounded-full md:px-8 px-3  flex items-center
           md:text-sm text-sm p-2  right-2 bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110'>
            <p>Subscribe</p>
        </button>
         </div> 
      </div>

       <img src={hom4} alt="Architecture" className=' rounded-full sm:w-[60%] w-[60%]  p-4 sm:h-[100%]' />

     </div>

     </div>
  )
}
export default NewsLetter;
