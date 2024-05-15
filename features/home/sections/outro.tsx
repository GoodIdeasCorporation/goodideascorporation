import React from 'react'
import { Button } from '@nextui-org/react';
import { IoChevronForward } from 'react-icons/io5';
import {motion , useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';
import { Divider } from '@nextui-org/react';

export default function Outro() {
 const title = "The essential standards of quality and safety are central of our works.";
 const description = "The company also emphasize on honesty and sincerity which we always give to the customer. Consequently, our past customer always come back to request our service again or give worth of mouth to other people to use our service.  Paying attention to every important detail to reach the customers’ satisfaction, as well as makes the company become one of the famous all in one of house business companies."
 const ref = React.useRef(null)
 const router = useRouter();
 const {scrollYProgress } = useScroll({
    target : ref , 
    offset: ["start start" , "end start"]
 })
 const backgroundY =  useTransform(scrollYProgress, [0,1], ["0" , "100%"]);
 const textY = useTransform(scrollYProgress , [0,1] ,["0" , "200%"])

return (
     <section ref = {ref} className='w-full min-[700px]:h-[450px] h-[700px] flex justify-center relative text-white'>
        <section 
        className='absolute  z-10 w-full  max-w-[1000px] h-full flex flex-col gap-10 items-center justify-center  flex '>
             <Divider className='w-[60px] h-[8px] bg-blue-500 ml-1'/>
            <h1 className='min-[700px]:w-[70%] text-4xl font-bold text-center'>{title}</h1>
            <p className='min-[700px]:w-[70%] w-[90%] text-center text-lg'>{description}</p>
            <div className='w-[180px] h-[50px]'>
            <Button 
            color='primary' 
            className='w-full h-full rounded-none shadow-lg text-lg '
            endContent = {<IoChevronForward/>}
            onPress={()=> router.push("/contact")}
            >Contact Us</Button>
            </div>
        </section>
        <div 
        className='w-full h-full bg-black absolute z-0'>
            <motion.img
            style={{y:backgroundY}}
            src='./construction.jpg'
            className='w-full h-full max-w-full max-h-full object-cover opacity-60'
            />
        </div>
    </section>
)
}
