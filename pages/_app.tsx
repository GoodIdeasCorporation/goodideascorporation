import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import {useRouter} from 'next/router';
import type { ReactElement, ReactNode } from 'react'
import "@/styles/globals.css";
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export  const barlow = Barlow({weight:['100','400' ,'600','800'], subsets : ['latin']})


export default function App({ Component , pageProps}:AppPropsWithLayout) {
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
