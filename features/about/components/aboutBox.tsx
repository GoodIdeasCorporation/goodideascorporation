import React from 'react'
import { aboutUsStory } from '@/config/information'
import { Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { AboutPath } from '../assets/config'

type AboutPathType = typeof AboutPath[0];

export default function AboutBox() {

  return (
    <section className='w-full min-h-[250px]  rounded-md  mt-10 min-[700px]:p-0 p-5'>
     <div className='flex flex-col gap-7 bg-gray-100  p-5'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl font-bold'>Our Story</h1>
            <Divider className='w-[60px] h-[8px] bg-blue-500 ml-1'/>
        </div>
        <p className='text-lg'>{aboutUsStory.description}</p>
     </div>
     <div className='w-full p-5 mt-5 flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl font-bold'>Our Goals: Go Green and Eco Friendly</h1>
          <Divider className='w-[60px] h-[8px] bg-green-500 ml-1'/>
        </div>
        <div className='grid grid-cols-4 justify-center items-center'>
          {AboutPath.map((i:AboutPathType , index:number) => 
            <Image
            key = {index}
            width={i.size}
            height={i.size}
            src = {i.path}
          />
          )}
        </div>
        <div className='min-[700px]:flex-row flex-col w-full min-[700px]:h-[350px] flex gap-2 '>
            <Image
              className='w-full  h-full  object-cover rounded-none p-0'
              src = "./ecofriendly/green_leving_1.jpeg"
            />
            <Image
              className='w-full h-full object-cover rounded-none'
              src = "./ecofriendly/green_leving_2.jpeg"
            />
        </div>
     </div>

    </section>
  )
}
