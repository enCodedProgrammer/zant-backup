import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Button from ".";

export default function ConnectButton({
	active,
	...props
}: { active?: boolean } & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	if (active) {
		return (
			<Button className="tz-primary rounded-xl !px-4 !py-2 !text-sm !border-[1px]" {...props}>
				Connected
			</Button>
		)
	} else {
		return (
			<Button className="tz-primary tz-outline rounded-xl !px-4 !py-2 !text-sm !border-[1px]" {...props}>
				Connect
			</Button>
		)
	}
}
