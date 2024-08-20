import Layout from "@/components/layout"
import "@/styles/globals.css"
import { AppProps } from "next/app"
import { Router } from "next/router"
import nProgress from "nprogress"
import "nprogress/nprogress.css"

Router.events.on("routeChangeStart", () => nProgress.start())
Router.events.on("routeChangeComplete", () => nProgress.done())
Router.events.on("routeChangeError", () => nProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
	if ((Component as any).plainLayout == true) {
		return (
				<Component {...pageProps} />
		
		)
	} else {
		return (
				<Layout>
					<Component {...pageProps} />
				</Layout>
		)
	}
}

export default MyApp
