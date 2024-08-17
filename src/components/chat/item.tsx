import classNames from "classnames"
import Avatar from "../avatar"
import GenericIconButton from "../button/genericIcon"
import CaretRightIcon from "@/asset/icons/system/CaretRight.svg"

export default function ChatItem({
	url,
	name,
	message,
	dateString,
	type,
	available,
	active = false,
	onClick,
}: {
	url: string
	name: string
	message: string
	dateString: string
	type: "Client" | "Prospect"
	available: boolean
	active?: boolean
	onClick?: Function
}) {
	return (
		<div
			className={classNames(
				"py-4 px-9 flex gap-4 border-b-gray-50 border-b-2 cursor-pointer",
				{ "bg-gray-25": active },
			)}
			onClick={() => onClick && onClick()}
		>
			<div className="w-[3.75rem]">
				<Avatar url={url} />
			</div>
			<div className="flex flex-1 flex-col gap-1">
				<div className="flex gap-4 items-center">
					<span className="text-lg font-medium">{name}</span>
					{type == "Client" && (
						<span className="px-2 py-1 bg-[#2CC5D333] rounded-lg text-teal text-2xs">
							Client
						</span>
					)}
					{type == "Prospect" && (
						<span className="px-2 py-1 bg-[#EF0CAF33] rounded-lg text-primary text-2xs">
							Prospect
						</span>
					)}
				</div>
				<p className="text-sm">{message}</p>
			</div>
			<div className="flex self-start">
				<span className="text-gray-700 text-2xs">{dateString}</span>
				<GenericIconButton icon={CaretRightIcon} size={"0.5rem"} />
			</div>
		</div>
	)
}
