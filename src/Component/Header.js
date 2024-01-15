import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
const Header = () => {
    const [Nav,SetNav] = useState();
    const [top, setTop] = useState(true);
    
useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 3 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
    const links = [
        {
            id:1,
            link:'Design'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Project'
        },

        {
            id:4,
            link:'Reviews'
        }

    ]
  return (
   <div>
    <div className={`flex justify-between fixed -top-0  z-10 w-full   items-center bg-green-900 px-4 
      shadow ${!top && `opacity-70 shadow-lg shadow-green-900/20`} `}>
        {/*brand name*/}
        <div className='flex text-white'>
        <span><i class="fa-solid fa-bolt"></i></span>
        <h2 className='text-xl font-signature'>Arc.in</h2>
        </div>
        {/*nav section*/}
        <ul className=' menu hidden md:flex justify-center p-4 cursor-pointer '>
         {links.map(({id,link})=>(
            <li key={id} className='px-3 font-head hover:scale-105 hover:opacity-40   text-white ' >
                 <Link to={link} smooth duration={500}>{link}</Link>
            </li>
         ))}
        </ul>
        <div onClick={()=>SetNav(!Nav)} className='cursor-pointer z-10 md:hidden'>
            {Nav? <i className='fa fa-times text-2xl py-3 px-4'></i>:<i className='fa-solid fa-bars text-2xl py-3 px-4'></i>}
        </div>
        {Nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
        bg-gradient-to-b from-green-900 via-green-800 to-green-600'><li>
            {links.map(({id,link})=>(
            <li className='px-3 py-3 text-4xl cursor-pointer font-head hover:scale-105 hover:opacity-40   text-white ' key={id}>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
         ))}
            </li></ul>}
        {/*Contact Section*/ }
        <div>
         <div className='text-green-900 '  > 
              <span className='flex item-center rounded-full space-x-3 bg-yellow-400 m-3  py-1 px-2 justify-between cursor-pointer hover:scale-105  '>
                <h3>Contact Us </h3>
                <i className=" text-xl fa-solid fa-caret-right"></i>
              </span> 
              
         </div>
        </div>

    </div>
   </div>
  )
}
export default Header ;
