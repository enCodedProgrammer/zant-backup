import Layout from "@/components/layout"
import "@/styles/globals.css"
import { AppProps } from "next/app"
import { Router } from "next/router"
import nProgress from "nprogress"
import "nprogress/nprogress.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


Router.events.on("routeChangeStart", () => nProgress.start())
Router.events.on("routeChangeComplete", () => nProgress.done())
Router.events.on("routeChangeError", () => nProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
	if ((Component as any).plainLayout == true) {
		return (
			<>
				<Component {...pageProps} />
				<ToastContainer/>
			</>
		
		)
	} else {
		return (
				<Layout>
					<>
					<Component {...pageProps} />
					<ToastContainer />
					</>
				</Layout>
		)
	}
}

export default MyApp
