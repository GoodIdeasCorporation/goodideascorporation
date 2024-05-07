import React from 'react'
import { Image } from '@nextui-org/react'
export default function Footer() {
  const description = "Good Ideas Corporation Co., Ltd. was established on 9 February 2017. Good Ideas is a mid to large sized company that was run 3 business of home and accommodation, contractor, developer, and home services. We have an experience in various typed of house and restaurant such a pool villa house, bar, restaurant, all kind of extension and renovation work."
  const contact = ""
  const currentYear = new Date().getFullYear();

  return (
     <section className='w-full  relative bg-white'>
      <div className='m-auto max-w-[1500px] '>
        <div className='min-h-[400px]  w-full min-[700px]:flex-row  flex flex-col  items-center '>
          <div className='min-[700px]:w-2/4 h-full flex gap-2 p-5 '>
            <div className='flex flex-col items-center'>
              <Image
              width={200}
              src = "./logo.png"
              />
              <p className='min-[700px]:w-[70%] pt-3 text-lg'>{description}</p>
            </div>
          </div>
          <div className='min-[700px]:w-2/4 h-full  min-[700px]:flex block min-[700px]:justify-end min-[700px]:p-0  p-5 '>
            <div className='min-[700px]:w-2/5 min-[700px]:pt-10'>
              <h1 className='text-2xl font-bold'>Our Services</h1>
              <p className='pt-5 text-lg'>Home Builder</p>
              <p className='text-lg'>Renovation</p>
              <p className='text-lg'>Home Services</p>
            </div>
            <div className='min-[700px]:w-2/5 pt-10'>
              <h1 className='text-2xl font-bold'>Contact Us</h1>
              <p className='pt-5 text-lg'>87/11 Moo 7, Tambol Chalong, Muang Phuket, Phuket, Thailand 83130</p>
              <p className='text-lg'>084-539-1541</p>
              <p className='text-lg'>contact@goodsideas.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[100px] w-full border-t-1 border-gray-300'>
          <div className='max-w-[1500px] m-auto flex min-[700px]:justify-start justify-center w-full items-center h-full'>
            Copyright © {currentYear} Good Ideas Corporation Co., Ltd.
          </div>
        </div>
     </section>
  )
}
