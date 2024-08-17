import { useRouter } from "next/router"
import CardSection from "../explore/card"
import VideoSection from "../explore/video"
import ChecklistContentSavedSection from "./content/savedContent"

export default function ChecklistContentTab() {
	const router = useRouter()

	return (
		<div className="flex flex-col px-8 py-10 gap-20 bg-gray-25">
			<div className="w-full rounded-2xl flex items-center justify-center overflow-hidden relative h-[20.5rem]">
				<img
					className="absolute center w-full self-stretch object-cover"
					alt="back"
					src="/assets/img/card_back.png"
				/>
				<div className="flex flex-col justify-center items-center z-10 text-white">
					<span className="text-lead-lg">Upload Content</span>
					<span className="mt-3 text-heading-2xl text-center">
						Get discovered and contribute to
						<br />
						the zant community
					</span>
					<span className="mt-7 text-xl">
						Create videos and articles for zant members to explore.
					</span>
				</div>
			</div>

			<VideoSection title="My videos" addIcon />

			<hr />

			<CardSection
				title="Articles"
				onViewAll={() => {
					router.push("/explore/allArticles")
				}}
				addIcon
			/>

			<hr />

			<ChecklistContentSavedSection />
		</div>
	)
}
