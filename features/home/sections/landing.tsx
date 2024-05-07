import React from 'react'
import { Button } from '@nextui-org/react';
import { IoChevronForward } from "react-icons/io5";
import { useRouter } from 'next/router';
import {motion , useScroll, useTransform } from 'framer-motion';

export default function LandingSection() {
     const title = "Good Ideas: Good Team and Good Chance to build a Good Future";
     const description = "Run business by standard, honest and professional to serve our service"
     const router = useRouter();
     const ref = React.useRef(null)

     const {scrollYProgress } = useScroll({
      target : ref , 
      offset: ["start start" , "end start"]
     })
     const backgroundY =  useTransform(scrollYProgress, [0,1], ["0" , "100%"]);

  return (
    <section ref = {ref} className='w-full h-[1000px] flex justify-center relative text-white'>
        <section className='absolute z-10 max-w-[1000px] w-full pl-3 pr-3 h-full flex items-center justify-end'>
          <div 
                className='flex flex-col gap-5 items-end'>
                  <div className='max-w-[500px] text-right'>
                    <p className='text-5xl leading-tight font-bold'>{title}</p>
                  </div>
                  <div className='w-[180px] h-[50px]'>
                    <Button 
                    color='primary' 
                    className='w-full h-full rounded-none shadow-lg text-lg'
                    endContent = {<IoChevronForward/>}
                    onClick={() => router.push('/contact')}
                    >Contact Us</Button>
                  </div>
                </div>
          </section>
          <div 
          
          className='w-full h-full bg-black absolute z-0'>
            <motion.img
            style={{y:backgroundY}}
            src='./construction.jpg'
            className='w-full h-full max-w-full max-h-full object-cover opacity-65'
            />
          </div>
    </section>
  )
}
