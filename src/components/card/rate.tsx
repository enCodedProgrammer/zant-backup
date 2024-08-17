import { useEffect, useState } from "react"
import LinkButton from "../button/link"

export default function RateCard({
	editable = false,
	disabled = false,
	unavailable = false,
	rate = 50,
	title = "Standard",
}: {
	editable?: boolean
	disabled?: boolean
	unavailable?: boolean
	rate?: number
	title?: string
}) {
	const [value, setValue] = useState(0)

	useEffect(() => {
		setValue(rate)
	}, [])

	return (
		<div className="relative flex w-full flex-col gap-3">
			{unavailable ? (
				<div className="flex h-full flex-col justify-center gap-8 rounded-2xl border-2 border-gray-50 px-7 py-6">
					<div className="text-center text-xl italic text-gray-300">
						Student - Rate Unavailable
					</div>
					<div className="text-center">
						<LinkButton className="tz-lg">Alert me when available</LinkButton>
					</div>
				</div>
			) : (
				<>
					<div className="flex h-full flex-col justify-center gap-3 rounded-2xl border-2 border-gray-50 bg-gray-50 px-10 py-8">
						<div className="flex items-center justify-between">
							<div className="text-xl text-primary">{title}</div>
							{editable && (
								<div className="form-control">
									<label className="cursor-pointer p-0 label">
										<span className="label-text"></span>
										<input type="checkbox" className="toggle toggle-primary" defaultChecked={true} />
									</label>
								</div>
							)}
						</div>
						<div className="flex items-center gap-1">
							<div className="relative">
								<span className="absolute items-center px-3 font-bold h-center text-heading-lg">
									$
								</span>
								<input
									className="w-40 bg-transparent pl-12 font-bold text-display-sm"
									type="number"
									defaultValue={rate}
									disabled={!editable || disabled}
								/>
							</div>
							<span className="font-bold text-heading-lg">/hr</span>
						</div>
					</div>
					{disabled ? (
						<div className="absolute h-full w-full bg-gray-50 opacity-50"></div>
					) : (
						""
					)}
					{!disabled && editable ? (
						<div className="flex items-center gap-3 px-8">
							<span>Free</span>
							<input
								type="range"
								min={0}
								max="100"
								defaultValue={value}
								className="range range-primary range-xs"
							/>
							<span>$750</span>
						</div>
					) : (
						""
					)}
				</>
			)}
		</div>
	)
}
