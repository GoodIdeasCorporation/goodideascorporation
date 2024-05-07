import React from 'react'
import Header from '../../components/header'
import AboutBox from './components/aboutBox'
export default function AboutPage() {
  return (
    <section className = "w-full">
      <Header
        title='About Us'
        image = "./structure.jpg"
      />
      <section className='max-w-[1000px] m-auto'>
        <AboutBox/>
      </section>
    </section>
  )
}
