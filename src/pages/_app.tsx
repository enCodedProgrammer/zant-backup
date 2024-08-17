import Layout from "@/components/layout"
import { client } from "@/lib/urql"
import "@/styles/globals.css"
import { AppProps } from "next/app"
import { Router } from "next/router"
import nProgress from "nprogress"
import "nprogress/nprogress.css"
import { Provider } from "urql"

Router.events.on("routeChangeStart", () => nProgress.start())
Router.events.on("routeChangeComplete", () => nProgress.done())
Router.events.on("routeChangeError", () => nProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
	if ((Component as any).plainLayout == true) {
		return (
			<Provider value={client}>
				<Component {...pageProps} />
			</Provider>
		)
	} else {
		return (
			<Provider value={client}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		)
	}
}

export default MyApp
