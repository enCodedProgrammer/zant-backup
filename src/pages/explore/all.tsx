import SearchIcon from "@/asset/icons/system/Search.svg"
import FilterButton from "@/components/button/filter"
import AvatarCard from "@/components/card/avatar"
import Image from "next/image"
import { useRouter } from "next/router"

const Section = () => {
	return (
		<div className="grid grid-cols-6 gap-7">
			<AvatarCard
				url="/assets/img/avatar/avatar_user1.png"
				name="Giana Madsen"
				title="Counselor"
			/>
			<AvatarCard
				url="/assets/img/avatar/avatar_user2.png"
				name="Giana Madsen"
				title="Counselor"
			/>
			<AvatarCard
				url="/assets/img/avatar/avatar_user3.png"
				name="Giana Madsen"
				title="Counselor"
			/>
			<AvatarCard
				url="/assets/img/avatar/avatar_user4.png"
				name="Giana Madsen"
				title="Counselor"
			/>
			<AvatarCard
				url="/assets/img/avatar/avatar_user5.png"
				name="Giana Madsen"
				title="Counselor"
			/>
			<AvatarCard
				url="/assets/img/avatar/avatar_user6.png"
				name="Giana Madsen"
				title="Counselor"
			/>
		</div>
	)
}

export default function ExplorePage() {
	const router = useRouter()

	return (
		<div className="flex flex-col mt-24">
			<div className="p-8 flex flex-col gap-6">
				<h1 className="text-heading-2xl font-medium">Explore</h1>
				<div className="flex gap-7">
					<div className="flex-1 relative">
						<span className="absolute h-center items-center pl-4 text-heading-lg font-bold">
							<Image className="w-5 h-5" src={SearchIcon} alt="search" />
						</span>
						<input
							type="text"
							placeholder="Search clients"
							className="input bg-gray-100 w-full py-2 h-full border-none pl-12"
						/>
					</div>
					<FilterButton className="tz-md" onClick={() => {}}>
						Export
					</FilterButton>
				</div>
			</div>
			<div className="px-8 py-10 bg-gray-25 flex flex-col gap-20">
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
