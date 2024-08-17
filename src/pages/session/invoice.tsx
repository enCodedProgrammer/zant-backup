import Avatar from "@/components/avatar"
import Button from "@/components/button"
import MyCalendar from "@/components/calendar"
import Pill from "@/components/pill"
import ManageAvailabilitySection from "@/components/section/session/availability"
import PastSessionSection from "@/components/section/session/past"
import UpcomingSessionSection from "@/components/section/session/upcoming"
import TabPanel from "@/components/tab"
import { useRouter } from "next/router"
import { useState } from "react"
import "react-calendar/dist/Calendar.css"

export default function SessionInvoicePage() {
	const router = useRouter()
	const [tab, setTab] = useState("Session")
	const onSelectTab = (selected: string) => {
		setTab(selected)
	}
	return (
		<div className="flex flex-col mt-24">
			<div className="p-8 flex flex-col gap-7">
				<TabPanel
					tabs={["Upcoming Sessions", "Past Sessions", "Manage Availability"]}
					tab={tab}
					onSelected={(t: string) => onSelectTab(t)}
					className="px-8 border-b-2 border-b-gray-50 shadow-sm z-10"
				/>
			</div>

			<div hidden={tab != "Upcoming Sessions"}>
				<UpcomingSessionSection />
			</div>
			<div hidden={tab != "Past Sessions"}>
				<PastSessionSection />
			</div>
			<div hidden={tab != "Manage Availability"}>
				<ManageAvailabilitySection />
			</div>

			<div className="p-8 bg-gray-25 flex flex-col gap-8">
				<div className="flex gap-7">
					<div className="flex-1 border-2 border-gray-50 rounded-2xl">
						<div className="flex rounded-tl-2xl rounded-tr-2xl w-full relative overflow-hidden">
							<div className="flex-1 p-20 flex flex-col justify-between border-r-[3px] border-r-gray-200 gap-10 z-10 bg-gray-50">
								<div className="flex flex-col gap-5">
									<div className="flex flex-col gap-2">
										<span className="text-lead-xl">Next Session</span>
										<span className="text-display-md">Jun 18</span>
										<div className="flex items-center gap-6">
											<div className="badge bg-black badge-md"></div>
											<span className="text-[1.75rem] leading-[2.25rem]">
												9:00 - 10:00 am
											</span>
										</div>
									</div>
									<div className="flex flex-wrap gap-4">
										<Button className="tz-sm tz-quaternary rounded-lg">
											Family Issues
										</Button>
										<Button className="tz-sm tz-quaternary rounded-lg">
											Anxiety
										</Button>
									</div>
								</div>
								<div className="flex flex-col gap-7 items-start">
									<div className="flex gap-6">
										<Button onClick={() => {router.push('/session/now')}} className="tz-md tz-tertiary !w-40">
											Book another
										</Button>
									</div>
								</div>
							</div>

							<div className="flex flex-col py-10 px-6 gap-10 w-[26rem] items-center z-10 bg-gray-50">
								<div className="flex flex-col gap-8">
									<Avatar className="w-56" url="/assets/img/jenna.png" />
									<span className="text-heading-xs text-center">
										Janna Johnson
									</span>
								</div>

								<Button
									onClick={() => {
										router.push("/provider/profile/jenna")
									}}
									className="tz-md tz-quaternary !w-48"
								>
									View profile
								</Button>
							</div>
						</div>
						<div className="flex-1 flex flex-col gap-20 p-[3.75rem] bg-white">
							<div className="flex flex-col gap-4">
								<div className="flex gap-3">
									<span className="text-heading-md font-medium">Invoice</span>
									<Pill className="tz-primary tz-md" disabled>
										Fulfilled
									</Pill>
								</div>
								<div className="flex flex-col">
									<span className="text-heading-2xs font-regular">#136780</span>
									<span className="text-heading-2xs font-regular">
										Charged on:&nbsp;&nbsp;Saturday, January 01, 2023
									</span>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-7">
								<div className="flex flex-col gap-[4.5rem]">
									<div className="flex flex-col gap-5">
										<span className="text-heading-2xs font-normal">
											Billed To:
										</span>
										<span className="text-heading-2xs font-regular">
											Jokob Petal
										</span>
									</div>
									<div className="flex flex-col gap-5">
										<span className="text-heading-2xs font-normal">
											Issued By:
										</span>
										<span className="text-heading-2xs font-regular">
											Jenna Johnson
											<br />
											1765 East Powers Drive
											<br />
											Arvada, Colorado
											<br />
											80005
										</span>
									</div>
								</div>
								<div className="flex flex-col">
									<div className="flex flex-col gap-5">
										<span className="text-heading-2xs font-normal">
											Charges
										</span>
										<div className="flex justify-between">
											<span className="text-heading-2xs font-regular">
												Card Number
											</span>
											<span className="text-heading-2xs font-regular flex">
												**** **** **** 5901
												<img
													className="w-10 h-6"
													src="/assets/img/payment/debit.png"
													alt="card"
												/>
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-heading-2xs font-regular">
												Subtotal
											</span>
											<span className="text-heading-2xs font-regular flex">
												$150.00
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-heading-2xs font-regular">
												Discount
											</span>
											<span className="text-heading-2xs font-regular flex">
												--
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-heading-2xs font-regular">
												Sales Tax (4.89%)
											</span>
											<span className="text-heading-2xs font-regular flex">
												$8.00
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-heading-2xs font-regular">
												Due
											</span>
											<span className="text-heading-2xs font-regular flex">
												$0.00
											</span>
										</div>
									</div>

									<hr className="my-14" />

									<div className="flex justify-between text-heading-2xs">
										<span className="font-normal">Paid</span>
										<span className="font-normal">$158.00</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<MyCalendar />
					</div>
				</div>
			</div>
		</div>
	)
}
