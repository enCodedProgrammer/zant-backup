
export default function StatCard({
	title,
	value,
	additionalText
}: {
	title: string
	value: string
	additionalText: string
}) {
	return (
		<div className="flex flex-col gap-2 p-5 bg-white border-2 border-gray-50 rounded-2xl">
			<span className="font-roboto text-md">{title}</span>
			<div className="flex gap-2 justify-between">
				<span className="text-heading-lg">{value}</span>
				{/* <span className="font-roboto text-xs text-teal self-end">{additionalText}</span> */}
			</div>
		</div>
	)
}
