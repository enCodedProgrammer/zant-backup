import Avatar from "@/components/avatar"
import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import MyCalendar from "@/components/calendar"
import SearchInput from "@/components/input/search"
import "react-calendar/dist/Calendar.css"

export default function SessionNowPage() {
	return (
		<div className="flex flex-col mt-24">
			<div className="p-8 flex flex-col gap-6">
				<h1 className="text-heading-2xl font-medium">Sessions</h1>
				<SearchInput />
			</div>
			<div className="p-8 bg-gray-25 flex flex-col gap-8">
				<div className="flex gap-7">
					<div className="flex-1 border-2 border-gray-50 rounded-2xl">
						<div className="flex rounded-2xl w-full relative overflow-hidden">
							<div
								className="absolute w-full items-center flex overflow-hidden rounded-xl"
								style={{ aspectRatio: "1/1" }}
							>
								<img
									className="w-full self-stretch object-cover"
									style={{
										filter: "blur(3px) brightness(1.25)",
									}}
									alt={"session background"}
									src="/assets/img/session_bg.jpeg"
								/>
							</div>

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
										<span className="text-display-md">Now</span>
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
									<Button className="tz-md tz-primary !w-56">
										Join session now
									</Button>
									<LinkButton className="tz-md tz-secondary">
										Reschedule or cancel
									</LinkButton>
								</div>
							</div>

							<div
								className="flex flex-col py-10 px-6 gap-10 w-[26rem] items-center z-10"
								style={{
									background:
										"linear-gradient(0deg, rgba(70, 236, 251, 0.8) 0%, rgba(70, 236, 251, 0.8) 100%), url(/assets/img/session_bg.jpeg) 50% center / cover no-repeat lightgray",
								}}
							>
								<div className="flex flex-col gap-8">
									<Avatar className="w-56" url="/assets/img/jenna.png" />
									<span className="text-heading-xs text-center">
										Janna Johnson
									</span>
								</div>

								<Button className="tz-md tz-tertiary !w-48">View profile</Button>
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
