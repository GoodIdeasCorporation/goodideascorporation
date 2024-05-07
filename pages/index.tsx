import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
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
	    <DefaultLayout>
		 {page}
	    </DefaultLayout>
	)
}

