import React from 'react'
import Cards from './Cards';
import home from '../Assets/image4.jpg'
const Works = () => {
     return (
       <div name="Design" className="  w-full md:w-[100%] lg:w-[100%] flex flex-col items-center min-h-screen space-y-7">
         <div className='flex justify-center md:flex-row py-7 m-4 text-2xl '>
           <h2 className='font-bold font-slogan1 lg:text-4xl text-green-800'>Bringing new life to old processes</h2>
         </div>
         <div className='flex flex-col  px-2 w-1/2 sm:w-[80%] lg:w-[80%]  lg:flex-row sm:space-x-6 space-y-1 '>
           <Cards icon="fa-regular fa-object-ungroup" heading="Interior Design" about="Interior Design is the art and science of enhancing"/>
           <Cards icon="fa-solid fa-toolbox" heading="Construction" about="The technique,procedure,and material used during"/>
           <Cards icon="fa-solid fa-tree" heading="Architecture" about="Interior Design is the art and science of enhancing"/>
           <Cards icon="fa-solid fa-explosion" heading="Decoration" about="The gymnasium was adorned with posters and crepe-paper"/>
         </div>
         <div className='mid-container flex flex-col justify-center items-center md:flex-row w-[79%]'>
                   
         <div className='image-section flex items-center justify-center rounded-lg  '>
        
          <img src={home} alt="Architecture" className=' sm:w-[60%] w-[60%] rounded-full rounded-b-sm p-4 sm:h-[70%]' />
         </div>
         <div className='written-section p-4 m-2 space-y-3'>
             <span className='text-red-700 flex items-center justify-center my-3'>Our Architects journey</span>
         <h1 className='text-3xl text-green-800 sm:text-4xl font-slogan'>Beautiful acoustics and achievments</h1>
         <p className='text-justify font-slogan1'>Studying Architecture is demanding and is rated as on of the most
          challenging courses at the university. It reuires long hours, commitment and a 7 year
          study period.
         </p>
         <button className='bg-orange-500 sm:rounded-lg rounded-lg hover:scale-105 p-2'>Read More</button>
           {/*experience section*/}
         <div className='grid grid-cols-3  mt-10 p-2'>
            <div className=' '>
            <span><h2 className='text-2xl text-bold text-green-800'>12</h2></span>
             <p>years of</p>
             <p>experience</p>
            </div>
             <div className='flex flex-col '>
             <span><h2 className='text-2xl text-bold text-green-800'>246</h2></span>
             <p>Projects</p>
             </div>
             <div className='flex flex-col '>
             <span><h2 className='text-2xl text-bold text-green-800'>42</h2></span>
             <p>Awards Gained</p>
             </div>
             
         </div>
         </div>
          <div>

          </div>
         </div>
       </div>
     );
   };
   
   export default Works;