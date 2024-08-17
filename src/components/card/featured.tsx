import classNames from "classnames"
import { useRouter } from "next/router"

export default function FeaturedCard({
	title,
	image,
	className,
	href,
}: {
	title: string
	image: string
	className?: string
	href: string
}) {
	const router = useRouter()

	return (
		<div
			className={classNames("rounded-xl relative overflow-hidden cursor-pointer", className)}
			onClick={() => router.push(href)}
		>
			<img className="w-full" src={image} alt="title"></img>
			<div className="bg-white absolute bottom-0 text-heading-md px-4 py-2 w-full">
				{title}
			</div>
		</div>
	)
}
