import EmojiFillIcon from "@/asset/icons/system/EmojiFill.svg"
import FlagIcon from "@/asset/icons/system/Flag.svg"
import ImageFillIcon from "@/asset/icons/system/ImageFill.svg"
import ProviderIcon from "@/asset/icons/system/Provider.svg"
import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import StatCard from "@/components/card/stat"
import SearchInput from "@/components/input/search"
import InviteStudentModal from "@/components/section/invite/modal"
import MonthSelect from "@/components/select/month"
import { colors } from "@/types/color"
import {
	BarElement,
	CategoryScale,
	ChartData,
	Chart as ChartJS,
	LineElement,
	LinearScale,
	PointElement,
	BarController, LineController,
	Title,
	Tooltip,
} from "chart.js"
import Image from "next/image"
import { Chart } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, BarController, LineController, Title, Tooltip)

const activityData: ChartData<"bar", number[], string> = {
	labels: ["Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25"],
	datasets: [],
}

const rateData: ChartData<"line", number[], string> = {
	labels: ["Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25"],
	datasets: [],
}

export default function HomeIndexPage() {
	return (
		<div className="flex flex-col mt-24">
			<div className="fixed top-5 right-40 left-56 z-50 pl-8">
				<h1 className="text-heading-2xl">Harvard Dashboard</h1>
			</div>

			<div className="px-8 pt-2 pb-8 flex flex-col gap-8">
				<div className="grid grid-cols-6 gap-7">
					<StatCard title="Total members" value="0" additionalText="" />
					<StatCard title="Funded Seats" value="600" additionalText="" />
					<StatCard title="Claimed Funded Seats" value="0" additionalText="" />
					<StatCard title="Funded Sessions" value="0" additionalText="" />
					<StatCard title="Total Sessions" value="0" additionalText="" />
					<StatCard title="Total Session Hours" value="0" additionalText="" />
				</div>
				<SearchInput placeholder="Student" white />
			</div>

			<div className="w-full rounded-2xl flex items-center justify-center overflow-hidden relative h-[25.5rem]">
				<img
					className="absolute center w-full self-stretch object-cover"
					alt="back"
					src="/assets/img/card_back.png"
				/>
				<div className="flex flex-col justify-center items-center z-10 text-white gap-5">
					<div className="flex flex-col gap-3 items-center">
						<span className="text-lead-lg">no members yet</span>
						<span className="mt-3 text-heading-2xl text-center">
							Invite members now
						</span>
					</div>
					<span className="mt-7 text-xl text-center">
						You will have access to statistics, clients, and member information once you
						<br />
						add students to your account.
					</span>
					<Button
						className="tz-md tz-tertiary"
						onClick={() => {
							const modal = document.getElementById(
								"invite_student_modal",
							) as HTMLDialogElement
							modal.showModal()
						}}
					>
						Invite students now
					</Button>
				</div>
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
										<span className="text-sm font-regular">Consultations</span>
									</div>
									<div className="flex gap-1 items-center">
										<div className="badge badge-xs badge-secondary" />
										<span className="text-sm font-regular">
											Claimed Sessions
										</span>
									</div>
									<div className="flex gap-1 items-center">
										<div className="badge badge-xs bg-yellow border-yellow" />
										<span className="text-sm font-regular">Continued</span>
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

				<div className="flex gap-4 px-8 py-12 items-center justify-between">
					<h4 className="text-heading-sm">Recent Activity</h4>
					<LinkButton className="tz-md tz-primary">View All</LinkButton>
				</div>

				<div className="flex flex-col">
					<div className="flex gap-8 p-8 items-center">
						<div className="p-3 rounded-full bg-secondary">
							<Image
								className="w-10 h-10 filter-tertiary"
								src={EmojiFillIcon}
								alt="flag"
							/>
						</div>
						<div className="flex-1 flex flex-col justify-center">
							<span className="text-xl font-medium">You have no recent activity</span>
						</div>
					</div>
					<hr></hr>
				</div>
			</div>

			<InviteStudentModal />
		</div>
	)
}
