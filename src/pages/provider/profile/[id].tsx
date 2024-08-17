import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Avatar from "@/components/avatar"
import BlockProfileButton from "@/components/button/block.profile"
import GenericIconButton from "@/components/button/genericIcon"
import BookCard from "@/components/card/book"
import RatingCard from "@/components/card/rating"
import SearchInput from "@/components/input/search"
import AboutTab from "@/components/section/provider/about.tab"
import ChatTab from "@/components/section/provider/chat.tab"
import ContentTab from "@/components/section/provider/content.tab"
import RatesTab from "@/components/section/provider/rates.tab"
import BookSessionModal from "@/components/section/provider/session.modal"
import TabPanel from "@/components/tab"
import { useRouter } from "next/router"
import { useState } from "react"

export default function ProviderProfilePage() {
	const router = useRouter()
	const [tab, setTab] = useState("Profile")

	const onSelectTab = (selected: string) => {
		setTab(selected)
	}

	return (
		<div className="mt-24 flex flex-col">
			<div className="fixed top-5 right-40 left-24 z-50 pl-8">
				<SearchInput />
			</div>
			<div className="relative flex items-center justify-center gap-24 pt-3 pb-10">
				<GenericIconButton
					className="absolute top-2 left-8 text-primary"
					icon={CaretLeftIcon}
					size="0.8rem"
					onClick={() => {
						router.back()
					}}
				>
					All Clients
				</GenericIconButton>
				<BlockProfileButton className="absolute top-2 right-12 dropdown-end" />

				<div className="flex flex-col items-center gap-6">
					<div className="relative">
						<Avatar url="/assets/img/profile/user3.png" />
					</div>
					<div className="flex flex-col items-center">
						<p className="font-medium text-heading-2xl">Jenna Johnson</p>
						<p className="text-lead-md !font-regular">Life Coach</p>
					</div>
				</div>
			</div>

			<TabPanel
				tabs={["Profile", "Chat", "Notes", "Payment"]}
				tab={tab}
				onSelected={(t: string) => onSelectTab(t)}
				className="justify-around shadow-md z-10"
			/>

			<div hidden={tab != "Profile"}>
				<AboutTab />
			</div>
			<div hidden={tab != "Chat"}>
				<ChatTab />
			</div>
			<div hidden={tab != "Notes"}>
				<RatesTab />
			</div>
			<div hidden={tab != "Payment"}>
				<ContentTab />
			</div>

			<BookSessionModal />
		</div>
	)
}
