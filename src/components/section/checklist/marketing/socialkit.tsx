import LinkButton from "@/components/button/link"
import ArrowTopRightIcon from "@/asset/icons/system/ArrowTopRight.svg"
import InstagramIcon from "@/asset/icons/system/Instagram.svg"
import TicktokIcon from "@/asset/icons/system/Tiktok.svg"
import Image from "next/image"

export default function ChecklistMarketingSocialKitSection() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h3 className="flex-1 font-medium text-heading-sm">Social Kits</h3>
				<LinkButton className="tz-md tz-secondary">view all</LinkButton>
			</div>
			<div className="grid grid-cols-3 gap-7">
				<div className="flex flex-col px-10 py-[4.5rem] rounded-2xl bg-secondary gap-3 justify-center">
					<div>
						<div className="p-4 bg-white rounded-full inline-flex">
							<img src="/assets/img/icon/phone.png" alt="phone" />
						</div>
					</div>
					<span className="text-heading-2xl">
						Download social media kits tailored to you
						<Image
							className="inline-block brightness-0 invert ml-4 w-10 h-10"
							src={ArrowTopRightIcon}
							alt="arrow"
						/>
					</span>
				</div>
				<div className="rounded-2xl bg-gray-50 flex flex-col overflow-hidden">
					<img src="/assets/img/social/01.png" className="rouned-2xl" />
					<div className="flex flex-col px-10 py-8 gap-5">
						<span className="text-lead-sm flex gap-2 text-primary">
							<Image
								className="inline w-5 h-5 filter-primary"
								src={InstagramIcon}
								alt="instagram"
							/>
							Instagram
						</span>
						<span className="text-heading-lg">Story Templates</span>
						<LinkButton className="tz-xl text-primary self-start">
							View all templates
						</LinkButton>
					</div>
				</div>
				<div className="rounded-2xl bg-gray-50 flex flex-col overflow-hidden">
					<img src="/assets/img/social/02.png" className="rouned-2xl" />
					<div className="flex flex-col px-10 py-8 gap-5">
						<span className="text-lead-sm flex gap-2 text-primary">
							<Image
								className="inline w-5 h-5 filter-primary"
								src={TicktokIcon}
								alt="tiktok"
							/>
							Instagram
						</span>
						<span className="text-heading-lg">Creator Tools</span>
						<LinkButton className="tz-xl text-primary self-start">
							View all templates
						</LinkButton>
					</div>
				</div>
			</div>
		</div>
	)
}
