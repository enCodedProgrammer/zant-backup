import { DetailedHTMLProps, HTMLAttributes } from "react";
import GenericIconButton from "./genericIcon";
import DotsIcon from "@/asset/icons/system/Dots.svg"
import classNames from "classnames";

export default function BlockProfileButton(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<div className={classNames("dropdown dropdown-bottom dropdown-start", props.className)}>
			<GenericIconButton
				className="text-primary"
				icon={DotsIcon}
				tabIndex={0}
				role="button"
				size="1.5rem"
			/>
			<ul
				tabIndex={0}
				className="w-52 p-2 shadow dropdown-content z-[1] menu bg-base-100 rounded-box"
			>
				<li>
					<a className="text-md font-roboto">Report User</a>
				</li>
				<li>
					<a className="text-md font-roboto text-primary">Block User</a>
				</li>
			</ul>
		</div>
	)
}
