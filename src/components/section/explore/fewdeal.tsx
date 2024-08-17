import LinkButton from "@/components/button/link"
import Image from "next/image"
import Link from "next/link"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"

const FewDealSection = () => (
	<div className="flex flex-col gap-6">
		<div className="flex items-center justify-between">
			<div className="flex flex-col gap-2">
				<h3 className="flex-1 font-medium text-heading-sm">A Few Deals</h3>
				<div className="text-xl text-gray-800 font-roboto">
					This month we are partnering with RedBull!
				</div>
			</div>
			<LinkButton className="tz-md tz-secondary">view all</LinkButton>
		</div>
		<Link href={"/explore/article/content-federation-and-composable-architecture"}>
			<div className="flex p-16 bg-[url(/assets/img/redbull.png)] bg-no-repeat bg-cover rounded-2xl">
				<div className="border-r-2 border-r-white pr-16 w-[35%]">
					<img className="w-full" src="/assets/img/redbull_partner.png" alt="redbull" />
				</div>
				<div className="flex flex-1 flex-col justify-between gap-12 pl-16 text-white">
					<div className="flex items-center justify-center">
						<div className="font-bold text-display-md">$</div>
						<div className="font-bold text-display-3xl">50</div>
						<Image className="h-16 w-16 invert" src={PlusCircleIcon} alt="plus" />
					</div>
					<div className="text-center font-medium text-heading-md">
						<div>Take three sessions this month and Red Bull will</div>
						<div>automatically add $50 to your account!</div>
					</div>
				</div>
			</div>
		</Link>
	</div>
)

export default FewDealSection
