import Image from "next/image"
import SearchIcon from "@/asset/icons/system/Search.svg"
import FilterButton from "../button/filter"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import classNames from "classnames"

export default function SearchFilterInput({
	onModal,
	...props
}: { onModal: Function } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<div className={classNames("flex gap-7", props.className)}>
			<div className="relative flex-1">
				<span className="absolute items-center pl-4 font-bold h-center text-heading-lg">
					<Image className="h-5 w-5" src={SearchIcon} alt="search" />
				</span>
				<input
					type="text"
					placeholder="Content, resources, tip"
					className="h-full w-full border-none bg-gray-100 py-2 pl-12 input"
				/>
			</div>
			<FilterButton className="tz-md" onClick={() => onModal()}>Filter</FilterButton>
		</div>
	)
}
