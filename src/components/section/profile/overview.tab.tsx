import CallIcon from "@/asset/icons/system/Call.svg"
import DownloadIcon from "@/asset/icons/system/Download.svg"
import EnvelopeIcon from "@/asset/icons/system/Envelope.svg"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import Avatar from "@/components/avatar"
import Button from "@/components/button"
import GenericIconButton from "@/components/button/genericIcon"
import LinkButton from "@/components/button/link"
import StatCard from "@/components/card/stat"
import { colors } from "@/types/color"
import {
	BarController,
	BarElement, CategoryScale, ChartData, Chart as ChartJS,
	LineController,
	LineElement, LinearScale,
	PointElement, Title,
	Tooltip
} from "chart.js"
import Image from "next/image"
import InviteStudentModal from "../invite/modal"
import AddDocumentModal from "./modal/addDocument.modal"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarController, LineController, BarElement, Title, Tooltip)

const activityData: ChartData<"bar", number[], string> = {
	labels: ["Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25"],
	datasets: [
		{
			label: "Clients",
			data: [100, 250, 420, 620, 430, 180, 150],
			backgroundColor: colors["primary"],
		},
	],
}

	const ProfileOverviewTab = ({ userData }) => {
	return (
		<div className="bg-gray-25">
			<div className="grid grid-cols-3 px-8 py-10 gap-7">
				<div className=" col-span-2 flex flex-col gap-12">
					<div className="flex flex-col gap-5">
						<span className="text-heading-sm">Contract Overview</span>
						<div className="grid grid-cols-3 gap-7">
							<StatCard title="Invited Seats" value="590" additionalText="+ 5%" />
							<StatCard title="Price per seat" value="$100" additionalText="+ 2%" />
							<StatCard title="Total Spent" value="$59,000" additionalText="+ 5%" />
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<span className="text-heading-sm">Statistics Overview</span>
						<div className="grid grid-cols-3 gap-7">
							<StatCard title="Active Members" value="2,400" additionalText="+ 5%" />
							<StatCard title="Inactive Memebers" value="197" additionalText="+ 2%" />
							<StatCard title="Total session" value="10.1k" additionalText="+ 5%" />
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<span className="text-heading-sm">Main Contact</span>
					<div className="flex flex-col bg-white rounded-2xl border-2 border-gray-50 p-9 gap-9">
						<div className="flex gap-5 items-center justify-between">
							<Avatar className="!w-28 !h-28" url="/assets/img/ad.png" />
							<div className="flex-1 flex flex-col justify-center gap-1">
								<span className="text-heading-2xs">Ann Dowart</span>
								<span className="text-xl">Human Resources</span>
							</div>
						</div>
						<div className="flex flex-col gap-5">
							<span className="text-heading-2xs font-regular">Contact Information</span>
							<span className="text-xl flex gap-3">
								<Image className="w-8 h-8 filter-gray-400" src={EnvelopeIcon} alt="envelope" />
								ann.dowart@harvard.edu
							</span>
							<span className="text-xl flex gap-3">
								<Image className="w-8 h-8 filter-gray-400" src={CallIcon} alt="call" />
								829-394-9507
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-2xl flex items-center justify-center overflow-hidden relative h-[25.5rem] m-20">
				<img
					className="absolute center w-full self-stretch object-cover"
					alt="back"
					src="/assets/img/card_back.png"
				/>
				<div className="flex flex-col justify-center items-center z-10 text-white gap-5">
					<div className="flex flex-col gap-3 items-center">
						<span className="mt-3 text-heading-2xl text-center">
							Invite members now
						</span>
					</div>
					<span className="mt-7 text-xl text-center">
						You will have access to statistics, clients, and member information once you add
						<br />
						members to your account.
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
						Invite members now
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-8 w-full px-8 py-10">
				<div className="flex gap-4 justify-between items-center">
					<span className="text-heading-sm">Documents</span>
					<LinkButton
						className="tz-md tz-primary"
						onClick={() => {
							const modal = document.getElementById(
								"add_document_modal",
							) as HTMLDialogElement
							modal.showModal()
						}}>
						Add another document
						<Image className="w-5 h-5 filter-primary" src={PlusCircleIcon} alt="plus" />
					</LinkButton>
				</div>
				<div className="flex flex-col p-7 bg-white border-2 border-gray-50 rounded-2xl">
					<div className="py-5 flex gap-4 items-center">
						<img
							className="w-[3.75rem] h-[3.75rem] rounded-lg"
							src="/assets/img/pdf.png"
							alt="pdf"
						/>
						<div className="w-full flex flex-col gap-1 justify-center">
							<div className="flex gap-4 justify-between items-center">
								<span className="text-lg font-medium">Coping Skills Logs</span>
								<GenericIconButton size="1.5rem" icon={DownloadIcon} />
							</div>
							<span className="text-sm opacity-50">PDF</span>
						</div>
					</div>
					<div className="py-5 flex gap-4 items-center">
						<img
							className="w-[3.75rem] h-[3.75rem] rounded-lg"
							src="/assets/img/pdf.png"
							alt="pdf"
						/>
						<div className="w-full flex flex-col gap-1 justify-center">
							<div className="flex gap-4 justify-between items-center">
								<span className="text-lg font-medium">Coping Skills Logs</span>
								<GenericIconButton size="1.5rem" icon={DownloadIcon} />
							</div>
							<span className="text-sm opacity-50">PDF</span>
						</div>
					</div>
				</div>
			</div>

			<InviteStudentModal />
		</div>
	)
}


export default ProfileOverviewTab;
