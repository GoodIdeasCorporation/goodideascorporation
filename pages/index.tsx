import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { HomePage } from "@/features/home";
import type { NextPageWithLayout } from './_app'
 
const IndexPage : NextPageWithLayout = () => {
	return (
		<HomePage/>
	);
}

export default IndexPage;


IndexPage.getLayout = function getLayout(page : React.ReactElement){
	return(
	    <DefaultLayout page = "index">
		{page}
	    </DefaultLayout>
	)
}

