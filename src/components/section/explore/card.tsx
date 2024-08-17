import GenericIconButton from "@/components/button/genericIcon"
import LinkButton from "@/components/button/link"
import ContentCard from "@/components/card"
import { useRouter } from "next/router"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"

const CardSection = ({
	title,
	onViewAll,
	addIcon = false,
}: {
	title: string
	onViewAll?: Function
	addIcon?: boolean
}) => {
	const router = useRouter()

	return (
		<div className="flex flex-col gap-6">
			<div className="flex justify-between items-center">
				<div className="flex gap-2">
					<h3 className="flex-1 text-heading-sm font-medium">{title}</h3>
					{addIcon && (
						<GenericIconButton className="filter-primary" icon={PlusCircleIcon} />
					)}
				</div>
				<LinkButton
					className="tz-md tz-secondary"
					onClick={() => {
						onViewAll && onViewAll()
					}}
				>
					view all
				</LinkButton>
			</div>
			<div className="grid grid-cols-6 gap-7">
				<ContentCard
					type="series"
					image="/assets/img/content/content_1.png"
					title="The impact of childhood on Adult"
					description="3 min read"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
				<ContentCard
					type="series"
					image="/assets/img/content/content_2.png"
					title="Addressing burnout among clients"
					description="3 min read"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
				<ContentCard
					type="series"
					image="/assets/img/content/content_3.png"
					title="Providing Culturally Competent Care"
					description="3 min read"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
				<ContentCard
					type="series"
					image="/assets/img/content/content_4.png"
					title="Navigating Ethical Challenges"
					description="3 min read"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
				<ContentCard
					type="series"
					image="/assets/img/content/content_5.png"
					title="Promoting Positive Body Image"
					description="3 min read"
					onClick={() =>
						router.push(
							"/explore/article/content-federation-and-composable-architecture",
						)
					}
				/>
				<ContentCard
					type="series"
					image="/assets/img/content/content_6.png"
					title="Cognitive-Behavioral Therapy"
					description="3 min read"
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

export default CardSection
