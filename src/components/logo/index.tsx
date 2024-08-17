import LogoIcon from "@/asset/icons/logo/logo.svg"
import classNames from "classnames"
import Image from "next/image"
import { useRouter } from "next/router"
import { DetailedHTMLProps, HTMLAttributes } from "react"

const Logo = (props: DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
	const router = useRouter()
	return (
		<Image
            className={classNames(props.className, "cursor-pointer")}
			alt="Vector"
			src={LogoIcon}
			onClick={() => router.push('/')}
		/>
	)
}

export default Logo