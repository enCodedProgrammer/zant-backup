import LinkButton from "@/components/button/link"
import AvatarCard from "@/components/card/avatar"
import { useRouter } from "next/router"

const ProfileSection = ({ title, onViewAll }: { title: string; onViewAll?: Function }) => {
	const router = useRouter()

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h3 className="flex-1 font-medium text-heading-sm">{title}</h3>
				<LinkButton className="tz-md tz-secondary" onClick={() => router.push('/provider')}>
					view all
				</LinkButton>
			</div>
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
		</div>
	)
}

export default ProfileSection
