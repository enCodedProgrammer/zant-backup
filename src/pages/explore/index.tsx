import SearchInput from "@/components/input/search"
import CardSection from "@/components/section/explore/card"
import PrideMonthSection from "@/components/section/explore/prideMonth"
import StartSection from "@/components/section/explore/start"
import VideoSection from "@/components/section/explore/video"
import WebinarsSection from "@/components/section/explore/webinars"
import SessionEvent from "@/components/section/session/event"
import { useRouter } from "next/router"

export default function ExplorePage() {
	const router = useRouter()

	return (
		<div className="flex flex-col mt-24">
			<div className="p-8 flex flex-col gap-6">
				<h1 className="text-heading-2xl font-medium">Welcome, Jenna!</h1>
				<SearchInput />
			</div>
			<div className="p-8 bg-gray-25 flex flex-col gap-20">
				<StartSection />
				<SessionEvent />
				<VideoSection title="Tips" />
				<PrideMonthSection
					title="The latest from zant"
					onViewAll={() => router.push("/explore/pride")}
				/>
				<CardSection
					title="Articles"
					onViewAll={() => {
						router.push("/explore/allArticles")
					}}
				/>
				<WebinarsSection
					title="Events & Webinars"
					onViewAll={() => {
						router.push("/explore/webinars")
					}}
				/>
			</div>
		</div>
	)
}
