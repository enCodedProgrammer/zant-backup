import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import tw from "tailwind-styled-components"
import TwitterIcon from "@/asset/icons/system/Twitter.svg"

const Button = tw.a`
    btn
    btn-neutral
    btn-circle
    ${(props) =>
		props.className?.includes("tz-sm")
			? "childImage:!w-6 !p-3.5"
			: props.className?.includes("tz-lg")
			? "childImage:!w-10 !p-5"
			: "childImage:!w-6 !p-3.5"}
    childImage:brightness-0 childImage:invert
`

export default function SocialButton({
	icon = TwitterIcon,
	...props
}: { icon?: any } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
	return (
		<Button {...props}>
			<Image className="brightness-0 invert" src={icon} alt="social" />
		</Button>
	)
}
