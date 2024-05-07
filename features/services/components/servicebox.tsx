import React from 'react'
import { Divider } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { IoChevronForward } from 'react-icons/io5'
import { useRouter } from 'next/router'
export default function ServiceBox() {
     const router = useRouter()
  return (
    <section className='w-full min-h-[400px]  p-4'>
          <div className='w-full h-[150px] flex flex-col gap-4 justify-center'>
               <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold'>Our Services</h1>
                    <Divider className='w-[60px] h-[8px] bg-blue-500 ml-1'/>
               </div>
               <p className='text-lg'>Tiny sub heading that focuses on the topic mentioned above</p>
          </div>
          <div className='grid min-[700px]:grid-cols-3  gap-5 pt-4 pb-4'>
               <div className=' flex flex-row min-[600px]:flex-col items-center min-[600px]:justify-center gap-5 '>
                    <div className='w-[250px] h-[250px] bg-gray-200 '>
                         <img src = "./homeBuilder.jpg" className='w-full h-full object-cover'/>
                    </div>
                    <h1 className='text-2xl font-bold'>Home Builder</h1>
               </div>
               <div className=' flex flex-row min-[600px]:flex-col items-center  min-[600px]:justify-center gap-5 '>
                    <div className='w-[250px] h-[250px] bg-gray-200 '>
                         <img src = "./renovation.jpg" className='w-full h-full object-cover'/>
                    </div>
                    <h1 className='text-2xl font-bold'>Renovation</h1>
               </div>
               <div className=' flex flex-row min-[600px]:flex-col items-center  min-[600px]:justify-center gap-5 '>
                    <div className='w-[250px] h-[250px] bg-gray-200 '>
                         <img src = "./homeService.jpg" className='w-full h-full object-cover'/>
                    </div>
                    <h1 className='text-2xl font-bold'>Home Services</h1>
               </div>
          </div>
         <div className='w-[150px] h-[65px] m-auto pt-4 '>
               <Button 
                    color='primary' 
                    className='w-full h-full text-lg'
                    endContent = {<IoChevronForward/>}
                    onClick={() => router.push('/contact')}
               >Contact Us
               </Button>
         </div>

    </section>
  )
}
