import Pill from "@/components/pill"
import { allFeelings } from "@/constant"
import { useState } from "react"

export default function ProfileSettingsMood() {
	const [feelings, setFeelings] = useState<string[]>(allFeelings)
	const [selected, setSelected] = useState<string[]>([])

	return (
		<div className="flex flex-col gap-7">
			<h3 className="text-heading-2xs">My Mood</h3>

			<div className="flex flex-col gap-16 rounded-2xl border-2 border-gray-50 bg-white p-20">
				<h4 className="text-center font-medium text-heading-md">What are you feeling now, Jakob?</h4>
				<div className="mx-auto flex w-2/3 flex-wrap justify-center gap-4">
					{feelings.map((feeling, i) => (
						<Pill
							key={i}
							className="tz-md tz-primary"
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
	)
}
