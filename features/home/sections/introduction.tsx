import React from 'react'
import { Button, Divider, Image } from '@nextui-org/react';
import { IoChevronForward } from "react-icons/io5";
import css from 'styled-jsx/css';


export default function IntroductionSection() {
     const title = "Who are Good Ideas?";
     const description = "Good Ideas Corporation Co., Ltd. was established on 9 February 2017. Good Ideas is a mid to large sized company that was run 3 business of home and accommodation, contractor, developer, and home services. We have an experience in various typed of house and restaurant such a pool villa house, bar, restaurant, all kind of extension and renovation work."
      
     const subtitle = "Company Core Value"

  return (
     <section className='w-full min-[700px]:h-[750px] h-[950px] flex  justify-center justify gap-5  bg-white relative'>
        <section className='w-full max-w-[1000px] min-[700px]:flex min-[700px]:h-full  absolute z-10'>
           <div className='min-[700px]:w-3/4  w-full h-full p-2 flex  flex-col items-center justify-start gap-5 pt-[100px]'>
               <div className='w-full flex flex-col gap-5'>
                  <h1 className={'w-[90%] text-4xl font-[800] text-start text-black'}>{title}</h1>
                  <Divider className='w-[60px] h-[8px] bg-blue-500 ml-1'/>
               </div>
              <p className='w-[90%] text-start text-lg text-black'>{description}</p>
           </div>
         <div className='w-full flex items-start justify-center relative min-[700px]:pt-[100px] min-[700px]:mt-0 mt-5 '>
            <div className='absolute z-1'>
               <Image
               className='rounded-none'
               width={350}
               src = "./intro.jpg"
               />
            </div>   
         </div>
      </section>
   </section>
       
  )
}


