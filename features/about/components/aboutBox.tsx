import React from 'react'
import { aboutUsStory } from '@/config/information'
import { Divider } from '@nextui-org/react'

export default function AboutBox() {
  return (
    <section className='w-full min-h-[250px] bg-gray-100  rounded-md p-5 mt-10'>
     <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl font-bold'>Our Story</h1>
            <Divider className='w-[60px] h-[8px] bg-blue-500 ml-1'/>
        </div>
        <p className='text-lg'>{aboutUsStory.description}</p>
     </div>
    </section>
  )
}
