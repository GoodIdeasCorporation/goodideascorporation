import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import AboutPage from '@/features/about'
import Head from 'next/head'
import { SiteConfig, siteConfig } from '@/config/site'
export default function DocsPage() {
  return (
	<>	
		<Head>
			<title>About - {siteConfig.name}</title>
		</Head>
		<AboutPage/>
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