import classNames from "classnames";
import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import tw from "tailwind-styled-components"

const Button = tw.button`
    btn
    !w-auto
    !h-auto
    !p-0
    !border-none
`

export default function GenericIconButton({
	size = "1.75rem",
	icon,
	iconClassName,
	...props
}: { size?: string; iconClassName?: string, icon: any } & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	return (
		<Button {...props}>
			<Image style={{ width: `${size}`, height: `${size}`, }} src={icon} alt="caret left" className={classNames(iconClassName)} />
			{props.children}
		</Button>
	)
}
