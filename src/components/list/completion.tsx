import CheckboxEllipseIcon from "@/asset/icons/system/Checkbox Ellipse.svg"
import CheckboxOutlineIcon from "@/asset/icons/system/Checkbox Outline.svg"
import Image from "next/image"
import StatusButton from "../button/status"

export default function CompletionItem({
	status,
	defaultText,
	completedText,
	pendingText,
	disabledText,
	title,
	alt,
	description,
	onClickEvent,
}: {
	status: "default" | "disabled" | "pending" | "completed"
	defaultText: string
	completedText: string
	pendingText: string
	disabledText: string
	title: string
	alt?: string
	description: string
	onClickEvent: Function
}) {
	return (
		<div className="flex gap-30 items-center">
			<div className="flex-1 flex flex-col">
				<div className="flex gap-7 items-center">
					{status == "completed" || status == "pending" ? (
						<Image className="w-12" src={CheckboxEllipseIcon} alt="icon" />
					) : (
						<Image className="w-12" src={CheckboxOutlineIcon} alt="icon" />
					)}
					<span className="text-heading-2xs font-medium">{title}</span>
				</div>
				{status != "completed" ? (
					<span className="text-heading-2xs font-regular text-gray-700 px-[4.75rem]">
						{description}
					</span>
				) : (
					""
				)}
			</div>
			<div className="flex flex-col gap-4 items-center">
				<StatusButton status={status} onClick={() => onClickEvent()}>
					{status == "completed"
						? completedText
						: status == "default"
						? defaultText
						: status == "disabled"
						? disabledText
						: status == "pending"
						? pendingText
						: ""}
				</StatusButton>
				{alt && status != "completed" ? (
					<span className="text-lg text-gray-700 !w-72 text-center">{alt}</span>
				) : (
					""
				)}
			</div>
		</div>
	)
}
