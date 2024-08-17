import Avatar from "@/components/avatar"
import Button from "@/components/button"
import MyCalendar from "@/components/calendar";
import Pill from "@/components/pill"
import { useRouter } from "next/router"

export default function SessionEvent() {
    const router = useRouter();
	return (
		<div className="grid grid-cols-3 gap-7">
			<div className="flex-1 border-2 border-gray-50 rounded-2xl col-span-2">
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
								<Button className="tz-sm tz-quaternary rounded-lg">Anxiety</Button>
							</div>
						</div>
						<Button
							onClick={() => {
								router.push("/session/details")
							}}
							className="tz-md tz-tertiary !w-56"
						>
							View session details
						</Button>
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
			</div>
			<div>
				<MyCalendar />
			</div>
		</div>
	)
}
