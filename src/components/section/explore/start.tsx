export default function StartSection() {
	return (
		<div className="grid grid-cols-3 gap-7">
			<div className="px-7 py-5 flex gap-5 items-center bg-gray-50 rounded-xl">
				<div className="flex flex-col flex-1">
					<span className="font-roboto text-md">This week{"'"}s clients</span>
					<span className="text-display-sm leading-[5.75rem]">12</span>
				</div>
				<div className="px-3 py-1 text-xs rounded-md border-[1px] border-black">+5%</div>
			</div>
			<div className="px-7 py-5 flex gap-5 items-center bg-gray-50 rounded-xl">
				<div className="flex flex-col flex-1">
					<span className="font-roboto text-md">Projected hours spent this week</span>
					<span className="text-display-sm leading-[5.75rem]">35</span>
				</div>
				<div className="px-3 py-1 text-xs rounded-md border-[1px] border-black">+5%</div>
			</div>
			<div className="px-7 py-5 flex gap-5 items-center bg-black rounded-xl">
				<div className="flex flex-col flex-1">
					<span className="font-roboto text-md text-white">Projected income this week</span>
					<span className="text-display-sm text-white leading-[5.75rem]">$2k</span>
				</div>
				<div className="px-3 py-1 text-xs rounded-md text-white border-white border-[1px]">
					+5%
				</div>
			</div>
		</div>
	)
}
