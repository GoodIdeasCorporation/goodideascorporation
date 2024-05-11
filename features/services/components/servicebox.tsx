import React from 'react'
import { Divider } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { IoChevronForward } from 'react-icons/io5'
import { useRouter } from 'next/router'
import { structPath } from '../assets/config'



type structType = typeof structPath[0]

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
          <div className='pl-5'>
               <ul className='list-disc text-lg'>
                    <li >Home Builder</li>
                    <li >Renovation</li>
                    <li>Home Services</li>
               </ul>
       
          </div>
          <div className='w-[150px] h-[65px] m-auto pt-4 '>
               <Button 
                    color='primary' 
                    className='w-full h-full text-lg rounded-none shadow-md'
                    endContent = {<IoChevronForward/>}
                    onClick={() => router.push('/contact')}
               >Contact Us
               </Button>
         </div>
         <div className='pt-10'>
          <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold'>Our Projects</h1>
                    <Divider className='w-[60px] h-[8px] bg-blue-500 ml-1'/>
               </div>
               {structPath.map((folder:structType , index:number) => (
                    <div className='pt-[50px] flex flex-col gap-5' key = {index}>
                         <div className=' flex flex-col gap-3'>
                              <h1 className='text-2xl font-semibold'>{folder.title}</h1>
                              <Divider className='w-[60px] h-[5px] bg-blue-500 ml-1'/>
                         </div>
                          <div className='w-full   flex  justify-center'>
                              <div className='w-full h-full flex min-[900px]:flex-row flex-col gap-3 items-center'>
                                   <div className='min-[900px]:w-[470px] w-full h-[350px]'>
                                        <img src = {`./services/${folder.path}/${folder.fileName}_1${folder.filetype}`} className='w-full h-full object-cover'/>
                                   </div>       
                                   <div className='min-[900px]:w-fit w-full  grid grid-cols-2 gap-3'>
                                        {Array.from({length : folder.length}).map((_ , index:number) => (     
                                        <div key = {index} className='min-[900px]:w-[200px] w-full min-[900px]:h-[170px] h-[250px]'>
                                             <img src = {`./services/${folder.path}/${folder.fileName}_${(index+ 1) + 1}${folder.filetype}`} className='w-full h-full object-cover'/>
                                        </div>
                                   ))}
                                   </div>
                              </div>
                         </div>
                    </div>          
               ))}
          </div>

    </section>
  )
}
