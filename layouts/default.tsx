import { Navbar } from "@/components/navbar/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Footer } from "@/components";
import { barlow } from "@/pages/_app";

export default function DefaultLayout({children , page , footerDisable = false} : {children: React.ReactElement , page? : string , footerDisable?: boolean}) {
	return (
		<main className={barlow.className}>
		<div className="relative flex flex-col h-screen relative">
				<Head />
				<Navbar/>
				<main className={`w-full mx-auto flex-grow `}>
					{children}
				</main>
				<footer className="w-full flex items-center justify-center">
					{!footerDisable &&
						<Footer page = {page}/>
					}
				</footer>
			</div>
		</main>
	
	);
}
