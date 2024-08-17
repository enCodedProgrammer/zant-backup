import SearchFilterInput from "@/components/input/filter"
import Pill from "@/components/pill"
import { ServiceTypes, SpecialistTypes } from "@/constant"
import { useState } from "react"
import AvailableSection from "../explore/available"
import ProfileSection from "../explore/profile"
import FilterModal from "./filter.modal"
import ProvidersListSection from "./providers.list"

export default function ListTab() {
	const [serviceTypes, setServiceTypes] = useState<Record<string, boolean>>({})
	const [specialistTypes, setSpecialistTypes] = useState<Record<string, boolean>>({})
	const [advanced, setAdvanced] = useState(false)

	return (
		<>
			<div>
				<div className="mb-12 flex flex-col gap-5 px-7">
					<SearchFilterInput
						onModal={() =>
							(
								document.getElementById("filter_modal") as HTMLDialogElement
							).showModal()
						}
					/>
					<div className="flex flex-row-reverse">
						{advanced &&
							ServiceTypes.filter((i) => serviceTypes[i]).map((type, i) => (
								<Pill key={i} className="tz-sm tz-secondary" active={true}>
									{type}
								</Pill>
							))}
						{advanced &&
							SpecialistTypes.filter((i) => specialistTypes[i]).map((type, i) => (
								<Pill key={i} className="tz-sm tz-secondary" active={true}>
									{type}
								</Pill>
							))}
					</div>
				</div>
				{!advanced ? (
					<div className="flex flex-col gap-20 p-8 bg-gray-25">
						<AvailableSection />
						<ProfileSection title="Top Anxiety Experts" />
						<ProfileSection title="Top Depression Experts" />
					</div>
				) : (
					<ProvidersListSection />
				)}
			</div>
			<FilterModal
				values={[serviceTypes, specialistTypes]}
				onConfirm={(services: any, specialists: any) => {
					setServiceTypes(services)
					setSpecialistTypes(specialists)
					setAdvanced(true)
				}}
			/>
		</>
	)
}
