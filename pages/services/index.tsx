import DefaultLayout from '@/layouts/default'
import ServicePage from '@/features/services'
import Head from 'next/head'
import { siteConfig } from '@/config/site'
import { NextPageWithLayout } from '../_app'

const DocsPage: NextPageWithLayout= () => {
  return (
	<>
		<Head>
			<title>Services - {siteConfig.name}</title>
		</Head>
		<ServicePage/>
	</>

  )
}

export default DocsPage


DocsPage.getLayout = function getLayout(page : React.ReactElement){
	return(
	    <DefaultLayout>
		    {page}
	    </DefaultLayout>
	)
}