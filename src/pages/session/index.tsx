import Avatar from "@/components/avatar"
import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import MyCalendar from "@/components/calendar"
import SearchInput from "@/components/input/search"
import Pill from "@/components/pill"
import ManageAvailabilitySection from "@/components/section/session/availability"
import PastSessionSection from "@/components/section/session/past"
import UpcomingSessionSection from "@/components/section/session/upcoming"
import TabPanel from "@/components/tab"
import { useRouter } from "next/router"
import { useState } from "react"
import "react-calendar/dist/Calendar.css"

export default function SessionPage() {
	const router = useRouter()
	const [tab, setTab] = useState("Upcoming Sessions")
	const onSelectTab = (selected: string) => {
		setTab(selected)
	}
	return (
		<div className="flex flex-col mt-24">
			<div className="fixed pl-8 left-24 right-40 top-5 z-50">
				<SearchInput />
			</div>

			<TabPanel
				tabs={["Upcoming Sessions", "Past Sessions", "Manage Availability"]}
				tab={tab}
				onSelected={(t: string) => onSelectTab(t)}
				className="px-8 border-b-2 border-b-gray-50 shadow-sm z-10"
			/>

			<div hidden={tab != "Upcoming Sessions"}>
				<UpcomingSessionSection />
			</div>
			<div hidden={tab != "Past Sessions"}>
				<PastSessionSection />
			</div>
			<div hidden={tab != "Manage Availability"}>
				<ManageAvailabilitySection />
			</div>
		</div>
	)
}
