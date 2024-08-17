import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import CheckboxInput from "@/components/input/checkbox"
import { ServiceTypes, SpecialistTypes } from "@/constant"
import { useEffect, useState } from "react"

export default function FilterModal({
	values,
	onConfirm,
}: {
	values: Record<string, boolean>[]
	onConfirm: Function
}) {
	const [serviceTypes, setServiceTypes] = useState<Record<string, boolean>>({})
	const [specialistTypes, setSpecialistTypes] = useState<Record<string, boolean>>({})

	useEffect(() => {
		const services: Record<string, boolean> = {}
		ServiceTypes.forEach((item) => {
			services[item] = false
		})
		setServiceTypes(services)

		const specialists: Record<string, boolean> = {}
		SpecialistTypes.forEach((item) => {
			specialists[item] = false
		})
		setSpecialistTypes(specialists)
	}, [])

	return (
		<dialog id="filter_modal" className="modal">
			<div className="p-1 modal-box min-w-[54rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<h4 className="px-7 py-12 text-center text-lead-md">Filter</h4>
				<div className="flex flex-col gap-8 overflow-auto px-20 py-3 max-h-[32rem] scrollbar">
					<div className="flex flex-1 flex-col gap-5">
						<h3 className="font-medium text-heading-md">Services</h3>
						<div className="flex flex-col flex-wrap h-[24rem]">
							{ServiceTypes.map((item, i) => (
								<CheckboxInput
									key={i}
									label={item}
									checked={serviceTypes[item]}
									onClicked={() => {
										const dump = { ...serviceTypes }
										dump[item] = !serviceTypes[item]
										setServiceTypes(dump)
									}}
								/>
							))}
						</div>
					</div>
					<hr />
					<div className="flex flex-1 flex-col gap-5">
						<h3 className="font-medium text-heading-md">Specialist Type</h3>
						<div className="flex flex-col flex-wrap h-[24rem]">
							{SpecialistTypes.map((item, i) => (
								<CheckboxInput
									key={i}
									label={item}
									checked={specialistTypes[item]}
									onClicked={() => {
										const dump = { ...specialistTypes }
										dump[item] = !specialistTypes[item]
										setSpecialistTypes(dump)
									}}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center gap-5 p-7">
					<Button
						className="tz-primary tz-md min-w-[17rem]"
						onClick={() => {
							onConfirm(serviceTypes, specialistTypes)
							const modal = document.getElementById(
								"filter_modal",
							) as HTMLDialogElement
							modal.close("close")
						}}
					>
						Confirm
					</Button>
					<LinkButton
						className="tz-md tz-secondary"
						onClick={() => {
							setServiceTypes({})
							setSpecialistTypes({})
						}}
					>
						Clear all
					</LinkButton>
				</div>
			</div>
		</dialog>
	)
}
