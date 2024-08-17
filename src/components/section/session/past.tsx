import ArrowLineDownIcon from "@/asset/icons/system/ArrowLineDown.svg"
import FilterButton from "@/components/button/filter"
import GenericIconButton from "@/components/button/genericIcon"
import SearchInput from "@/components/input/search"
import Pagination from "@/components/pagination"
import { useRouter } from "next/router"
import { useState } from "react"

export default function PastSessionSection() {
	const router = useRouter()
	const [users, setUsers] = useState<
		{
			url: string
			fullName: string
			content: boolean
			homework: boolean
			date: string
			length: number
		}[]
	>([
		{
			url: "/assets/img/avatar/avatar_user1.png",
			fullName: "#136780",
			content: true,
			homework: true,
			date: "Jan 01, 2023",
			length: 43,
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			fullName: "#200180",
			content: true,
			homework: false,
			date: "Jan 01, 2023",
			length: 41,
		},
		{
			url: "/assets/img/avatar/avatar_user3.png",
			fullName: "#355999",
			content: false,
			homework: false,
			date: "Jan 01, 2023",
			length: 39,
		},
		{
			url: "/assets/img/avatar/avatar_user4.png",
			fullName: "#422457",
			content: false,
			homework: false,
			date: "Jan 01, 2023",
			length: 59,
		},
		{
			url: "/assets/img/avatar/avatar_user5.png",
			fullName: "#50008",
			content: false,
			homework: true,
			date: "Jan 01, 2023",
			length: 52,
		},
		{
			url: "/assets/img/avatar/avatar_user6.png",
			fullName: "#512290",
			content: false,
			homework: true,
			date: "Jan 01, 2023",
			length: 50,
		},
		{
			url: "/assets/img/avatar/avatar_user1.png",
			fullName: "#65809",
			content: true,
			homework: true,
			date: "Jan 01, 2023",
			length: 50,
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			fullName: "#776541",
			content: false,
			homework: false,
			date: "Jan 01, 2023",
			length: 42,
		},
	])
	return (
		<div className="flex flex-col bg-gray-25">
			<div className="flex flex-col py-10 px-8 gap-7">
				<div className="flex gap-14 py-6">
					<SearchInput fullHeight className="flex-1" placeholder="Search transactions" />
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
						<th className="text-heading-2xs text-primary">Full Name</th>
						<th className="text-heading-2xs">Content</th>
						<th className="text-heading-2xs">Homework</th>
						<th className="text-heading-2xs">Date</th>
						<th className="text-heading-2xs">Length</th>
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
										"/payment/transaction/" + user.fullName.substring(1),
									)
								}}
							>
								<span className="flex gap-10 text-heading-2xs items-center">
									<img
										className="w-[5.25rem] h-[5.25rem]"
										src={user.url}
										alt="avatar"
									/>
									{user.fullName}
								</span>
							</td>
							<td className="text-heading-2xs font-regular">
								{user.content ? (
									<div className="flex gap-6">
										<input
											type="radio"
											className="radio radio-secondary"
											checked
										/>
										<span className="text-heading-2xs font-regular">
											Assigned
										</span>
									</div>
								) : (
									<div className="flex gap-6">
										<input
											type="radio"
											className="radio radio-secondary"
										/>
										<span className="text-heading-2xs font-regular">
											Not Assigned
										</span>
									</div>
								)}
							</td>
							<td className="text-heading-2xs font-regular">
								{user.homework ? (
									<div className="flex gap-6">
										<input
											type="radio"
											className="radio radio-secondary"
											checked
										/>
										<span className="text-heading-2xs font-regular">
											Assigned
										</span>
									</div>
								) : (
									<div className="flex gap-6">
										<input
											type="radio"
											className="radio radio-secondary"
										/>
										<span className="text-heading-2xs font-regular">
											Not Assigned
										</span>
									</div>
								)}
							</td>
							<td className="text-heading-2xs font-regular">{user.date}</td>
							<td className="text-heading-2xs font-regular">{user.length}</td>
							<td className="text-heading-2xs font-regular">
								<GenericIconButton
									className="!p-3 rounded-full btn-secondary"
									size="1.75rem"
									iconClassName="filter-tertiary"
									icon={ArrowLineDownIcon}
                                    onClick={() => router.push('/payment/transaction/' + user.fullName.substring(1))}
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
