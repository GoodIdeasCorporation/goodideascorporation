import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import ContactPage from '@/features/contact'
import Head from 'next/head'
import { siteConfig } from '@/config/site'

const DocsPage = () => {
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
	    <DefaultLayout>
		    {page}
	    </DefaultLayout>
	)
}