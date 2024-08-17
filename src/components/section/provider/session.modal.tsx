import Button from "@/components/button"
import Pill from "@/components/pill"
import Tab from "@/components/tab/tab"
import { allFeelings } from "@/constant"
import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function BookSessionModal() {
	const [feelings, setFeelings] = useState<string[]>(allFeelings)
	const [selected, setSelected] = useState<string[]>([])
	const [step, setStep] = useState(0)
	const [date, setDate] = useState<Date | null>(null)
	const [time, setTime] = useState<string>("")

	return (
		<dialog id="session_modal" className="modal">
			<div className="p-0 modal-box min-w-[54rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<h4 className="px-7 py-12 text-center text-lead-md">Book a session</h4>
				<div className="flex">
					<Tab
						className="flex-1 cursor-auto hover:border-b-none"
						active={step >= 0}
						onClick={() => {}}
					>
						Choose session
					</Tab>
					<Tab
						className="flex-1 cursor-auto hover:border-b-none"
						active={step >= 2}
						onClick={() => {}}
					>
						Reason
					</Tab>

					<Tab
						className="flex-1 cursor-auto hover:border-b-none"
						active={step >= 3}
						onClick={() => {}}
					>
						Confirmation
					</Tab>
				</div>

				{step == 0 && (
					<div className="flex flex-col items-center gap-8 bg-gray-50 px-20 py-8">
						<h2 className="text-center font-medium text-heading-md">
							What kind of session are you
							<br />
							booking with Jena?
						</h2>

						<div className="flex w-full flex-col">
							<div className="flex flex-col gap-1 py-5">
								<div className="flex justify-between">
									<span className="text-xl font-medium">First consultation</span>
									<input
										type="radio"
										name="session_type"
										className="radio radio-secondary"
									/>
								</div>
								<span className="text-sm">Free - 30 minutes</span>
							</div>
							<hr />
							<div className="flex flex-col gap-1 py-5">
								<div className="flex justify-between">
									<span className="text-xl font-medium">Standard session</span>
									<input
										type="radio"
										name="session_type"
										className="radio radio-secondary"
									/>
								</div>
								<span className="text-sm">$50 - 1 hour</span>
							</div>
							<hr />
							<div className="flex flex-col gap-1 py-5">
								<div className="flex justify-between">
									<span className="text-xl font-medium">
										Standard session 4 pack
									</span>
									<input
										type="radio"
										name="session_type"
										className="radio radio-secondary"
									/>
								</div>
								<span className="text-sm">
									$175 - 30 minutes - Pre-pay 4 session
								</span>
							</div>
						</div>
					</div>
				)}
				{step == 1 && (
					<div className="flex w-full items-center justify-center gap-11 bg-gray-50 h-[30rem]">
						<Calendar
							onClickDay={(value: Date) => {
								setDate(value)
							}}
						/>
						{date && (
							<div className="flex flex-col gap-10">
								<span className="font-medium text-heading-2xs">
									{date.toDateString()}
								</span>
								<div className="grid grid-cols-3 gap-2">
									{[
										"8:00 - 9:00 am",
										"9:00 - 10:00 am",
										"10:00 - 11:00 am",
										"12:00 - 1:00 pm",
										"1:00 - 2:00 pm",
										"2:00 - 3:00 pm",
										"4:00 - 5:00 pm",
										"5:00 - 6:00 pm",
									].map((t, i) => (
										<Pill
											key={i}
											className="tz-sm"
											active={time == t}
											onClick={() => setTime(t)}
										>
											{t}
										</Pill>
									))}
								</div>
							</div>
						)}
					</div>
				)}
				{step == 2 && (
					<div className="flex flex-1 grow flex-col items-center justify-between gap-10 self-stretch bg-gray-50 px-20 py-8">
						<div className="flex flex-col items-center gap-4">
							<div className="text-center font-bold text-heading-md">
								Is there anything specific you
								<br />
								want to discuss?
							</div>
						</div>
						<div className="flex flex-1 flex-col justify-between">
							<div className="mx-auto flex flex-wrap justify-center gap-6">
								{feelings.map((feeling, i) => (
									<Pill
										key={i}
										className="tz-sm tz-primary"
										active={selected.indexOf(feeling) > -1}
										onClick={() => {
											const array = [...selected]
											const index = array.indexOf(feeling)
											if (index > -1) {
												array.splice(index, 1)
												setSelected(array)
											} else {
												array.push(feeling)
												setSelected(array)
											}
										}}
									>
										{feeling}
									</Pill>
								))}
							</div>
						</div>
					</div>
				)}

				{step == 3 && (
					<div className="flex w-full items-center justify-center gap-11 bg-gray-50 h-[30rem]">
						<form method="dialog">
							<Button className="tz-md tz-primary">Confirm</Button>
						</form>
						<form method="dialog">
							<Button className="tz-md tz-secondary">Cancel</Button>
						</form>
					</div>
				)}

				{step != 3 && (
					<div className="flex justify-center p-8 shadow-xl">
						<Button
							className="tz-md tz-primary !w-56"
							onClick={() => {
								if (step < 3) {
									setStep(step + 1)
								} else {
									setStep(0)
									const modal = document.getElementById(
										"session_modal",
									) as HTMLDialogElement
									modal.close("close")
								}
							}}
						>
							Next
						</Button>
					</div>
				)}
			</div>
		</dialog>
	)
}
