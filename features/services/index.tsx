import React from 'react'
import Header from '@/components/header'
import ServiceBox from './components/servicebox'
export default function ServicePage() {
  return (
     <div className='w-full h-auto relative'>
          <Header
            title='Services'
            image = "./service.jpg"
          />
          <div className='max-w-[1000px] m-auto '>
            <ServiceBox/>
          </div>
      
    </div>
  )
}
