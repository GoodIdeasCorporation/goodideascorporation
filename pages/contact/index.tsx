import DefaultLayout from '@/layouts/default'
import ContactPage from '@/features/contact'
import Head from 'next/head'
import { siteConfig } from '@/config/site'
import { NextPageWithLayout } from '../_app'

const DocsPage: NextPageWithLayout = () => {
  return (
	<>
		<Head>
			<title>Contact US - {siteConfig.name}</title>
		</Head>
		<ContactPage/>
	</>
  )
}

export default DocsPage

DocsPage.getLayout = function getLayout(page : React.ReactElement){
	return(
	    <DefaultLayout footerDisable>
		    {page}
	    </DefaultLayout>
	)
}