import Pagination from "@/components/pagination"
import classNames from "classnames"
import { useRouter } from "next/router"
import { useState } from "react"

type Status = "Active" | "Cooling" | "Cold"

export default function ProviderTableSection() {
	const router = useRouter()

	const [users, setUsers] = useState<
		{
			url: string
			firstName: string
			lastName: string
			sessions: string
			consultations: string
			lastSession: string
			status: Status
		}[]
	>([
		{
			url: "/assets/img/avatar/avatar_user1.png",
			firstName: "Adam",
			lastName: "Patel",
			sessions: "04",
			consultations: "01",
			lastSession: "yesterday",
			status: "Active",
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			firstName: "Annie",
			lastName: "Vetrovs",
			sessions: "12",
			consultations: "02",
			lastSession: "2 months ago",
			status: "Cooling",
		},
		{
			url: "/assets/img/avatar/avatar_user3.png",
			firstName: "Bonnie",
			lastName: "Carder",
			sessions: "28",
			consultations: "04",
			lastSession: "2 weeks ago",
			status: "Active",
		},
		{
			url: "/assets/img/avatar/avatar_user4.png",
			firstName: "Buck",
			lastName: "Siphron",
			sessions: "01",
			consultations: "01",
			lastSession: "23 months ago",
			status: "Cold",
		},
		{
			url: "/assets/img/avatar/avatar_user5.png",
			firstName: "Charlie",
			lastName: "Dorwart",
			sessions: "14",
			consultations: "00",
			lastSession: "1 year ago",
			status: "Cold",
		},
		{
			url: "/assets/img/avatar/avatar_user6.png",
			firstName: "Chelsea",
			lastName: "Calzoni",
			sessions: "48",
			consultations: "01",
			lastSession: "1.5 months ago",
			status: "Cooling",
		},
		{
			url: "/assets/img/avatar/avatar_user1.png",
			firstName: "Darrel",
			lastName: "Gouse",
			sessions: "08",
			consultations: "03",
			lastSession: "1 week ago",
			status: "Active",
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			firstName: "Dotty",
			lastName: "Herwitz",
			sessions: "07",
			consultations: "09",
			lastSession: "3 years ago",
			status: "Cold",
		},
	])
	return (
		<div>
			<table className="table-auto table-zebra w-full">
				<thead>
					<tr>
						<th>
							<input className="checkbox rounded-none" type="checkbox" />
						</th>
						<th className="text-heading-2xs text-primary">First Name</th>
						<th className="text-heading-2xs">Last Name</th>
						<th className="text-heading-2xs">Sessions</th>
						<th className="text-heading-2xs">Consultations</th>
						<th className="text-heading-2xs">Last Session</th>
						<th className="text-heading-2xs">Status</th>
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
									router.push("/provider/profile/fwe")
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
							<td className="text-heading-2xs font-regular">{user.sessions}</td>
							<td className="text-heading-2xs font-regular">{user.consultations}</td>
							<td className="text-heading-2xs font-regular">{user.lastSession}</td>
							<td className="text-heading-2xs font-regular">
								<div className="flex items-center gap-2">
									<div
										className={classNames("badge badge-xs", {
											"badge-secondary": user.status == "Active",
											"badge-warning": user.status == "Cooling",
											"badge-primary": user.status == "Cold",
										})}
									/>
									<span>{user.status}</span>
								</div>
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
