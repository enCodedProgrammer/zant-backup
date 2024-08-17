import CaretRightIcon from "@/asset/icons/system/CaretRight.svg"
import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import GenericIconButton from "../button/genericIcon"

export default function NotificationItem({
	active,
	text,
	description,
	...props
}: { active: boolean; text: React.ReactNode; description: string } & DetailedHTMLProps<
	HTMLAttributes<HTMLElement>,
	HTMLElement
>) {
	return (
		<div className={classNames("flex py-6 gap-3 border-b-2 border-b-gray-50", props.className)}>
			<div
				className={classNames("badge badge-sm mt-1", {
					"badge-primary": active,
					"badge-outline": !active,
				})}
			/>
			<div className={classNames("flex-1 flex flex-col gap-3", {"text-gray-400": !active})}>
				<div className="text-sm">{text}</div>
				<div className="text-2xs">{description}</div>
			</div>
			<GenericIconButton className="mt-1 self-start" size="1rem" icon={CaretRightIcon} />
		</div>
	)
}
