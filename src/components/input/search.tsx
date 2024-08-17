import SearchIcon from "@/asset/icons/system/Search.svg"
import classNames from "classnames"
import Image from "next/image"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export default function SearchInput({
	fullHeight = false,
	placeholder = "Content, resources, tip",
	white = false,
	...props
}: {
	fullHeight?: boolean
	placeholder?: string
	white?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<div className={classNames("relative", props.className)}>
			<span className="absolute items-center pl-4 font-bold h-center text-heading-lg">
				<Image className="h-5 w-5" src={SearchIcon} alt="search" />
			</span>
			<input
				type="text"
				placeholder={placeholder}
				className={classNames("input bg-gray-100 w-full py-2 border-none pl-12", {
					'h-full': fullHeight,
					'bg-white border-2 !border-solid border-gray-50': white
				})}
			/>
		</div>
	)
}
