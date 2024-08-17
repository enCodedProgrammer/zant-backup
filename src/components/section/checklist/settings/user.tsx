import GenericIconButton from "@/components/button/genericIcon"
import { useState } from "react"
import TrashIcon from "@/asset/icons/system/Trash.svg"
import LinkButton from "@/components/button/link"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"

export default function ProfileSettingsUser() {
	const [licenses, setLicenses] = useState([
		{
			title: "Life Coach",
			license: "32535253253",
		},
		{
			title: "Life Coach",
			license: "32535253253",
		},
	])
	return (
		<div className="flex flex-col gap-12">
			<h3 className="text-heading-2xs">User Information</h3>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">Public Profile</h4>

				<div className="flex gap-8">
					<div className="flex-1">
						<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
							First name
						</label>
						<input className="w-full input rounded-none" value="Jakob" />
					</div>
					<div className="flex-1">
						<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
							Last Name
						</label>
						<input className="w-full input rounded-none" value="Patel" />
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<h4 className="text-md font-regular text-gray-700">
					Select which license you want to practice under.
				</h4>

				<div className="flex flex-col gap-6">
					{licenses.map((i, k) => (
						<div key={k} className="flex gap-4 items-start">
							<input
								type="checkbox"
								className="radio radio-secondary self-end mb-3"
								checked
							/>
							<div className="flex-1 flex">
								<div className="flex-1">
									<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
										Title
									</label>
									<input className="w-full input rounded-none" value={i.title} />
								</div>
								<div className="flex-1">
									<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
										License
									</label>
									<input
										className="w-full input rounded-none"
										value={i.license}
									/>
								</div>
							</div>
							<GenericIconButton
								className="self-end mb-4"
								iconClassName="filter-gray-400"
								size="1.25rem"
								icon={TrashIcon}
							/>
						</div>
					))}
					<LinkButton className="tz-md tz-primary self-end">
						Add another license
						<GenericIconButton
							iconClassName="filter-primary"
							size="1.25rem"
							icon={PlusCircleIcon}
						/>
					</LinkButton>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<h4 className="text-xl font-medium">Account Details</h4>

				<div className="flex gap-8">
					<div className="flex-1">
						<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
							Email
						</label>
						<input className="w-full input rounded-none" value="jenna.johnson@gmail.com" />
					</div>
					<div className="flex-1">
						<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
							Phone
						</label>
						<input className="w-full input rounded-none" value="970-124-5753" />
					</div>
				</div>
				<div className="flex gap-8">
					<div className="flex-1">
						<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
							Resident state
						</label>
						<input className="w-full input rounded-none" value="New Jersey" />
					</div>
					<div className="flex-1">
						<label className="mb-1 ml-2 block text-sm text-gray-700 font-regular">
							Birthdy
						</label>
						<input className="w-full input rounded-none" value="06 / Oct / 1991" />
					</div>
				</div>
			</div>
		</div>
	)
}
