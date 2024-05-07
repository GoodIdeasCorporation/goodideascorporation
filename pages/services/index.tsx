import DefaultLayout from '@/layouts/default'
import ServicePage from '@/features/services'
import Head from 'next/head'
import { siteConfig } from '@/config/site'

export default function DocsPage() {
  return (
	<>
		<Head>
			<title>Services - {siteConfig.name}</title>
		</Head>
		<ServicePage/>
	</>

  )
}


DocsPage.getLayout = function getLayout(page : React.ReactNode){
	return(
	    <DefaultLayout>
		    {page}
	    </DefaultLayout>
	)
}