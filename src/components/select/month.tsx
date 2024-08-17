import CalendarCheckIcon from "@/asset/icons/system/CalendarCheck.svg"
import CaretDownIcon from "@/asset/icons/system/CaretDown.svg"
import Image from "next/image"
import { useState } from "react"

export default function MonthSelect() {
	const [value, setValue] = useState("This Month")
	return (
		<details className="dropdown">
			<summary tabIndex={0} role="button" className="flex gap-1 cursor-pointer">
				<Image className="w-6 h-6 filter-gray-400" src={CalendarCheckIcon} alt="calender check" />
				<span className="font-roboto text-md text-gray-500">{value}</span>
				<Image className="w-6 h-6 filter-gray-400" src={CaretDownIcon} alt="caret down" />
			</summary>
			<ul
				tabIndex={0}
				className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a onClick={() => setValue("This Week")}>This Week</a>
				</li>
				<li>
					<a onClick={() => setValue("This Month")}>This Month</a>
				</li>
				<li>
					<a onClick={() => setValue("This Year")}>This Year</a>
				</li>
			</ul>
		</details>
	)
}
