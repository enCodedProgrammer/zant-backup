import SearchIcon from "@/asset/icons/system/Search.svg"
import Avatar from "@/components/avatar"
import ConnectButton from "@/components/button/connected"
import FilterButton from "@/components/button/filter"
import PaymentCard from "@/components/card/payment"
import Logo from "@/components/logo"
import Image from "next/image"
import { useRouter } from "next/router"

const transactions = [
	{
		id: "#136780",
		avatar: "/assets/img/avatar/avatar_user1.png",
		firstName: "Jakob",
		lastName: "Patel",
		date: "Jan 01, 2023",
		amount: "- $50.00",
	},
	{
		id: "#200180",
		avatar: "/assets/img/avatar/avatar_user2.png",
		firstName: "Rayna Culhane",
		lastName: "Vetrovs",
		date: "Jan 01, 2023",
		amount: "- $50.00",
	},
	{
		id: "#355999",
		avatar: "/assets/img/avatar/avatar_user3.png",
		firstName: "Carla Vaccaro",
		lastName: "Carder",
		date: "Jan 01, 2023",
		amount: "- $50.00",
	},
	{
		id: "#422457",
		avatar: "/assets/img/avatar/avatar_user4.png",
		firstName: "Carter",
		lastName: "Siphron",
		date: "Jan 01, 2023",
		amount: "- $50.00",
	},
	{
		id: "#455124",
		avatar: "/assets/img/avatar/avatar_user5.png",
		firstName: "Giana",
		lastName: "Madsen",
		date: "Jan 01, 2023",
		amount: "- $50.00",
	},
	{
		id: "#556213",
		avatar: "/assets/img/avatar/avatar_user6.png",
		firstName: "Sean",
		lastName: "Snyder",
		date: "Jan 01, 2023",
		amount: "- $50.00",
	},
]

export default function ProfileAboutTab() {
	const router = useRouter()

	return (
		<div className="flex flex-col bg-gray-25">
			<div className="flex px-8 py-10 gap-7">
				<div className="flex-1 flex flex-col gap-8">
					<h4 className="text-heading-sm">Wallet</h4>
					<div className="w-full rounded-2xl flex items-center justify-center overflow-hidden relative h-[20.5rem]">
						<img
							className="absolute center w-full self-stretch object-cover"
							alt="back"
							src="/assets/img/card_back.png"
						/>
						<div
							className="flex flex-col justify-center items-center z-10 text-white cursor-pointer"
							onClick={() => {
								router.push("/profile/invoice")
							}}
						>
							<div className="flex items-center gap-2">
								<div className="text-display-lg font-bold">in-app wallet</div>
							</div>
							<span className="text-xl opacity-80">coming soon!</span>
						</div>
						<Logo className="brightness-0 invert absolute right-5 bottom-5" />
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<h4 className="text-heading-sm">Payment Methods</h4>
					<div className="flex flex-col gap-5">
						<PaymentCard
							url="/assets/img/payment/visa.png"
							number="**** **** **** 7723"
						/>
						<PaymentCard
							url="/assets/img/payment/debit.png"
							number="**** **** **** 7723"
						/>
						<PaymentCard
							url="/assets/img/payment/debit.png"
							number="**** **** **** 7723"
						/>
						<PaymentCard
							url="/assets/img/payment/debit.png"
							number="**** **** **** 7723"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<h4 className="px-8 text-heading-sm font-medium">Transaction History</h4>

				<div className="py-6 px-8 flex gap-7">
					<div className="flex-1 relative">
						<span className="absolute h-center items-center pl-4 text-heading-lg font-bold">
							<Image className="w-5 h-5" src={SearchIcon} alt="search" />
						</span>
						<input
							type="text"
							placeholder="Search clients"
							className="input bg-gray-100 w-full py-2 h-full border-none pl-12"
						/>
					</div>
					<FilterButton className="tz-md !w-72" onClick={() => {}}>
						Export
					</FilterButton>
				</div>

				<table className="table-auto table-zebra">
					<thead>
						<tr>
							<th className="font-medium">Provider Name</th>
							<th className="font-medium">Date</th>
							<th className="font-medium">Amount</th>
							<th className="font-medium">Payment Details</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((t, i) => (
							<tr key={i}>
								<td>
									<div className="flex gap-10 items-center justify-center">
										<Avatar className="!w-20 !h-20" url={t.avatar} />
										<span className="flex-1 font-medium">{t.firstName} {t.lastName}</span>
									</div>
								</td>
								<td>{t.date}</td>
								<td className="text-primary">{t.amount}</td>
								<td>
									<ConnectButton onClick={() => router.push("/profile/invoice")}>View Details</ConnectButton>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
