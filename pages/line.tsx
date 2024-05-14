import React from 'react'
import Head from 'next/head'
import { siteConfig } from '@/config/site'

export default function LineContact() {
  return (
    <>
		<Head>
			<title>Line - {siteConfig.name}</title>
		</Head>
    <div className='w-full flex items-center justify-center'>
          <img src = "./line.jpg" />

    </div>
	</>

  )
}
