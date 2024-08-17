import Button from "@/components/button"
import { useState } from "react"
import FundsConfirmModal from "../members/addFunds.modal"

export default function AdjustPriceModal({ price = 5, onSave }: { price: number, onSave: Function }) {
	const [value, setValue] = useState(price)

	return (
		<dialog id="adjust_price_modal" className="modal">
			<div className="modal-box max-w-[21rem] p-0">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-9">
						✕
					</button>
				</form>
				<div className="flex flex-col px-11 py-16 gap-12 items-center">
					<div className="flex flex-col gap-5 items-center w-full">
						<div className="flex flex-col gap-3 items-center">
							<span className="text-heading-2xs">
								Add funds to wallet
							</span>
							<span className="text-md text-gray-700 tracking-wider">
								Add more funds to Jakob{"'"}s wallet
							</span>
						</div>
						<div className="flex items-center rounded-xl border border-gray-100 justify-center py-2 w-full">
							<span className="text-heading-lg">$</span>
							<span className="text-display-sm">{value}</span>
						</div>
						<div className="flex items-center gap-3 w-full">
							<input
								type="range"
								min={0}
								max={1000}
								defaultValue={value}
								onChange={(e) => {
									console.log(e)
									setValue(parseInt(e.target.value))
								}}
								className="range range-primary range-xs"
							/>
						</div>
					</div>

					<Button
						className="tz-md tz-primary w-full"
						onClick={() => {
							const modal = document.getElementById(
								"adjust_price_modal",
							) as HTMLDialogElement
							modal.close("hide")

							const fundsModal = document.getElementById(
								"funds_confirm_modal",
							) as HTMLDialogElement
							fundsModal.showModal()
						}}
					>
						Add funds | ${value}
					</Button>
				</div>
			</div>
			<FundsConfirmModal onClickEvent={() => {
				const modal = document.getElementById(
					"funds_confirm_modal",
				) as HTMLDialogElement
				modal.close("hide")
			}} />
		</dialog>
	)
}
