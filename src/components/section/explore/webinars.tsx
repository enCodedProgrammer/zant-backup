import LinkButton from "@/components/button/link";
import ContentCard from "@/components/card"
import { useRouter } from "next/router"

export default function WebinarsSection({ title, onViewAll }: { title: string; onViewAll?: Function }) {
	const router = useRouter()

	return (
		<div className="flex flex-col gap-6">
			<div className="flex justify-between items-center">
				<h3 className="flex-1 text-heading-sm font-medium">{title}</h3>
				<LinkButton
					className="tz-md tz-secondary"
					onClick={() => {
						onViewAll && onViewAll()
					}}
				>
					view all
				</LinkButton>
			</div>
			<div className="grid grid-cols-3 gap-7">
				<ContentCard
					type="event"
					image="/assets/img/webinars/01.png"
					title="Zant Conference 2023"
					description="Wednesday, Jun 16th"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
				<ContentCard
					type="event"
					image="/assets/img/webinars/02.png"
					title="How Diet Affects Mental Wellbeing"
					description="Wednesday, Jun 16th"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
				<ContentCard
					type="event"
					image="/assets/img/webinars/03.png"
					title="Improving your Practice and Services "
					description="Wednesday, Jun 16th"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
			</div>
		</div>
	)
}
