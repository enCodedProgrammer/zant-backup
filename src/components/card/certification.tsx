import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export default function CertificationCard({
	url,
	category,
	title,
	...props
}: { url?: string; category?: string; title: string } & DetailedHTMLProps<
	HTMLAttributes<HTMLElement>,
	HTMLElement
>) {
	return (
		<div
			className={classNames(
				"w-full bg-primary flex flex-col p-8 rounded-2xl items-center justify-center text-white gap-4 overflow-hidden relative cursor-pointer",
				props.className,
			)}
			style={{ aspectRatio: "1/1" }}
		>
			{url != undefined && (
				<img className="absolute h-full w-full self-stretch object-cover brightness-50 center" alt={title} src={url} />
			)}
			{category != undefined && (
				<p className="z-10 w-full text-left text-lead-sm">{category}</p>
			)}
			<p className="z-10 w-full flex-1 text-left font-medium leading-10 text-[2.25rem]">
				{title}
			</p>
		</div>
	)
}
