import React from 'react'
import { Image } from '@nextui-org/react'
import { contactInformation } from '@/config/information'

type FooterProps = {
  page? : string
}

const Footer : React.FC <FooterProps>  = ({page}) => {
  const description = "Good Ideas Corporation Co., Ltd. was established on 9 February 2017. Good Ideas is a mid to large sized company that was run 3 business of home and accommodation, contractor, developer, and home services. We have an experience in various typed of house and restaurant such a pool villa house, bar, restaurant, all kind of extension and renovation work."
  const currentYear = new Date().getFullYear();
  
  return (
     <section className='w-full  relative bg-white p-2'>
      <div className='m-auto max-w-[1500px] '>
        <div className='min-h-[400px] w-full min-[700px]:flex-row  flex flex-col  items-center '>
        {
        page == "index" ? 
          <div className='min-[700px]:w-2/4 flex flex-col items-start gap-5 min-[700px]:pt-0 min-[700px]:pl-0 pl-3 pt-5'>
            <h1 className='text-2xl font-bold'>Company Core Values</h1>
            <Image
            width={500}
            src = {page == "index"  ? "./cores.jpg" : "./logo.png"}
            />
          </div>
        : 
        
        page != "service"  ?
          <div className='min-[700px]:w-2/4 h-full flex gap-2 p-5 '>
            <div className='flex flex-col items-center'>
              <Image
              width={200}
              src = {page == "index"  ? "./cores.jpg" : "./logo.png"}
              />
              <p className='min-[700px]:w-[70%] pt-3 text-lg'>{description}</p>
            </div>
            </div>
          :
          <div className='min-[700px]:w-2/4 w-full flex justify-center'>
            <Image
              width= {500}
              src = "./3buisness.jpg"
              /> 
          </div>
  
          }
          
          <div className='min-[700px]:w-2/4 h-full  min-[700px]:flex block min-[700px]:justify-end min-[700px]:p-0  p-5 '>
           {page != "service" &&
            <div className='min-[700px]:w-2/5 min-[700px]:pt-10'>
              <h1 className='text-2xl font-bold'>Our Services</h1>
              <p className='pt-5 text-lg'>Home Builder</p>
              <p className='text-lg'>Renovation</p>
              <p className='text-lg'>Home Services</p>
            </div>
            } 
            <div className='min-[700px]:w-2/5 pt-10'>
              <h1 className='text-2xl font-bold'>Contact Us</h1>
              <p className='pt-5 text-lg'>{contactInformation.address}</p>
              <p className='text-lg'>{contactInformation.phone}</p>
              <p className='text-lg'>{contactInformation.directEmail}</p>
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

export default Footer;
