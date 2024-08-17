import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import GenericIconButton from "@/components/button/genericIcon"
import SaveButton from "@/components/button/save"
import CardSection from "@/components/section/explore/card"
import ProfileSection from "@/components/section/explore/profile"
import VideoSection from "@/components/section/explore/video"
import { useRouter } from "next/router"

export default function AnxietyPage() {
	const router = useRouter()

	return (
		<div className="flex flex-col">
			<div className="fixed pl-8 left-24 top-8 z-50">
				<GenericIconButton icon={CaretLeftIcon} onClick={() => router.back()} />
			</div>
			<div className="px-20 bg-[#FF8B00]">
				<div className="grid grid-cols-12 gap-8">
					<div className="col-span-4">
						<img className="w-full" src="/assets/img/feed/burnout.png" alt="thumbnail" />
					</div>
					<div className="col-span-5 flex flex-col justify-end py-12 gap-8">
						<h2 className="text-display-md">Prevent Burnout</h2>
						<div className="text-heading-2xs font-regular">Discover series on how to prevent burnout.</div>
						<SaveButton className="self-start tz-lg tz-tertiary" />
					</div>
				</div>
			</div>
			<div className="p-8 bg-gray-25 flex flex-col gap-20">
				<VideoSection />
				<ProfileSection title="Top Anxiety Experts" />
				<CardSection title="Educational Resources" />
			</div>
		</div>
	)
}
