import EmojiFillIcon from "@/asset/icons/system/EmojiFill.svg"
import Button from "@/components/button"
import FilterButton from "@/components/button/filter"
import LinkButton from "@/components/button/link"
import StatCard from "@/components/card/stat"
import SearchInput from "@/components/input/search"
import Pill from "@/components/pill"
import StatDownloadModal from "@/components/section/statistics/download.modal"
import MonthSelect from "@/components/select/month"
import { colors } from "@/types/color"
import {
	BarElement,
	CategoryScale,
	ChartData,
	Chart as ChartJS,
	BarController, LineController,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from "chart.js"
import Image from "next/image"
import { Chart } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, BarController, LineController, Title, Tooltip)

const activityData: ChartData<"bar", number[], string> = {
	labels: ["Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25"],
	datasets: [
		{
			label: "Sessions",
			data: [100, 250, 420, 620, 430, 180, 150],
			backgroundColor: colors["primary"],
		},
	],
}

const rateData: ChartData<"line", number[], string> = {
	labels: ["Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25"],
	datasets: [
		{
			fill: "-1",
			label: "Returning",
			data: [66, 68, 58, 69, 62, 72, 70],
			borderColor: colors["primary"],
			backgroundColor: "#EF0CAF33",
		},
		{
			fill: "+1",
			label: "First Time",
			data: [23, 25, 22, 34, 40, 37, 35],
			borderColor: colors["secondary"],
			backgroundColor: "#45EBFA33",
		},
	],
}

export default function StatisticsPage() {
	return (
		<div className="flex flex-col mt-24">
			<div className="fixed top-5 right-40 left-56 z-50 pl-8">
				<div className="flex gap-10 items-center">
					<h1 className="text-heading-2xl">Statistics</h1>
					{/* <div className="flex gap-3 items-center">
                        <span className="text-sm font-roboto">Filter by:</span>
                        <Pill className="tz-sm tz-primary">Date range</Pill>
                        <Pill className="tz-sm tz-primary">Provider type</Pill>
                        <Pill className="tz-sm tz-primary">Sessions</Pill>
                    </div> */}
				</div>
			</div>

			<div className="px-8 pt-2 pb-8 flex flex-col gap-8">
				<div className="grid grid-cols-5 gap-7">
					<StatCard title="Total members" value="5000" additionalText="+ 5%" />
					<StatCard title="Total Funded Spent" value="600" additionalText="" />
					<StatCard title="Total Active Members" value="590" additionalText="+ 1%" />
					<StatCard title="Total Session" value="5532" additionalText="+ 5%" />
					<StatCard title="Total Session Hours" value="6000" additionalText="+ 5%" />
				</div>
				{/* <div className="flex gap-7">
					<SearchInput fullHeight className="flex-1" placeholder="Provider, client, partner" white />
					<FilterButton className="tz-md">Export</FilterButton>
				</div> */}
			</div>

			<div className="flex flex-col bg-gray-25">
				<div className="px-8 py-10 grid grid-cols-2 gap-7">
					<div className="flex flex-col gap-5">
						<div className="flex justify-between gap-4">
							<span className="text-heading-sm">Activity by number of sessions</span>
							<MonthSelect />
						</div>
						<div className="flex flex-col bg-white rounded-2xl p-6 gap-6">
							<div className="flex gap-4 justify-between items-center">
								<span className="text-sm font-regular text-gray-600">
									This Week
								</span>
								<div className="flex gap-5">
									<div className="flex gap-1 items-center">
										<div className="badge badge-xs badge-primary" />
										<span className="text-sm font-regular">Members</span>
									</div>
								</div>
							</div>
							<Chart
								type="bar"
								data={activityData}
								options={{
									plugins: {
										legend: {
											display: false,
										},
									},
									responsive: true,
									scales: {
										x: {
											stacked: true,
											grid: {
												display: false,
											},
										},
										y: {
											stacked: true,
										},
									},
								}}
							></Chart>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<div className="flex justify-between gap-4">
							<span className="text-heading-sm">Returning Client Rate</span>
							<MonthSelect />
						</div>
						<div className="flex flex-col bg-white rounded-2xl p-6 gap-6">
							<div className="flex gap-4 justify-between items-center">
								<span className="text-sm font-regular text-gray-600">
									This Week
								</span>
								<div className="flex gap-5">
									<div className="flex gap-1 items-center">
										<div className="badge badge-xs badge-secondary" />
										<span className="text-sm font-regular">First Time</span>
									</div>
									<div className="flex gap-1 items-center">
										<div className="badge badge-xs badge-primary" />
										<span className="text-sm font-regular">Returing</span>
									</div>
								</div>
							</div>
							<Chart
								type="line"
								data={rateData}
								options={{
									plugins: {
										legend: {
											display: false,
										},
									},
									interaction: {
										intersect: false,
									},
									responsive: true,
									scales: {
										x: {
											stacked: true,
											grid: {
												display: false,
											},
										},
										y: {
											stacked: true,
										},
									},
								}}
							></Chart>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<FilterButton
					className="tz-md"
					onClick={() => {
						const modal = document.getElementById(
							"stat_download_modal",
						) as HTMLDialogElement
						modal.showModal()
					}}
				>
					Export
				</FilterButton>
			</div>

			<StatDownloadModal />
		</div>
	)
}
