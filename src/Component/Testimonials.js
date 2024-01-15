import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../Assets/p1.jpg';
import img2 from '../Assets/p2.jpg';
import img3 from '../Assets/p3.jpg';
import img4 from '../Assets/p4.jpg';
const responsive = {
    superLargeDesktop:{
        breakpoint:{max:4000, min:3000},
        items: 3,
    },
    desktop:{
        breakpoint:{max:3000, min:1024},
        items: 3,
    },
    tablet:{
        breakpoint:{max:1024, min: 768},
        items: 2,
    },
    module:{
        breakpoint:{max:768, min:0},
        items: 1,
    },

};
const Testimonials = () => {
    const Buttongroup = ({next ,previous})=>{
         return(
            <div className='carousel-button-group mb-3 lg:top-2 gap-4 flex '>
              <button onClick={()=>previous()}>
              <i class="fa-solid fa-circle-chevron-left"></i>
              </button>
              <button onClick={()=>next()}>
              <i class="fa-solid fa-circle-chevron-right"></i>
              </button>
            </div>
         )
    }
    const Cards =({img,name,title,desc})=>{
        return(
          <div className='bg-[#06412f] w-80 relative flex  justify-center z-20 p-8  mt-40'>
           <button className='rounded-full bg-[#06412f] absolute rounded-b-none h-32 w-64  -top-20'></button>
           <div className='relative z-20 text-center'>
            <img src={img} alt='' className='w-20 h-20 rounded-full -mt-8 mx-auto' />
            <p className='text-xl primary-front font-semibold  pt-4 pb-2 '>{name}
            </p>
            <p className='font-light pb-4'>{title}
            </p>
            <p className='pt-4'>{desc}</p>
           </div>
          </div>)
    }
  return (
    <div name="Reviews" className='overflow-hidden relative lg:py-20   h-min-screen bg-green-800 '>
     <div className='h-[50px] bg-white 
      rounded-[50%] w-full -top-7 items-center absolute '></div>   
    <div className='max-w-screen-lg  flex items-center px-3  flex-col mx-auto 
    sm:space-y-0 space-y-10 p-5'></div>
    {/*cariusel section*/}
    <div className='  p-3 pb-8 lg:pb-0 text-white ml-20   relative'> 
      <span className='text-white'>Testimonial</span>
      <h2 className='text-3xl font-slogan1 text-white'>What are client say's</h2>
      <Carousel className=' '
      swipeable={true}
      draggable={false}
      responsive={responsive}
      arrows={false}
      renderButtonGroupOutside={true}
      infinite
      autoPlay
      customButtonGroup={<Buttongroup/>}>
        <Cards img={img1} name={'wade Warren'} title={"co-founder At Attalo"} desc={"elkgmegnrgklnregklnregng efllkrengregm"}/>
        <Cards img={img2} name={'Jarry Wilson'} title={"Project Manager At Nakaso"} desc={"elkgmegnrgklnregklnregng efllkrengregm"}/>
        <Cards img={img3} name={'Floyd Miles'} title={"co-founder At Rajuna"} desc={"elkgmegnrgklnregklnregng efllkrengregm"}/>
        <Cards img={img4} name={'warren'} title={"co founder "} desc={"elkgmegnrgklnregklnregng efllkrengregm"}/>
      </Carousel>
    </div>
    </div>
  )
}
export default Testimonials;