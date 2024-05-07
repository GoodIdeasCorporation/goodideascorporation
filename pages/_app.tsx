import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import {useRouter} from 'next/router';
import "@/styles/globals.css";

export  const barlow = Barlow({weight:['100','400' ,'600','800'], subsets : ['latin']})


export default function App({ Component, pageProps }: any) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page : any) => page)
  

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider>
			{getLayout(
				<main className={barlow.className}>
					<Component {...pageProps} />
				</main>
				
			)}
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
