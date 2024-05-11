import React from 'react'
import Header from '@/components/header'
import ContactBox from './components/contactBox'
export default function ContactPage() {
  return (
     <div className='w-full'>
          <Header
            title='Contact Us'
            image = "./phuket.jpg"
          />
          <div className='max-w-[1200px] min-[700px:]:h-[650px] flex items-center m-auto'>
               <ContactBox/>
          </div>
    </div>
  )
}
