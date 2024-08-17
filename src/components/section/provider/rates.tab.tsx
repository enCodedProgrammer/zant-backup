import Plus from "@/asset/icons/system/PlusCircle.svg"
import Button from "@/components/button"
import IconButton from "@/components/button/icon"
import Image from "next/image"
import UserIcon from "@/asset/icons/display/User.svg"
import ClockIcon from "@/asset/icons/system/Clock.svg"

export default function RatesTab() {
	return (
		<div className="px-8 py-12 flex flex-col gap-20 bg-gray-25">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-9">
					<h3 className="text-heading-2xl">New Note</h3>
					<IconButton className="tz-md rounded-full">
						<Image src={Plus} alt="plus" />
					</IconButton>
				</div>
				<div className="flex flex-col gap-5">
					<input
						className="input input-bordered rounded-none"
						placeholder="Note title (optional)"
					/>
					<textarea
						className="textarea textarea-bordered border-gray-200 rounded-none"
						placeholder="Write a new note here..."
					/>
				</div>
				<Button className="tz-md tz-primary !w-56">Save Note</Button>
			</div>

			<div className="flex flex-col gap-8">
				<div className="bg-white flex flex-col px-10 py-8 gap-6 rounded-2xl">
					<div className="flex flex-col gap-4">
						<div className="flex gap-3">
							<div className="p-2 rounded-full bg-gray-25 items-center self-center">
								<Image className="w-4 h-4" src={UserIcon} alt="user" />
							</div>
							<span className="text-heading-sm">
								Follow up: Adam is making progress
							</span>
						</div>
						<div className="flex gap-3">
							<span className="text-md text-gray-400">Tuesday, April 21</span>
							<span className="text-md">8:32 pm</span>
						</div>
						<div className="flex gap-2">
							<Button className="tz-sm tz-primary rounded-lg">
								<Image
									src={ClockIcon}
									className="w-4 h-4 filter-tertiary"
									alt="clock"
								/>
								Follow up session
							</Button>
							<Button className="tz-sm tz-secondary rounded-lg">
								Family session
							</Button>
						</div>
					</div>
					<ul className="list-disc pl-5 text-[1.375rem] leading-10">
						<li>Adam demonstrated continued growth and resilience in navigating his family issues, showcasing enhanced communication skills and emotional maturity.</li>
						<li>Agreed to schedule a follow-up appointment in six weeks to review the sustained progress, address any potential setbacks, and discuss future steps in Adam{"'"}s journey towards a healthier family life.</li>
					</ul>
				</div>

				<div className="bg-white flex flex-col px-10 py-8 gap-6 rounded-2xl">
					<div className="flex flex-col gap-4">
						<div className="flex gap-3">
							<div className="p-2 rounded-full bg-gray-25 items-center self-center">
								<Image className="w-4 h-4" src={UserIcon} alt="user" />
							</div>
							<span className="text-heading-sm">
								Follow up: Adam is making progress
							</span>
						</div>
						<div className="flex gap-3">
							<span className="text-md text-gray-400">Tuesday, April 21</span>
							<span className="text-md">8:32 pm</span>
						</div>
						<div className="flex gap-2">
							<Button className="tz-sm tz-primary rounded-lg">
								<Image
									src={ClockIcon}
									className="w-4 h-4 filter-tertiary"
									alt="clock"
								/>
								Follow up session
							</Button>
							<Button className="tz-sm tz-secondary rounded-lg">
								Family session
							</Button>
						</div>
					</div>
					<ul className="list-disc pl-5 text-[1.375rem] leading-10">
						<li>Adam shared encouraging updates regarding his efforts to improve communication and rebuild relationships within his family.</li>
						<li>Discussed Adam{"'"}s growing ability to set and maintain healthy boundaries, resulting in improved self-esteem and reduced conflict.</li>
						<li>Agreed to schedule a follow-up appointment in four weeks to evaluate further progress, address any potential setbacks, and refine the treatment plan as necessary.</li>
					</ul>
				</div>

				<div className="bg-white flex flex-col px-10 py-8 gap-6 rounded-2xl">
					<div className="flex flex-col gap-4">
						<div className="flex gap-3">
							<div className="p-2 rounded-full bg-gray-25 items-center self-center">
								<Image className="w-4 h-4" src={UserIcon} alt="user" />
							</div>
							<span className="text-heading-sm">
								New client consultation: Adam is having family problems, causing anxiety
							</span>
						</div>
						<div className="flex gap-3">
							<span className="text-md text-gray-400">Tuesday, April 21</span>
							<span className="text-md">8:32 pm</span>
						</div>
						<div className="flex gap-2">
							<Button className="tz-sm tz-primary rounded-lg">
								<Image
									src={ClockIcon}
									className="w-4 h-4 filter-tertiary"
									alt="clock"
								/>
								Follow up session
							</Button>
							<Button className="tz-sm tz-secondary rounded-lg">
								Family session
							</Button>
						</div>
					</div>
					<ul className="list-disc pl-5 text-[1.375rem] leading-10">
						<li>Adam expressed ongoing concerns about the strained relationship with his parents, particularly his father, stemming from unresolved conflicts and differences in communication styles.</li>
						<li>Discussed Adam{"'"}s feelings of frustration, sadness, and a desire for better understanding within the family dynamic.</li>
						<li>Assigned homework to practice assertiveness skills and reflection exercises to further explore personal needs and values in relation to family dynamics.</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
