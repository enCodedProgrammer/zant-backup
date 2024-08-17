import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import GenericIconButton from "@/components/button/genericIcon"
import LinkButton from "@/components/button/link"
import RateCard from "@/components/card/rate"
import Pill from "@/components/pill"
import DateSelectItem from "@/components/select/date"
import { allFeelings } from "@/constant"
import classNames from "classnames"
import { useState } from "react"
import "react-calendar/dist/Calendar.css"

export default function BuildProfileModal() {
	const [feelings, setFeelings] = useState<string[]>(allFeelings)
	const [selected, setSelected] = useState<string[]>([])
	const [step, setStep] = useState(0)

	return (
		<dialog id="build_profile_modal" className="modal">
			<div className="modal-box min-w-[64rem] p-0">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-9">
						✕
					</button>
				</form>
				<GenericIconButton
					size="2rem"
					className={classNames("absolute top-10 left-10 filter-gray-400", {
						hidden: step == 0,
					})}
					icon={CaretLeftIcon}
					onClick={() => setStep(Math.max(0, step - 1))}
				/>

				{step == 0 && (
					<div className="p-20 flex flex-col gap-16 items-center bg-white">
						<div className="flex flex-col gap-4">
							<h2 className="text-heading-md font-medium text-center">
								What are your top 5 specialties?
							</h2>
							<span className="text-center text-md text-gray-700">
								We know you may be specialized in many areas, but want to know
								<br />
								the 5 areas you are most confident in.
							</span>
						</div>

						<div className="flex-1 flex flex-col justify-between">
							<div className="flex flex-wrap gap-6 mx-auto justify-center">
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
				{step == 1 && (
					<div className="p-20 flex flex-col gap-16 items-center bg-white">
						<div className="flex flex-col gap-4">
							<h2 className="text-heading-md font-medium text-center">
								Set your global availability
							</h2>
							<span className="text-center text-md text-gray-700">
								When are you available for sessions? You will be able to change
								<br />
								this per calendar day at anytime. This is just your general
								availability.
							</span>
						</div>
						<div className="flex flex-col gap-10 w-full">
							<div className="grid grid-cols-3 gap-4">
								<div className="flex flex-col gap-1">
									<span className="text-heading-2xs">Timezone</span>
									<span className="text-sm text-gray-700">Set your timezone</span>
								</div>
								<select className="col-span-2 select w-full h-full rounded-none border-[1px] border-gray-50">
									<option selected>UTC - 8:00 (Pacific Time)</option>
								</select>
							</div>
							<hr />
							<DateSelectItem label="Monday" /> <hr />
							<DateSelectItem label="Tuesday" /> <hr />
							<DateSelectItem label="Wednesday" /> <hr />
							<DateSelectItem label="Thursday" /> <hr />
							<DateSelectItem label="Friday" /> <hr />
							<DateSelectItem label="Saturday" defaultValue={false} /> <hr />
							<DateSelectItem label="Sunday" defaultValue={false} /> <hr />
						</div>
					</div>
				)}
				{step == 2 && (
					<div className="py-20 px-[11.25rem] flex flex-col gap-16 items-center bg-white">
						<div className="flex flex-col gap-4">
							<h2 className="text-heading-md font-medium text-center">
								Set your rates
							</h2>
							<span className="text-center text-md text-gray-700">
								Set your global standard, student, and 4-pack rates for your
								clients.
								<br />
								You may toggle rates on or off at any time.
							</span>
						</div>

						<div className="flex flex-col gap-6 w-full">
							<div className="flex flex-col gap-2">
								<span className="text-heading-2xs">Standard</span>
								<span className="text-sm text-gray-700">
									This is the regular rate you charge your clients.
								</span>
							</div>
							<div className="grid grid-cols-2 gap-8">
								<RateCard editable />
								<RateCard editable title="Standard 4pk" />
							</div>
						</div>

						<div className="flex flex-col gap-6 w-full">
							<div className="flex flex-col gap-2">
								<span className="text-heading-2xs">Student</span>
								<span className="text-sm text-gray-700">
									This is the discounted rate you charge student clients. To
									ensure our student rates are accessible, you may not
									<br />
									charge over $25 / hr for student sessions.
								</span>
							</div>
							<div className="grid grid-cols-2 gap-8">
								<RateCard editable title="Student" />
								<RateCard editable title="Student 4pk" />
							</div>
						</div>
					</div>
				)}

				{step != 2 && (
					<div className="flex flex-col mb-20 items-center gap-10">
						<Button
							className="tz-md tz-primary !w-56"
							disabled={step == 0 && selected.length == 0}
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
						<LinkButton
							className="tz-md tz-secondary"
							onClick={() => {
								if (step < 3) {
									setStep(step + 1)
								}
							}}
						>
							skip
						</LinkButton>
					</div>
				)}
			</div>
		</dialog>
	)
}
