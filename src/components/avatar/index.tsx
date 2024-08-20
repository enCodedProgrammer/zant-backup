import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props {
	url: any
}

export default function Avatar({
	url,
	...props
}: Props & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>): JSX.Element {
	return (
		<div className={classNames("avatar mx-auto w-full h-full justify-center", props.className)}>
			<div className="rounded-full w-full !flex items-center justify-center">
				{/*<img className="max-w-[12.5rem] max-h-[12.5rem] w-full" src={url} alt="avatar" />*/}
				<img className="w-full" src={url} alt="avatar" />
			</div>
		</div>
	)
}
