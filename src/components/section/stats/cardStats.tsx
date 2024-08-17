import GenericIconButton from "@/components/button/genericIcon"
import DownloadIcon from "@/asset/icons/system/Download.svg"

export default function CardStatSection() {
	return (
		<div className="grid grid-cols-3 gap-7">
			<div className="px-7 py-5 flex gap-5 items-center bg-gray-50 rounded-xl relative">
				<GenericIconButton
					size="1.5rem"
					className="absolute top-6 right-6 filter-gray-400"
					icon={DownloadIcon}
				/>
				<div className="flex flex-col flex-1">
					<span className="font-roboto text-md">Total clients</span>
					<span className="text-display-sm leading-[5.75rem]">23</span>
				</div>
				<div className="px-3 py-1 text-xs rounded-md border-[1px] border-black">+ 5%</div>
			</div>
			<div className="px-7 py-5 flex gap-5 items-center bg-gray-50 rounded-xl relative">
				<GenericIconButton
					size="1.5rem"
					className="absolute top-6 right-6 filter-gray-400"
					icon={DownloadIcon}
				/>
				<div className="flex flex-col flex-1">
					<span className="font-roboto text-md">Hours spent with sessions</span>
					<span className="text-display-sm leading-[5.75rem]">100</span>
				</div>
				<div className="px-3 py-1 text-xs rounded-md border-[1px] border-black">+ 5%</div>
			</div>
			<div className="px-7 py-5 flex gap-5 items-center bg-black rounded-xl relative">
				<GenericIconButton
					size="1.5rem"
					className="absolute top-6 right-6 filter-gray-400"
					icon={DownloadIcon}
				/>
				<div className="flex flex-col flex-1">
					<span className="font-roboto text-md text-white">Income</span>
					<span className="text-display-sm text-white leading-[5.75rem]">$5k</span>
				</div>
				<div className="px-3 py-1 text-xs rounded-md text-white border-white border-[1px]">
					+ 5%
				</div>
			</div>
		</div>
	)
}
