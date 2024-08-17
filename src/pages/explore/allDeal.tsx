import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import FeaturedCard from "@/components/card/featured"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Section = () => {
	return (
		<div className="grid grid-cols-3 gap-7">
			<FeaturedCard
				title="RedBull"
				image="/assets/img/deal/deal1.png"
				href=""
			/>
			<FeaturedCard
				title="Barnese & Node"
				image="/assets/img/deal/deal2.png"
				href=""
			/>
			<FeaturedCard
				title="Chegg"
				image="/assets/img/deal/deal3.png"
				href=""
			/>
		</div>
	)
}

export default function ExplorePage() {
	const router = useRouter()

	return (
		<div className="flex flex-col mt-24">
			<div className="px-8 py-10 bg-gray-25 flex flex-col gap-20">
				<div className="flex flex-col gap-6">
					<div className="flex justify-between items-center">
						<div className="flex flex-col gap-2">
							<h3 className="flex-1 text-heading-sm font-medium">
								This month{"'"}s deal
							</h3>
							<div className="text-xl text-gray-800 font-roboto">
								This month we are partnering with RedBull!
							</div>
						</div>
					</div>
					<Link href={"/explore/article/content-federation-and-composable-architecture"}>
						<div className="flex p-16 bg-[url(/assets/img/redbull.png)] bg-no-repeat bg-cover rounded-2xl">
							<div className="w-[35%] pr-16 border-r-2 border-r-white">
								<img
									className="w-full"
									src="/assets/img/redbull_partner.png"
									alt="redbull"
								/>
							</div>
							<div className="flex-1 flex flex-col pl-16 gap-12 text-white justify-between">
								<div className="flex justify-center items-center">
									<div className="text-display-md font-bold">$</div>
									<div className="text-display-3xl font-bold">50</div>
									<Image
										className="w-16 h-16 invert"
										src={PlusCircleIcon}
										alt="plus"
									/>
								</div>
								<div className="text-heading-md font-medium text-center">
									<div>Take three sessions this month and Red Bull will</div>
									<div>automatically add $50 to your account!</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<h4 className="text-heading-lg">All Deals</h4>
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
				<Section />
			</div>
		</div>
	)
}
