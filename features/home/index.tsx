import React from 'react'
import { Button } from '@nextui-org/react';
import { IoChevronForward } from "react-icons/io5";
import LandingSection from './sections/landing';
import IntroductionSection from './sections/introduction';
import Outro from './sections/outro';
import { Image } from '@nextui-org/react';
export const HomePage = () => {

  return (
     <section className='w-full'>
      <section className='w-full '>
        <LandingSection/>
        <IntroductionSection/>
        <Outro/>
      </section>
   
     </section>

  )
}

