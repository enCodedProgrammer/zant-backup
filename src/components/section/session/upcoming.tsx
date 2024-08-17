import Avatar from "@/components/avatar"
import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import MyCalendar from "@/components/calendar"
import { useRouter } from "next/router"
import "react-calendar/dist/Calendar.css"

export default function UpcomingSessionSection() {
    const router = useRouter()
    
	return (
		<div className="p-8 bg-gray-25 flex flex-col gap-8">
			<div className="flex gap-7">
				<div className="flex-1 border-2 border-gray-50 rounded-2xl">
					<div className="flex rounded-tl-2xl rounded-tr-2xl w-full relative overflow-hidden">
						<div
							className="flex-1 p-20 flex flex-col justify-between border-r-[3px] border-r-white gap-10 z-10"
							style={{
								background:
									"linear-gradient(0deg, rgba(70, 236, 251, 0.8) 0%, rgba(70, 236, 251, 0.8) 100%), url(/assets/img/session_bg.jpeg) 50% center / cover no-repeat lightgray",
							}}
						>
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-2">
									<span className="text-lead-xl">Next Session</span>
									<span className="text-display-md">Today</span>
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
									<Button
										onClick={() => {
											// router.push("/session/invoice")
										}}
										className="tz-md tz-primary !w-56"
									>
										Add to calendar
									</Button>
									<Button className="tz-md tz-tertiary !w-40">
										Book another
									</Button>
								</div>
								<LinkButton className="tz-md tz-secondary">Reschedule</LinkButton>
							</div>
						</div>

						<div
							className="flex flex-col py-10 px-6 gap-10 w-[26rem] items-center z-10"
							style={{
								background:
									"linear-gradient(0deg, rgba(70, 236, 251, 0.8) 0%, rgba(70, 236, 251, 0.8) 100%), url(/assets/img/session_bg.jpeg) 50% center / cover no-repeat lightgray;",
							}}
						>
							<div className="flex flex-col gap-8">
								<Avatar className="w-56" url="/assets/img/jenna.png" />
								<span className="text-heading-xs text-center">Janna Johnson</span>
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
					<div>
						<h3 className="px-10 py-9 text-heading-sm bg-white">Upcoming Sessions</h3>
						<div className="flex flex-col">
							<div className="py-6 px-10 flex gap-10 items-center">
								<Avatar className="!w-20" url="/assets/img/jenna.png" />
								<div className="flex-1 flex flex-col gap-1">
									<span className="text-heading-2xs">Jenna Johnson</span>
								</div>
								<span className="flex-1 text-heading-2xs font-regular text-right">
									Yesterday
								</span>
								<span className="px-3 py-1 bg-[#EF0CAF33] rounded-lg text-primary text-xl font-bold">
									10:00 AM
								</span>
							</div>
							<div className="py-6 px-10 flex gap-10 items-center">
								<Avatar className="!w-20" url="/assets/img/jenna.png" />
								<div className="flex-1 flex flex-col gap-1">
									<span className="text-heading-2xs">Jenna Johnson</span>
								</div>
								<span className="flex-1 text-heading-2xs font-regular text-right">
									Mar 12, 2023
								</span>
								<span className="px-3 py-1 bg-[#EF0CAF33] rounded-lg text-primary text-xl font-bold">
									12:00 PM
								</span>
							</div>
							<div className="py-6 px-10 flex gap-10 items-center">
								<Avatar className="!w-20" url="/assets/img/jenna.png" />
								<div className="flex-1 flex flex-col gap-1">
									<span className="text-heading-2xs">Jenna Johnson</span>
								</div>
								<span className="flex-1 text-heading-2xs font-regular text-right">
									Mar 19, 2023
								</span>
								<span className="px-3 py-1 bg-[#2CC5D333] rounded-lg text-teal text-xl font-bold">
									10:00 AM
								</span>
							</div>
							<div className="py-6 px-10 flex gap-10 items-center">
								<Avatar className="!w-20" url="/assets/img/jenna.png" />
								<div className="flex-1 flex flex-col gap-1">
									<span className="text-heading-2xs">Jenna Johnson</span>
								</div>
								<span className="flex-1 text-heading-2xs font-regular text-right">
									Mar 3, 2023
								</span>
								<span className="px-3 py-1 bg-[#2CC5D333] rounded-lg text-teal text-xl font-bold">
									1:30 PM
								</span>
							</div>
							<div className="py-6 px-10 flex gap-10 items-center">
								<Avatar className="!w-20" url="/assets/img/jenna.png" />
								<div className="flex-1 flex flex-col gap-1">
									<span className="text-heading-2xs">Jenna Johnson</span>
								</div>
								<span className="flex-1 text-heading-2xs font-regular text-right">
									Feb 12, 2023
								</span>
								<span className="px-3 py-1 bg-[#2CC5D333] rounded-lg text-teal text-xl font-bold">
									10:00 AM
								</span>
							</div>
						</div>
					</div>
				</div>
				<div>
					<MyCalendar />
				</div>
			</div>
		</div>
	)
}
