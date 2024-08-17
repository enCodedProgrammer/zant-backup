import classNames from "classnames"
import Avatar from "../avatar"
import Button from "../button"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { useRouter } from "next/router"

export default function AvatarCard({
	url,
	name,
	title,
	available = false,
	profile = false,
	...props
}: {
	url: string
	name: string
	title: string
	available?: boolean
	profile?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	const router = useRouter();
	return (
		<div
			className={classNames("p-6 bg-white flex flex-col gap-4 rounded-2xl cursor-pointer", props.className)}
			onClick={() => {router.push('/provider/profile/giana')}}
		>
			<Avatar url={url} />
			<div className="flex flex-col gap-4">
				<div className="flex flex-col">
					<div className="flex items-center justify-center font-medium text-heading-2xs">
						<div
							className={classNames("badge badge-success badge-xs", {
								hidden: !available,
							})}
						/>
						&nbsp;
						{name}
					</div>
					<div className="text-center text-xl font-roboto">{title}</div>
				</div>
				{profile && (
					<div className="flex">
						<Button className="flex-1 tz-md tz-primary">View Profile</Button>
					</div>
				)}
			</div>
		</div>
	)
}
