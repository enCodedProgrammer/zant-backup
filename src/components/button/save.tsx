import Hearth from "@/asset/icons/system/Hearth.svg"
import HearthLinear from "@/asset/icons/system/HearthLinear.svg"
import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useState } from "react"
import tw from "tailwind-styled-components"

const Button = tw.a`
    btn
    btn-circle
    ${(props) => (props.className?.includes("tz-ghost") ? "btn-ghost" : "btn-neutral")}
    ${(props) => (
        props.className?.includes("tz-md") ? "childImage:!w-6 !p-2.5" :
        props.className?.includes("tz-lg") ? "childImage:!w-8 !p-4" :
        "childImage:!w-6 !p-2.5"
    )}
	${(props) => (
		props.className?.includes("tz-primary") ? "childImage:filter-primary" :
		props.className?.includes("tz-secondary") ? "childImage:filter-secondary" :
		props.className?.includes("tz-tertiary") ? "childImage:filter-tertiary" :
		"childImage:filter-primary"
	)}
`

export default function SaveButton({active, ...props}: {active?: boolean} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
	const [saved, setSaved] = useState(false);

	useEffect(() => {
		setSaved(active ? active: false);
	}, []);
	return (
		<Button {...props} onClick={() => setSaved(!saved)}>
			<Image src={saved ? Hearth : HearthLinear} alt="hearth" />
		</Button>
	)
}
