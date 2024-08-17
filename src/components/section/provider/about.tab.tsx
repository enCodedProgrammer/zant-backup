import Button from "@/components/button"
import ClientSessionCard from "@/components/card/clientSession"
import RatingCard from "@/components/card/rating"
import StatCard from "@/components/card/stat"
import Tag from "@/components/pill/tag"
import AdjustPriceModal from "./adjust.modal"
import { useState } from "react"

export default function AboutTab() {
	const [price, setPrice] = useState(50);

	return (
		<div className="flex flex-col gap-20 px-8 py-12 bg-gray-25">
			<div className="grid grid-cols-3 gap-10">
				<div className="col-span-2 flex flex-col gap-8">
					<span className="text-heading-xl">Next session</span>
					<div className="grid grid-cols-2 gap-10">
						<ClientSessionCard />
						<div className="flex flex-col gap-6 justify-between">
							<StatCard title="Last Session" value="Jan 12, 2022" additionalText="" />
							<StatCard title="Completed Sessions" value="20" additionalText="" />
							<StatCard title="Consultations" value="02" additionalText="" />
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8 h-full">
					<span className="text-heading-xl">Rates</span>
					<div className="flex-1 justify-center flex flex-col gap-9 p-9 bg-white border-2 border-gray-50 rounded-2xl items-center">
						<div className="flex flex-col gap-5 items-center">
							<div className="flex items-center">
								<span className="text-heading-lg">$</span>
								<span className="text-display-sm">{price}</span>
								<span className="text-heading-lg pt-6">/hr</span>
							</div>
							<span className="text-xl text-center">
								We believe that everyone should have access to
								<br />
								quality mental health support, which is why we
								<br />
								offer personalized rates.
							</span>
						</div>
						<Button className="tz-md tz-primary" onClick={() => {
							const modal = document.getElementById("adjust_price_modal") as HTMLDialogElement
							modal.showModal()
						}}>Adjust Adam{"'"}s prices</Button>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<h3 className="text-heading-2xl">Rating</h3>
				<div className="flex gap-5 items-center">
					<RatingCard score={4.92} />
					<div className="flex flex-col gap-5">
						<div className="flex gap-5">
							<Tag className="tz-md tz-secondary" selected>
								Punctual
							</Tag>
							<Tag className="tz-md tz-secondary" selected>
								Does Homework
							</Tag>
							<Tag className="tz-md tz-secondary" selected>
								Respectful
							</Tag>
							<Tag className="tz-md tz-secondary" selected>
								Active Participator
							</Tag>
						</div>
						<div className="flex gap-5">
							<Tag className="tz-sm tz-secondary">2+ cancellations</Tag>
							<Tag className="tz-sm tz-secondary">Late</Tag>
							<Tag className="tz-sm tz-secondary">Profanity</Tag>
							<Tag className="tz-sm tz-secondary">Consistent</Tag>
							<Tag className="tz-sm tz-secondary">Active listener</Tag>
							<Tag className="tz-sm tz-secondary">Consultation hopping</Tag>
						</div>
					</div>
				</div>
			</div>
			

			<AdjustPriceModal price={price} onSave={(value) => {
				setPrice(value);
			}} />
		</div>
	)
}
