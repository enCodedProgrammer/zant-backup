import CheckmarkIcon from "@/asset/icons/display/Checkmark.svg"
import InboxIcon from "@/asset/icons/display/Inbox.svg"
import MessagingIcon from "@/asset/icons/display/Messaging.svg"
import UserIcon from "@/asset/icons/display/User.svg"
import ArrowLineDownIcon from "@/asset/icons/system/ArrowLineDown.svg"
import FilterButton from "@/components/button/filter"
import GenericIconButton from "@/components/button/genericIcon"
import SearchInput from "@/components/input/search"
import Pagination from "@/components/pagination"
import MonthSelect from "@/components/select/month"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

export default function ContentTab() {
	const router = useRouter()
	const [users, setUsers] = useState<
		{
			url: string
			transaction: string
			firstName: string
			lastName: string
			date: string
			amount: number
		}[]
	>([
		{
			url: "/assets/img/avatar/avatar_user1.png",
			transaction: "#136780",
			firstName: "Adam",
			lastName: "Patel",
			date: "Jan 01, 2023",
			amount: 200,
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			transaction: "#200180",
			firstName: "Annie",
			lastName: "Vetrovs",
			date: "Jan 01, 2023",
			amount: 50,
		},
		{
			url: "/assets/img/avatar/avatar_user3.png",
			transaction: "#355999",
			firstName: "Bonnie",
			lastName: "Carder",
			date: "Jan 01, 2023",
			amount: 50,
		},
		{
			url: "/assets/img/avatar/avatar_user4.png",
			transaction: "#422457",
			firstName: "Buck",
			lastName: "Siphron",
			date: "Jan 01, 2023",
			amount: 120,
		},
		{
			url: "/assets/img/avatar/avatar_user5.png",
			transaction: "#50008",
			firstName: "Charlie",
			lastName: "Dorwart",
			date: "Jan 01, 2023",
			amount: 120,
		},
		{
			url: "/assets/img/avatar/avatar_user6.png",
			transaction: "#512290",
			firstName: "Chelsea",
			lastName: "Calzoni",
			date: "Jan 01, 2023",
			amount: 50,
		},
		{
			url: "/assets/img/avatar/avatar_user1.png",
			transaction: "#65809",
			firstName: "Darrel",
			lastName: "Gouse",
			date: "Jan 01, 2023",
			amount: 50,
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			transaction: "#776541",
			firstName: "Dotty",
			lastName: "Herwitz",
			date: "Jan 01, 2023",
			amount: 120,
		},
	])

	return (
		<div className="flex flex-col">
			<div className="flex flex-col py-10 px-8 gap-7">
				<div className="flex gap-7 items-center">
					<span className="text-heading-2xl">Payments</span>
					<MonthSelect />
				</div>
				<div className="grid grid-cols-4 gap-14">
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={UserIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">This Month</span>
							<span className="text-heading-lg">$50</span>
						</div>
					</div>
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={InboxIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">Monthly Transactions</span>
							<span className="text-heading-lg">01</span>
						</div>
					</div>
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={CheckmarkIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">Paid This Month</span>
							<span className="text-heading-lg">$100</span>
						</div>
					</div>
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={MessagingIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">Unpaid This Month</span>
							<span className="text-heading-lg">00</span>
						</div>
					</div>
				</div>
				<div className="flex gap-14 py-6">
					<SearchInput fullHeight className="flex-1" placeholder="Search clients" />
					<div className="flex gap-3">
						<FilterButton>Filter</FilterButton>
						<FilterButton>Export</FilterButton>
					</div>
				</div>
			</div>
			<table className="table-auto table-zebra w-full">
				<thead>
					<tr>
						<th>
							<input className="checkbox rounded-none" type="checkbox" />
						</th>
						<th className="text-heading-2xs text-primary">Transaction ID</th>
						<th className="text-heading-2xs">First Name</th>
						<th className="text-heading-2xs">Last Name</th>
						<th className="text-heading-2xs">Date</th>
						<th className="text-heading-2xs">Amount</th>
						<th className="text-heading-2xs">Invoice</th>
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
										"/payment/transaction/" + user.transaction.substring(1),
									)
								}}
							>
								<span className="flex gap-10 text-heading-2xs items-center">
									<img
										className="w-[5.25rem] h-[5.25rem]"
										src={user.url}
										alt="avatar"
									/>
									{user.transaction}
								</span>
							</td>
							<td className="text-heading-2xs font-regular">{user.firstName}</td>
							<td className="text-heading-2xs font-regular">{user.lastName}</td>
							<td className="text-heading-2xs font-regular">{user.date}</td>
							<td className="text-heading-2xs font-regular">{user.amount}</td>
							<td className="text-heading-2xs font-regular">
								<GenericIconButton
									className="!p-3 rounded-full btn-secondary"
									size="1.75rem"
									iconClassName="filter-tertiary"
									icon={ArrowLineDownIcon}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="py-20 text-center">
				<Pagination />
			</div>
		</div>
	)
}
