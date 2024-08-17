import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import GenericIconButton from "@/components/button/genericIcon"
import SaveButton from "@/components/button/save"
import CardSection from "@/components/section/explore/card"
import ProfileSection from "@/components/section/explore/profile"
import VideoSection from "@/components/section/explore/video"
import { useRouter } from "next/router"

export default function DepressionPage() {
	const router = useRouter()

	return (
		<div className="flex flex-col">
			<div className="fixed top-8 left-24 z-50 pl-8">
				<GenericIconButton icon={CaretLeftIcon} onClick={() => router.back()}  />
			</div>
			<div className="px-20 bg-[#FD01A3]">
				<div className="grid grid-cols-12 gap-8">
					<div className="col-span-5">
						<img src="/assets/img/depression_header.png" alt="thumbnail" />
					</div>
					<div className="col-span-5 flex flex-col justify-end gap-8 py-12">
						<h2 className="text-display-md">Depression Recession</h2>
						<div className="text-heading-2xs font-regular">
							Discover series on pride month.
						</div>
						<SaveButton className="self-start tz-lg tz-tertiary" />
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-20 p-8 bg-gray-25">
				<VideoSection />
				<ProfileSection title="Depression Specialists" />
				<CardSection title="Depression Articles" />
				<ProfileSection title="Exercise Specialists" />
			</div>
		</div>
	)
}
