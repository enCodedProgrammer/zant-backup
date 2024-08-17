import Avatar from "@/components/avatar"
import RatingCard from "@/components/card/rating"
import SearchInput from "@/components/input/search"
import ChecklistContentTab from "@/components/section/checklist/content"
import ChecklistMarketingTab from "@/components/section/checklist/marketing"
import ChecklistOnboardingTab from "@/components/section/checklist/onboarding.tab"
import ChecklistMyProfileTab from "@/components/section/checklist/profile.tab"
import ChecklistSettingsTab from "@/components/section/checklist/settings.tab"
import CardSection from "@/components/section/explore/card"
import ProfileSection from "@/components/section/explore/profile"
import VideoSection from "@/components/section/explore/video"
import TabPanel from "@/components/tab"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function ChecklistPage() {
	const [tab, setTab] = useState("")
	const router = useRouter()

	const onSelectTab = (selected: string) => {
		router.push({
			pathname: router.pathname,
			query: { tab: selected },
		})
		setTab(selected)
	}

	useEffect(() => {
		const selected = router.query.tab
		if (selected && tab != selected) onSelectTab(selected as string)
		if (!selected) onSelectTab("Onboarding")
	}, [router.query])

	return (
		<div className="mt-24 flex flex-col">
			<div className="fixed top-5 right-40 left-24 z-50 pl-8">
				<SearchInput />
			</div>
			<div className="flex justify-center gap-24 items-center pt-3 pb-10 relative">
				<RatingCard score={4.92} />
				<div className="flex flex-col gap-6 items-center">
					<div className="relative">
						<Avatar url="/assets/img/profile/user3.png" />
					</div>
					<div className="flex flex-col items-center">
						<p className="text-heading-2xl font-medium">Jenna Johnson</p>
						<p className="text-lead-md !font-regular">Life Coach</p>
					</div>
				</div>
				<div className="w-[22.5rem] h-[11.5rem]">
					<div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-gray-50 p-8">
						<div className="flex justify-center gap-2 font-bold text-display-xs">
							16
						</div>
						<div>Clients</div>
					</div>
				</div>
			</div>

			<TabPanel
				tabs={["Onboarding", "My Profile", "My Content", "My Marketing", "Settings"]}
				tab={tab}
				onSelected={(t: string) => onSelectTab(t)}
				className="border-b-2 shadow-md z-10 border-b-gray-50 px-32 justify-between"
			/>

			<div hidden={tab != "Onboarding"}>
				<ChecklistOnboardingTab />
			</div>
			<div hidden={tab != "My Profile"}>
				<ChecklistMyProfileTab />
			</div>
			<div hidden={tab != "My Content"}>
				<ChecklistContentTab />
			</div>
			<div hidden={tab != "My Marketing"}>
				<ChecklistMarketingTab />
			</div>
			<div hidden={tab != "Favorites"}>
				<div className="flex flex-col gap-20 p-8 bg-gray-25">
					<ProfileSection
						title="Top Anxiety Experts"
						onViewAll={() => {
							router.push("/profile/favorites")
						}}
					/>
					<VideoSection />
					<CardSection title="Articles" />
				</div>
			</div>
			<div hidden={tab != "Settings"}>
				<ChecklistSettingsTab />
			</div>
		</div>
	)
}
