import React from 'react'
import Header from '@/components/header'
import ContactBox from './components/contactBox'
import { Image } from '@nextui-org/react'
export default function ContactPage() {
  return (
     <div className='w-full'>
          <Header
            title='Contact Us'
            image = "./contact.jpg"
          />
          <div className='max-w-[1200px] min-[700px]:h-[650px] flex items-center m-auto'>
               <ContactBox/>
          </div>
          <div className='w-full h-[350px] bg-gray-100'>
            <img
              className='w-full h-full max-w-full max-h-full object-cover'
              src = "./contact_bottom.jpg"
            />
          </div>
    </div>
  )
}
