import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import AboutPage from '@/features/about'
import Head from 'next/head'
import { SiteConfig, siteConfig } from '@/config/site'
import { NextPageWithLayout } from '../_app'

const DocsPage:NextPageWithLayout = () => {
  return (
	<>	
		<Head>
			<title>About - {siteConfig.name}</title>
		</Head>
		<AboutPage/>
	</>

  )
}

export default DocsPage;

DocsPage.getLayout = function getLayout(page : React.ReactElement){
	return(
	    <DefaultLayout footerDisable = {true}>
		    {page}
	    </DefaultLayout>
	)
}