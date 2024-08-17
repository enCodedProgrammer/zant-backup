import tw from "tailwind-styled-components"
import Slider from "@/asset/icons/system/Slider.svg"
import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

const Button = tw.button`
    btn
    btn-neutral
    rounded-none
    text-white
    flex
	${(props) => (
		props.className?.includes("tz-xs") ? "!text-xs !px-2 !py-1 gap-2" :
		props.className?.includes("tz-md") ? "!text-md !px-5 !py-4 gap-5" :
		"!text-md !px-5 !py-4 gap-5"
	)}
	${(props) => (
		props.className?.includes("tz-xs") ? "childImage:!w-3" :
		props.className?.includes("tz-md") ? "childImage:!w-6" :
		"childImage:!w-6"
	)}
`

export default function FilterButton(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
	return (
		<Button {...props}>
			<Image
				className="brightness-0 invert"
				src={Slider}
				alt="slider"
			/>
			{props.children}
		</Button>
	)
}
