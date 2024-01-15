import React from 'react'

 const Contact = () => {
  return (
    <div name="testimonial" className='overflow-hidden relative lg:py-20  h-min-screen bg-green-800 '>
     <div className='h-[50px] bg-white 
      rounded-[50%] w-full -top-7 items-center absolute '></div>   
    <div className='max-w-screen-lg  flex items-center px-3  flex-col mx-auto 
    sm:space-y-0 space-y-10 p-5'></div>
    {/*1st section*/}
    <div className='text flex flex-col md:flex-row  lg:p-7 md:justify-between text-white  ' >
        <div className='flex flex-row text-2xl mb-3 px-2 '>
        <span><i className="fa-solid fa-bolt"></i></span>
        <h2 className='text-xl font-signature'>Arc.in</h2>
        </div>

        <h3 className='px-2'>Architecture with understanding people's</h3>

        <span className='space-x-4 flex flex-row justify-between my-2 px-2'>
           <h2>Get in touch</h2>  
           <button className=' md:right-2 rounded-full md:px-8 px-2 text-green-800  flex items-center
            md:text-sm text-sm bg-yellow-400 gap-2 transition ease-out duration-300 transform hover:scale-110'>
            <p>Contact Us</p>
            </button>
        </span>
    </div>
    <div className='flex flex-col md:flex-row  md:justify-between lg:w-full md:px-8 px-2 '>
      <div className='grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2  gap-4 md:gap-20 md:justify-between w-1/2 top-0 text-white '>
         <span>Home</span>
         <span>Design</span>
         <span>Work</span>
         <span>Porject</span>
         <span>About Us</span>
         <span>Blog</span>
         <span>Service</span>
         <span>Awards</span>
      </div>
      <div className='flex flex-row  space-x-4 text-white text-2xl mt-5 justify-center px-5 '>
      <i className="fa-brands fa-facebook hover:scale-105 cursor-pointer"></i>
      <i className="fa-brands fa-instagram hover:scale-105 cursor-pointer"></i>
      <i className="fa-brands fa-youtube hover:scale-105 cursor-pointer"></i>
      <i className="fa-brands fa-linkedin-in hover:scale-105 cursor-pointer"></i>
      <i className="fa-brands fa-x-twitter hover:scale-105 cursor-pointer"></i>
      </div> 
    </div>
    
    
    </div>
  )
}
export default Contact
