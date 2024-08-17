import Image from "next/image"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export default function ContentCard({
	type,
	image,
	category,
	title,
	description,
	...props
}: {
	type: "event" | "series" | "article"
	image: string
	category?: string
	title: string
	description: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	if (type == "event") {
		return (
			<div {...props} className="flex cursor-pointer flex-col gap-4 rounded-xl bg-gray-50 p-4">
				<div className="flex items-center overflow-hidden rounded-xl border-b-[1rem] border-b-secondary">
					<img className="w-full self-stretch object-cover" alt={title} src={image} />
				</div>
				<div className="flex flex-col gap-1 px-6">
					<div className="text-gray-400 text-lead-sm">{category}</div>
					<div className="text-xl font-medium">{title}</div>
					<div className="text-lg font-light font-roboto">{description}</div>
				</div>
			</div>
		)
	} else if (type == "series") {
        return (
            <div {...props} className="flex cursor-pointer flex-col gap-2 rounded-xl bg-gray-50 p-4" >
				<div className="flex items-center overflow-hidden rounded-xl border-b-[1rem] border-b-yellow" style={{aspectRatio: "1/1"}}>
					<img className="w-full self-stretch object-cover" alt={title} src={image} />
				</div>
				<div className="flex flex-col">
					<div className="text-xl font-medium">{title}</div>
					<div className="text-lg font-light font-roboto">{description}</div>
				</div>
			</div>
        )
    } else {
        return (
            <div {...props} className="flex cursor-pointer flex-col gap-2 rounded-xl bg-gray-50 p-4">
				<div className="flex items-center overflow-hidden rounded-xl border-b-[1rem] border-b-yellow" style={{aspectRatio: "1/1"}}>
					<img className="w-full self-stretch object-cover" alt={title} src={image} />
				</div>
				<div className="flex flex-1 flex-col justify-between gap-2">
					<div className="text-xl font-medium">{title}</div>
					<div className="text-xs text-gray-700 font-roboto">{description}</div>
				</div>
			</div>
        )
    }
}
