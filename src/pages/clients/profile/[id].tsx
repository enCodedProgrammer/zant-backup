import MemberCircleIcon from "@/asset/icons/display/MemberCircle.svg";
import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import GenericIconButton from "@/components/button/genericIcon";
import SearchInput from "@/components/input/search";
import DeactivateModal from "@/components/section/members/deactivate.modal";
import DeactivateStatusModal from "@/components/section/members/deactivateStatus.modal";
import AdjustPriceModal from "@/components/section/provider/adjust.modal";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ClientProfilePage() {
	const router = useRouter()
	const [users, setUsers] = useState<
		{
			url: string
			firstName: string
			lastName: string
			date: string
			funds: string
			total: string
		}[]
	>([
		{
			url: "/assets/img/avatar/avatar_user1.png",
			firstName: "Adam",
			lastName: "Patel",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			firstName: "Annie",
			lastName: "Vetrovs",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
		{
			url: "/assets/img/avatar/avatar_user3.png",
			firstName: "Bonnie",
			lastName: "Carder",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
		{
			url: "/assets/img/avatar/avatar_user4.png",
			firstName: "Buck",
			lastName: "Siphron",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
		{
			url: "/assets/img/avatar/avatar_user5.png",
			firstName: "Charlie",
			lastName: "Dorwart",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
		{
			url: "/assets/img/avatar/avatar_user6.png",
			firstName: "Chelsea",
			lastName: "Calzoni",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
		{
			url: "/assets/img/avatar/avatar_user1.png",
			firstName: "Darrel",
			lastName: "Gouse",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			firstName: "Dotty",
			lastName: "Herwitz",
			date: "Jan 01, 2023",
			funds: "$50",
			total: "$50",
		},
	])
	const [tab, setTab] = useState("Profile")

	const onSelectTab = (selected: string) => {
		setTab(selected)
	}

	return (
		<div className="mt-24 flex flex-col">
			<div className="fixed top-5 right-40 left-56 z-50 pl-8">
				<SearchInput white placeholder="Search" />
			</div>
			<div className="relative flex items-center justify-center gap-24 pt-3 pb-10">
				<GenericIconButton
					className="absolute top-2 left-8 text-primary"
					icon={CaretLeftIcon}
					size="0.8rem"
					onClick={() => {
						router.back()
					}}
				>
					All Clients
				</GenericIconButton>
				<Button
					className="tz-sm tz-primary absolute top-2 right-12 dropdown-end !w-36"
					onClick={() => {
						const modal = document.getElementById(
							"deactivate_modal",
						) as HTMLDialogElement
						modal.showModal()
					}}
				>
					Deactivate account
				</Button>

				<div className="flex flex-col items-center gap-6">
					<div className="relative">
						<Avatar url="/assets/img/profile/user3.png" />
					</div>
					<div className="flex flex-col items-center">
						<p className="font-medium text-heading-2xl">Jenna Johnson</p>
						<p className="text-lead-md !font-regular">Life Coach</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col px-8 py-10 gap-12">
				<div className="flex flex-col gap-5">
					<h3 className="text-heading-sm">Client Type</h3>
					<div className="flex flex-col">
						<div className="flex gap-6 p-6 items-center">
							<Avatar className="!w-14 !h-14" url="/assets/img/sad-girls-club.png" />
							<div className="flex flex-col flex-1 justify-center">
								<span className="text-sm font-roboto text-gray-700">
									Partner Account
								</span>
								<span className="text-lg font-medium">Sad Girls Club</span>
							</div>
							<button
								className="btn btn-primary !px-4 !py-2 text-white !text-sm !h-9 !font-roboto rounded-xl"
								onClick={() => {
									const modal = document.getElementById(
										"deactivate_status_modal",
									) as HTMLDialogElement
									modal.showModal()
								}}>
								Deactive Student Status
							</button>
							<span className="px-2 py-1 bg-[#2CC5D333] rounded-lg text-teal text-md font-medium">
								Approved
							</span>
						</div>

						<div className="flex flex-col gap-10 p-6">
							<div className="flex flex-col gap-1">
								<span className="text-md font-roboto font-medium">
									Partner Credits
								</span>
								<span className="text-sm font-roboto font-medium text-gray-700">
									Students are eligible for discounted rates
								</span>
							</div>

							<div className="flex flex-col gap-1">
								<span className="text-display-xs text-primary">$100</span>
								<span className="text-lg font-medium">Unclaimed</span>
							</div>
						</div>
					</div>
				</div>

				<h3 className="text-heading-sm">Redeemed Sessions</h3>
			</div>

			<table className="table-auto table-zebra w-full">
				<thead>
					<tr>
						<th>
							<input className="checkbox rounded-none" type="checkbox" />
						</th>
						<th className="text-heading-2xs text-primary">First Name</th>
						<th className="text-heading-2xs">Last Name</th>
						<th className="text-heading-2xs">Transaction Date</th>
						<th className="text-heading-2xs">Funds Used</th>
						<th className="text-heading-2xs">Total</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, k) => (
						<tr key={k}>
							<td>
								<input className="checkbox rounded-none" type="checkbox" />
							</td>
							<td
								className="cursor-pointer"
								onClick={() => {
									router.push(
										"/clients/profile/" + user.firstName.substring(1),
									)
								}}
							>
								<span className="flex gap-10 text-heading-2xs items-center">
									<img
										className="w-[5.25rem] h-[5.25rem]"
										src={user.url}
										alt="avatar"
									/>
									{user.firstName}
								</span>
							</td>
							<td className="text-heading-2xs font-regular">{user.lastName}</td>
							<td className="text-heading-2xs font-regular">{user.date}</td>
							<td className="text-heading-2xs font-regular">{user.funds}</td>
							<td className="text-heading-2xs font-regular">{user.total}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="p-8 grid grid-cols-3 gap-10 bg-gray-25">
				<div className="col-span-2 flex flex-col gap-8">
					<h4 className="text-heading-sm">Member Details</h4>

					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-7 p-5 border-2 border-gray-50 rounded-2xl bg-white">
							<Image src={MemberCircleIcon} alt="" />

							<div className="flex flex-col gap-1">
								<span className="text-xl text-gray-400">Last Session</span>
								<span className="text-heading-lg">Jan 12, 2022</span>
							</div>
						</div>

						<div className="flex items-center gap-7 p-5 border-2 border-gray-50 rounded-2xl bg-white">
							<Image src={MemberCircleIcon} alt="" />

							<div className="flex flex-col gap-1">
								<span className="text-xl text-gray-400">Completed Sessions</span>
								<span className="text-heading-lg">20</span>
							</div>
						</div>

						<div className="flex items-center gap-7 p-5 border-2 border-gray-50 rounded-2xl bg-white">
							<Image src={MemberCircleIcon} alt="" />

							<div className="flex flex-col gap-1">
								<span className="text-xl text-gray-400">Consultations</span>
								<span className="text-heading-lg">02</span>
							</div>
						</div>
					</div>
				</div>

				<div className="col-span-1 flex flex-col gap-8">
					<h4 className="text-heading-sm">Member Details</h4>

					<div className="flex flex-col items-center gap-9 p-9 pb-12 border-2 border-gray-50 rounded-2xl bg-white">
						<div className="flex flex-col gap-5">
							<span className="flex items-center justify-center text-display-sm"><span className="text-heading-lg">$</span>50</span>
							<span className="text-xl text-center">Easily fund additional support.</span>
						</div>

						<Button
							className="tz-md tz-primary !px-12"
							onClick={() => {
								const modal = document.getElementById(
									"adjust_price_modal",
								) as HTMLDialogElement
								modal.showModal()
							}}
						>Add Funds</Button>
					</div>
				</div>
			</div>

			<DeactivateModal onClickEvent={() => {
				const modal = document.getElementById(
					"deactivate_modal",
				) as HTMLDialogElement
				modal.close('modal')
			}} />

			<DeactivateStatusModal onClickEvent={() => {
				const modal = document.getElementById(
					"deactivate_status_modal",
				) as HTMLDialogElement
				modal.close('modal')
			}} />

			<AdjustPriceModal price={5} onSave={(value) => { }} />
		</div >
	)
}
