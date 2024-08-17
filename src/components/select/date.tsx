import TrashIcon from "@/asset/icons/system/Trash.svg"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import GenericIconButton from "../button/genericIcon"
import LinkButton from "../button/link"
import { useEffect, useState } from "react"

export default function DateSelectItem({
	defaultValue = true,
	label,
}: {
	defaultValue?: boolean
	label: string
}) {
	const [value, setValue] = useState(true)
	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="flex gap-4">
				<input
					className="toggle toggle-primary"
					type="checkbox"
					checked={value}
					onClick={() => setValue(!value)}
				/>
				{label}
			</div>
			<div className="col-span-2">
				<div className="flex flex-col gap-5">
					<div className="flex gap-3">
						{value ? (
							<>
								<div className="flex-1 flex gap-8">
									<input
										type="text"
										className="flex-1 input input-bordered rounded-none"
										value="9:00 am"
									/>
									<input
										type="text"
										className="flex-1 input input-bordered rounded-none"
										value="5:00 pm"
									/>
								</div>
								<GenericIconButton
									className="self-end mb-4"
									iconClassName="filter-gray-400"
									size="1.25rem"
									icon={TrashIcon}
								/>
							</>
						) : (
							<input
								className="input !bg-gray-50 !text-gray-700 w-full rounded-none border-none"
								disabled
								value="Unavailable"
							/>
						)}
					</div>
					<LinkButton className="tz-md tz-primary self-end">
						Add another block
						<GenericIconButton
							iconClassName="filter-primary"
							size="1.25rem"
							icon={PlusCircleIcon}
						/>
					</LinkButton>
				</div>
			</div>
		</div>
	)
}
